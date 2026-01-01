<?php
/**
 * Content Extractor
 *
 * Extracts readable text content from WordPress/Elementor pages.
 */

if (!defined('ABSPATH')) {
    exit;
}

class RWN_TTS_Content_Extractor {

    /**
     * Extract readable content from a page
     *
     * @param int $post_id The post ID
     * @return string The extracted text content
     */
    public function extract($post_id) {
        $post = get_post($post_id);

        if (!$post) {
            return '';
        }

        // Start with the title
        $title = get_the_title($post_id);

        // Get rendered content
        $content = $this->get_rendered_content($post);

        // Clean and format
        $text = $this->clean_content($title, $content);

        return $text;
    }

    /**
     * Get the fully rendered content of a post
     */
    private function get_rendered_content($post) {
        // Check if using Elementor
        if ($this->is_elementor_page($post->ID)) {
            return $this->get_elementor_content($post->ID);
        }

        // Standard WordPress content
        $content = apply_filters('the_content', $post->post_content);

        return $content;
    }

    /**
     * Check if a page is built with Elementor
     */
    private function is_elementor_page($post_id) {
        return get_post_meta($post_id, '_elementor_edit_mode', true) === 'builder';
    }

    /**
     * Get content from an Elementor page
     */
    private function get_elementor_content($post_id) {
        // Try to get Elementor's rendered content
        if (class_exists('\Elementor\Plugin')) {
            $elementor = \Elementor\Plugin::instance();

            // Get the frontend instance
            $frontend = $elementor->frontend;

            if ($frontend) {
                // Get the builder content
                $content = $frontend->get_builder_content_for_display($post_id);

                if (!empty($content)) {
                    return $content;
                }
            }
        }

        // Fallback: get the post content and apply filters
        $post = get_post($post_id);
        return apply_filters('the_content', $post->post_content);
    }

    /**
     * Clean HTML content to readable text
     */
    private function clean_content($title, $html_content) {
        // Remove script and style elements completely
        $html_content = preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', '', $html_content);
        $html_content = preg_replace('/<style\b[^>]*>(.*?)<\/style>/is', '', $html_content);

        // Remove navigation, header, footer elements
        $html_content = preg_replace('/<nav\b[^>]*>(.*?)<\/nav>/is', '', $html_content);
        $html_content = preg_replace('/<header\b[^>]*>(.*?)<\/header>/is', '', $html_content);
        $html_content = preg_replace('/<footer\b[^>]*>(.*?)<\/footer>/is', '', $html_content);

        // Remove elements that shouldn't be read
        $html_content = preg_replace('/<aside\b[^>]*>(.*?)<\/aside>/is', '', $html_content);
        $html_content = preg_replace('/<form\b[^>]*>(.*?)<\/form>/is', '', $html_content);

        // Remove hidden elements
        $html_content = preg_replace('/<[^>]+(?:hidden|display:\s*none|visibility:\s*hidden)[^>]*>.*?<\/[^>]+>/is', '', $html_content);

        // Remove buttons, inputs, and interactive elements
        $html_content = preg_replace('/<button\b[^>]*>(.*?)<\/button>/is', '', $html_content);
        $html_content = preg_replace('/<input\b[^>]*>/is', '', $html_content);
        $html_content = preg_replace('/<select\b[^>]*>(.*?)<\/select>/is', '', $html_content);

        // Remove Elementor-specific non-content elements
        $html_content = preg_replace('/<div[^>]*class="[^"]*elementor-background-overlay[^"]*"[^>]*>.*?<\/div>/is', '', $html_content);
        $html_content = preg_replace('/<div[^>]*class="[^"]*elementor-shape[^"]*"[^>]*>.*?<\/div>/is', '', $html_content);

        // Convert common elements to readable format
        // Add periods after headings
        $html_content = preg_replace('/<\/h[1-6]>/i', '. </h$1>', $html_content);

        // Add periods after list items
        $html_content = preg_replace('/<\/li>/i', '. </li>', $html_content);

        // Add periods after paragraphs if not present
        $html_content = preg_replace('/<\/p>/i', ' </p>', $html_content);

        // Convert line breaks to spaces
        $html_content = preg_replace('/<br\s*\/?>/i', ' ', $html_content);

        // Strip remaining HTML tags
        $text = strip_tags($html_content);

        // Decode HTML entities
        $text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');

        // Normalize whitespace
        $text = preg_replace('/\s+/', ' ', $text);

        // Remove common boilerplate phrases
        $boilerplate = [
            'Skip to content',
            'Menu Toggle',
            'Search',
            'Read more',
            'Learn More',
            'Click here',
            'Listen',
        ];

        foreach ($boilerplate as $phrase) {
            $text = preg_replace('/\b' . preg_quote($phrase, '/') . '\b/i', '', $text);
        }

        // Fix multiple periods
        $text = preg_replace('/\.{2,}/', '.', $text);

        // Fix spacing around periods
        $text = preg_replace('/\s*\.\s*/', '. ', $text);

        // Fix spacing around commas
        $text = preg_replace('/\s*,\s*/', ', ', $text);

        // Remove empty periods
        $text = preg_replace('/\.\s*\./', '.', $text);

        // Combine title and content
        $full_text = $title . '. ' . trim($text);

        // Final cleanup
        $full_text = preg_replace('/\s+/', ' ', $full_text);
        $full_text = trim($full_text);

        return $full_text;
    }

    /**
     * Get a preview of the extracted content (first 500 chars)
     */
    public function get_preview($post_id, $length = 500) {
        $content = $this->extract($post_id);

        if (strlen($content) <= $length) {
            return $content;
        }

        // Cut at word boundary
        $preview = substr($content, 0, $length);
        $preview = substr($preview, 0, strrpos($preview, ' '));

        return $preview . '...';
    }

    /**
     * Estimate audio duration based on text length
     * Average speaking rate is about 150 words per minute
     */
    public function estimate_duration($post_id) {
        $content = $this->extract($post_id);
        $word_count = str_word_count($content);

        // At 0.9 speed (our default), it's slightly slower
        $words_per_minute = 135;
        $minutes = $word_count / $words_per_minute;
        $seconds = round($minutes * 60);

        return [
            'words' => $word_count,
            'seconds' => $seconds,
            'formatted' => gmdate('i:s', $seconds),
        ];
    }

    /**
     * Get content hash for change detection
     */
    public function get_content_hash($post_id) {
        $content = $this->extract($post_id);
        return md5($content);
    }

    /**
     * Check if content has changed since last generation
     */
    public function has_content_changed($post_id) {
        $current_hash = $this->get_content_hash($post_id);
        $stored_hash = get_post_meta($post_id, '_rwn_tts_content_hash', true);

        if (empty($stored_hash)) {
            return true; // No previous hash, consider it changed
        }

        return $current_hash !== $stored_hash;
    }
}
