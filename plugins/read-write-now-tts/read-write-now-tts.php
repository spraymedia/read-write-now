<?php
/**
 * Plugin Name: Read Write Now TTS
 * Plugin URI: https://readwrite.linkz.au
 * Description: AI-powered text-to-speech for literacy education. Provides natural-sounding audio narration of page content.
 * Version: 1.0.0
 * Author: Read Write Now
 * License: GPL v2 or later
 * Text Domain: rwn-tts
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Plugin constants
define('RWN_TTS_VERSION', '1.0.0');
define('RWN_TTS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('RWN_TTS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('RWN_TTS_UPLOAD_DIR', 'tts-audio');

// Include required files
require_once RWN_TTS_PLUGIN_DIR . 'includes/class-tts-generator.php';
require_once RWN_TTS_PLUGIN_DIR . 'includes/class-content-extractor.php';
require_once RWN_TTS_PLUGIN_DIR . 'includes/class-admin-page.php';

/**
 * Main plugin class
 */
class RWN_TTS {

    private static $instance = null;

    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        // Initialize components
        add_action('init', [$this, 'init']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_assets']);
        add_action('wp_footer', [$this, 'render_floating_player']);

        // Admin hooks
        if (is_admin()) {
            new RWN_TTS_Admin_Page();
        }

        // AJAX handlers
        add_action('wp_ajax_rwn_tts_generate', [$this, 'ajax_generate_audio']);
        add_action('wp_ajax_rwn_tts_get_content', [$this, 'ajax_get_content']);
        add_action('wp_ajax_rwn_tts_save_content', [$this, 'ajax_save_content']);
    }

    public function init() {
        // Register post meta for audio URL
        register_post_meta('page', '_rwn_tts_audio_url', [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => false,
        ]);

        register_post_meta('page', '_rwn_tts_audio_generated', [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => false,
        ]);

        register_post_meta('page', '_rwn_tts_content_hash', [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => false,
        ]);

        register_post_meta('page', '_rwn_tts_custom_text', [
            'type' => 'string',
            'single' => true,
            'show_in_rest' => false,
        ]);

        // Create upload directory if needed
        $this->create_upload_directory();
    }

    private function create_upload_directory() {
        $upload_dir = wp_upload_dir();
        $tts_dir = $upload_dir['basedir'] . '/' . RWN_TTS_UPLOAD_DIR;

        if (!file_exists($tts_dir)) {
            wp_mkdir_p($tts_dir);

            // Add index.php for security
            file_put_contents($tts_dir . '/index.php', '<?php // Silence is golden');
        }
    }

    public function enqueue_frontend_assets() {
        // Only load on pages with audio
        if (!is_singular('page')) {
            return;
        }

        $post_id = get_the_ID();
        $audio_url = get_post_meta($post_id, '_rwn_tts_audio_url', true);

        if (empty($audio_url)) {
            return;
        }

        wp_enqueue_style(
            'rwn-tts-player',
            RWN_TTS_PLUGIN_URL . 'assets/css/floating-player.css',
            [],
            RWN_TTS_VERSION
        );

        wp_enqueue_script(
            'rwn-tts-player',
            RWN_TTS_PLUGIN_URL . 'assets/js/floating-player.js',
            [],
            RWN_TTS_VERSION,
            true
        );

        wp_localize_script('rwn-tts-player', 'rwnTTS', [
            'audioUrl' => $audio_url,
            'pageTitle' => get_the_title(),
        ]);
    }

    public function render_floating_player() {
        if (!is_singular('page')) {
            return;
        }

        $post_id = get_the_ID();
        $audio_url = get_post_meta($post_id, '_rwn_tts_audio_url', true);

        if (empty($audio_url)) {
            return;
        }

        ?>
        <div id="rwn-tts-player" class="rwn-tts-player" aria-label="Audio player for this page">
            <button class="rwn-tts-toggle" aria-expanded="false" aria-controls="rwn-tts-panel">
                <svg class="rwn-tts-icon-speaker" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                </svg>
                <span class="rwn-tts-label">Listen</span>
            </button>

            <div id="rwn-tts-panel" class="rwn-tts-panel" hidden>
                <div class="rwn-tts-panel-header">
                    <span>Listen to this page</span>
                    <button class="rwn-tts-close" aria-label="Close audio player">&times;</button>
                </div>

                <div class="rwn-tts-controls">
                    <button class="rwn-tts-play" aria-label="Play">
                        <svg class="rwn-tts-icon-play" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        <svg class="rwn-tts-icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
                            <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                        </svg>
                    </button>

                    <div class="rwn-tts-progress-container">
                        <input type="range" class="rwn-tts-progress" min="0" max="100" value="0" aria-label="Audio progress">
                        <div class="rwn-tts-time">
                            <span class="rwn-tts-current">0:00</span>
                            <span class="rwn-tts-duration">0:00</span>
                        </div>
                    </div>
                </div>

                <div class="rwn-tts-speed">
                    <span>Speed:</span>
                    <button class="rwn-tts-speed-btn" data-speed="0.75">0.75x</button>
                    <button class="rwn-tts-speed-btn active" data-speed="1">1x</button>
                    <button class="rwn-tts-speed-btn" data-speed="1.25">1.25x</button>
                    <button class="rwn-tts-speed-btn" data-speed="1.5">1.5x</button>
                </div>
            </div>
        </div>
        <?php
    }

    /**
     * AJAX handler to generate audio for a page
     */
    public function ajax_generate_audio() {
        check_ajax_referer('rwn_tts_nonce', 'nonce');

        if (!current_user_can('edit_pages')) {
            wp_send_json_error('Unauthorized');
        }

        $post_id = intval($_POST['post_id']);

        if (!$post_id) {
            wp_send_json_error('Invalid post ID');
        }

        // Get custom text or extract from page
        $custom_text = get_post_meta($post_id, '_rwn_tts_custom_text', true);

        if (!empty($custom_text)) {
            $text = $custom_text;
        } else {
            $extractor = new RWN_TTS_Content_Extractor();
            $text = $extractor->extract($post_id);
        }

        if (empty($text)) {
            wp_send_json_error('No content to convert');
        }

        // Generate audio
        $generator = new RWN_TTS_Generator();
        $result = $generator->generate($text, $post_id);

        if (is_wp_error($result)) {
            wp_send_json_error($result->get_error_message());
        }

        // Update post meta
        update_post_meta($post_id, '_rwn_tts_audio_url', $result['url']);
        update_post_meta($post_id, '_rwn_tts_audio_generated', current_time('mysql'));
        update_post_meta($post_id, '_rwn_tts_content_hash', md5($text));

        wp_send_json_success([
            'url' => $result['url'],
            'generated' => current_time('mysql'),
        ]);
    }

    /**
     * AJAX handler to get page content for preview/editing
     */
    public function ajax_get_content() {
        check_ajax_referer('rwn_tts_nonce', 'nonce');

        if (!current_user_can('edit_pages')) {
            wp_send_json_error('Unauthorized');
        }

        $post_id = intval($_POST['post_id']);

        // Check for custom text first
        $custom_text = get_post_meta($post_id, '_rwn_tts_custom_text', true);

        if (!empty($custom_text)) {
            wp_send_json_success([
                'content' => $custom_text,
                'is_custom' => true,
            ]);
        }

        // Extract from page
        $extractor = new RWN_TTS_Content_Extractor();
        $text = $extractor->extract($post_id);

        wp_send_json_success([
            'content' => $text,
            'is_custom' => false,
        ]);
    }

    /**
     * AJAX handler to save custom content
     */
    public function ajax_save_content() {
        check_ajax_referer('rwn_tts_nonce', 'nonce');

        if (!current_user_can('edit_pages')) {
            wp_send_json_error('Unauthorized');
        }

        $post_id = intval($_POST['post_id']);
        $content = sanitize_textarea_field($_POST['content']);

        update_post_meta($post_id, '_rwn_tts_custom_text', $content);

        wp_send_json_success();
    }
}

// Initialize plugin
add_action('plugins_loaded', function() {
    RWN_TTS::get_instance();
});

// Activation hook
register_activation_hook(__FILE__, function() {
    // Create upload directory
    $upload_dir = wp_upload_dir();
    $tts_dir = $upload_dir['basedir'] . '/' . RWN_TTS_UPLOAD_DIR;

    if (!file_exists($tts_dir)) {
        wp_mkdir_p($tts_dir);
        file_put_contents($tts_dir . '/index.php', '<?php // Silence is golden');
    }
});
