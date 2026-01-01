<?php
/**
 * OpenAI TTS Generator
 *
 * Handles audio generation using OpenAI's text-to-speech API.
 */

if (!defined('ABSPATH')) {
    exit;
}

class RWN_TTS_Generator {

    private $api_key;
    private $model;
    private $voice;
    private $speed;
    private $max_chars = 4096; // OpenAI TTS limit per request

    public function __construct() {
        $this->api_key = get_option('rwn_tts_api_key', '');
        $this->model = get_option('rwn_tts_model', 'tts-1');
        $this->voice = get_option('rwn_tts_voice', 'nova');
        $this->speed = floatval(get_option('rwn_tts_speed', '0.9'));
    }

    /**
     * Generate audio from text
     *
     * @param string $text The text to convert to speech
     * @param int $post_id The post ID for file naming
     * @return array|WP_Error Array with 'url' and 'path' on success, WP_Error on failure
     */
    public function generate($text, $post_id) {
        if (empty($this->api_key)) {
            return new WP_Error('no_api_key', 'OpenAI API key is not configured. Please add it in Settings > TTS Audio.');
        }

        // Clean and prepare text
        $text = $this->prepare_text($text);

        if (empty($text)) {
            return new WP_Error('empty_text', 'No text to convert to audio.');
        }

        // Handle long content by chunking
        if (strlen($text) > $this->max_chars) {
            return $this->generate_chunked($text, $post_id);
        }

        return $this->generate_single($text, $post_id);
    }

    /**
     * Generate a single audio file
     */
    private function generate_single($text, $post_id, $suffix = '') {
        $response = wp_remote_post('https://api.openai.com/v1/audio/speech', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json',
            ],
            'body' => json_encode([
                'model' => $this->model,
                'input' => $text,
                'voice' => $this->voice,
                'response_format' => 'mp3',
                'speed' => $this->speed,
            ]),
            'timeout' => 120,
        ]);

        if (is_wp_error($response)) {
            return $response;
        }

        $status_code = wp_remote_retrieve_response_code($response);
        $body = wp_remote_retrieve_body($response);

        if ($status_code !== 200) {
            $error_data = json_decode($body, true);
            $error_message = isset($error_data['error']['message'])
                ? $error_data['error']['message']
                : 'Unknown API error (HTTP ' . $status_code . ')';
            return new WP_Error('api_error', $error_message);
        }

        // Save the audio file
        $upload_dir = wp_upload_dir();
        $tts_dir = $upload_dir['basedir'] . '/' . RWN_TTS_UPLOAD_DIR;

        $filename = 'page-' . $post_id . $suffix . '-' . time() . '.mp3';
        $filepath = $tts_dir . '/' . $filename;
        $fileurl = $upload_dir['baseurl'] . '/' . RWN_TTS_UPLOAD_DIR . '/' . $filename;

        // Delete old audio file for this post
        $this->delete_old_audio($post_id);

        // Save new file
        $saved = file_put_contents($filepath, $body);

        if ($saved === false) {
            return new WP_Error('save_failed', 'Failed to save audio file. Check directory permissions.');
        }

        return [
            'url' => $fileurl,
            'path' => $filepath,
        ];
    }

    /**
     * Generate audio for long content by chunking and combining
     */
    private function generate_chunked($text, $post_id) {
        $chunks = $this->split_text($text);
        $temp_files = [];

        foreach ($chunks as $index => $chunk) {
            $result = $this->generate_single($chunk, $post_id, '-chunk-' . $index);

            if (is_wp_error($result)) {
                // Clean up any temp files
                foreach ($temp_files as $file) {
                    @unlink($file);
                }
                return $result;
            }

            $temp_files[] = $result['path'];
        }

        // Combine audio files
        $combined = $this->combine_audio_files($temp_files, $post_id);

        // Clean up chunk files
        foreach ($temp_files as $file) {
            @unlink($file);
        }

        return $combined;
    }

    /**
     * Split text into chunks at sentence boundaries
     */
    private function split_text($text) {
        $chunks = [];
        $sentences = preg_split('/(?<=[.!?])\s+/', $text);
        $current_chunk = '';

        foreach ($sentences as $sentence) {
            if (strlen($current_chunk) + strlen($sentence) + 1 > $this->max_chars) {
                if (!empty($current_chunk)) {
                    $chunks[] = trim($current_chunk);
                }
                $current_chunk = $sentence;
            } else {
                $current_chunk .= ' ' . $sentence;
            }
        }

        if (!empty($current_chunk)) {
            $chunks[] = trim($current_chunk);
        }

        return $chunks;
    }

    /**
     * Combine multiple MP3 files into one
     * Note: This is a simple concatenation that works for MP3s with same encoding
     */
    private function combine_audio_files($files, $post_id) {
        $upload_dir = wp_upload_dir();
        $tts_dir = $upload_dir['basedir'] . '/' . RWN_TTS_UPLOAD_DIR;

        $filename = 'page-' . $post_id . '-' . time() . '.mp3';
        $filepath = $tts_dir . '/' . $filename;
        $fileurl = $upload_dir['baseurl'] . '/' . RWN_TTS_UPLOAD_DIR . '/' . $filename;

        // Delete old audio file
        $this->delete_old_audio($post_id);

        // Simple MP3 concatenation
        $combined = fopen($filepath, 'wb');

        if (!$combined) {
            return new WP_Error('combine_failed', 'Failed to create combined audio file.');
        }

        foreach ($files as $file) {
            $content = file_get_contents($file);
            if ($content !== false) {
                fwrite($combined, $content);
            }
        }

        fclose($combined);

        return [
            'url' => $fileurl,
            'path' => $filepath,
        ];
    }

    /**
     * Delete old audio files for a post
     */
    private function delete_old_audio($post_id) {
        $upload_dir = wp_upload_dir();
        $tts_dir = $upload_dir['basedir'] . '/' . RWN_TTS_UPLOAD_DIR;

        // Find and delete existing files for this post
        $pattern = $tts_dir . '/page-' . $post_id . '-*.mp3';
        $files = glob($pattern);

        if ($files) {
            foreach ($files as $file) {
                @unlink($file);
            }
        }
    }

    /**
     * Prepare text for TTS
     */
    private function prepare_text($text) {
        // Decode HTML entities
        $text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');

        // Remove any remaining HTML tags
        $text = strip_tags($text);

        // Normalize whitespace
        $text = preg_replace('/\s+/', ' ', $text);

        // Remove special characters that don't read well
        $text = preg_replace('/[•·▪▸►→←↑↓★☆✓✗✔✘]/', '', $text);

        // Clean up phone numbers for better reading
        $text = preg_replace('/1800\s*018\s*802/', '1800, 018, 802', $text);

        // Add pauses after headings (periods if not present)
        $text = preg_replace('/([A-Z][^.!?]*[A-Z])\s+(?=[A-Z])/', '$1. ', $text);

        // Trim and clean
        $text = trim($text);

        return $text;
    }

    /**
     * Test API connection
     */
    public function test_connection() {
        if (empty($this->api_key)) {
            return new WP_Error('no_api_key', 'API key not configured');
        }

        // Make a minimal test request
        $response = wp_remote_post('https://api.openai.com/v1/audio/speech', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json',
            ],
            'body' => json_encode([
                'model' => 'tts-1',
                'input' => 'Test.',
                'voice' => 'nova',
            ]),
            'timeout' => 30,
        ]);

        if (is_wp_error($response)) {
            return $response;
        }

        $status_code = wp_remote_retrieve_response_code($response);

        if ($status_code === 200) {
            return true;
        }

        $body = wp_remote_retrieve_body($response);
        $error_data = json_decode($body, true);
        $error_message = isset($error_data['error']['message'])
            ? $error_data['error']['message']
            : 'API returned HTTP ' . $status_code;

        return new WP_Error('api_error', $error_message);
    }

    /**
     * Get available voices
     */
    public static function get_voices() {
        return [
            'alloy' => 'Alloy (neutral)',
            'echo' => 'Echo (male)',
            'fable' => 'Fable (British)',
            'onyx' => 'Onyx (deep male)',
            'nova' => 'Nova (female, warm)',
            'shimmer' => 'Shimmer (female, soft)',
        ];
    }
}
