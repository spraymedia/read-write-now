<?php
/**
 * Admin Page
 *
 * Settings and management interface for the TTS plugin.
 */

if (!defined('ABSPATH')) {
    exit;
}

class RWN_TTS_Admin_Page {

    public function __construct() {
        add_action('admin_menu', [$this, 'add_menu_page']);
        add_action('admin_init', [$this, 'register_settings']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
    }

    public function add_menu_page() {
        add_options_page(
            'TTS Audio Settings',
            'TTS Audio',
            'manage_options',
            'rwn-tts-settings',
            [$this, 'render_settings_page']
        );
    }

    public function register_settings() {
        register_setting('rwn_tts_settings', 'rwn_tts_api_key', [
            'type' => 'string',
            'sanitize_callback' => 'sanitize_text_field',
        ]);

        register_setting('rwn_tts_settings', 'rwn_tts_model', [
            'type' => 'string',
            'default' => 'tts-1',
            'sanitize_callback' => 'sanitize_text_field',
        ]);

        register_setting('rwn_tts_settings', 'rwn_tts_voice', [
            'type' => 'string',
            'default' => 'nova',
            'sanitize_callback' => 'sanitize_text_field',
        ]);

        register_setting('rwn_tts_settings', 'rwn_tts_speed', [
            'type' => 'number',
            'default' => 0.9,
            'sanitize_callback' => [$this, 'sanitize_speed'],
        ]);
    }

    public function sanitize_speed($value) {
        $value = floatval($value);
        return max(0.25, min(4.0, $value));
    }

    public function enqueue_admin_assets($hook) {
        if ($hook !== 'settings_page_rwn-tts-settings') {
            return;
        }

        wp_enqueue_style(
            'rwn-tts-admin',
            RWN_TTS_PLUGIN_URL . 'assets/css/admin.css',
            [],
            RWN_TTS_VERSION
        );

        wp_enqueue_script(
            'rwn-tts-admin',
            RWN_TTS_PLUGIN_URL . 'assets/js/admin.js',
            ['jquery'],
            RWN_TTS_VERSION,
            true
        );

        wp_localize_script('rwn-tts-admin', 'rwnTTSAdmin', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('rwn_tts_nonce'),
        ]);
    }

    public function render_settings_page() {
        if (!current_user_can('manage_options')) {
            return;
        }

        $api_key = get_option('rwn_tts_api_key', '');
        $model = get_option('rwn_tts_model', 'tts-1');
        $voice = get_option('rwn_tts_voice', 'nova');
        $speed = get_option('rwn_tts_speed', '0.9');

        $has_api_key = !empty($api_key);

        // Test connection if we have a key
        $connection_status = null;
        if ($has_api_key) {
            $generator = new RWN_TTS_Generator();
            $connection_status = $generator->test_connection();
        }

        ?>
        <div class="wrap rwn-tts-admin">
            <h1>TTS Audio Settings</h1>

            <div class="rwn-tts-intro">
                <p>Generate natural-sounding audio narration for your pages using OpenAI's text-to-speech technology. Perfect for accessibility and literacy education.</p>
            </div>

            <?php if ($has_api_key && is_wp_error($connection_status)): ?>
                <div class="notice notice-error">
                    <p><strong>API Connection Error:</strong> <?php echo esc_html($connection_status->get_error_message()); ?></p>
                </div>
            <?php elseif ($has_api_key && $connection_status === true): ?>
                <div class="notice notice-success">
                    <p><strong>Connected to OpenAI API successfully.</strong></p>
                </div>
            <?php endif; ?>

            <div class="rwn-tts-sections">
                <!-- Settings Section -->
                <div class="rwn-tts-section">
                    <h2>API Settings</h2>
                    <form method="post" action="options.php">
                        <?php settings_fields('rwn_tts_settings'); ?>

                        <table class="form-table">
                            <tr>
                                <th scope="row">
                                    <label for="rwn_tts_api_key">OpenAI API Key</label>
                                </th>
                                <td>
                                    <input type="password"
                                           id="rwn_tts_api_key"
                                           name="rwn_tts_api_key"
                                           value="<?php echo esc_attr($api_key); ?>"
                                           class="regular-text"
                                           autocomplete="off">
                                    <p class="description">
                                        Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI Platform</a>.
                                        Requires payment method on file (pay-as-you-go).
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label for="rwn_tts_model">Model</label>
                                </th>
                                <td>
                                    <select id="rwn_tts_model" name="rwn_tts_model">
                                        <option value="tts-1" <?php selected($model, 'tts-1'); ?>>TTS-1 (Standard - faster)</option>
                                        <option value="tts-1-hd" <?php selected($model, 'tts-1-hd'); ?>>TTS-1-HD (High quality - 2x cost)</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label for="rwn_tts_voice">Voice</label>
                                </th>
                                <td>
                                    <select id="rwn_tts_voice" name="rwn_tts_voice">
                                        <?php foreach (RWN_TTS_Generator::get_voices() as $value => $label): ?>
                                            <option value="<?php echo esc_attr($value); ?>" <?php selected($voice, $value); ?>>
                                                <?php echo esc_html($label); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                    <p class="description">Nova is recommended for clear, warm narration.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label for="rwn_tts_speed">Speed</label>
                                </th>
                                <td>
                                    <input type="range"
                                           id="rwn_tts_speed"
                                           name="rwn_tts_speed"
                                           min="0.5"
                                           max="1.5"
                                           step="0.05"
                                           value="<?php echo esc_attr($speed); ?>">
                                    <span id="rwn_tts_speed_value"><?php echo esc_html($speed); ?>x</span>
                                    <p class="description">0.9x is slightly slower than normal - good for literacy learners.</p>
                                </td>
                            </tr>
                        </table>

                        <?php submit_button('Save Settings'); ?>
                    </form>
                </div>

                <?php if ($has_api_key): ?>
                <!-- Pages Section -->
                <div class="rwn-tts-section">
                    <h2>Page Audio</h2>
                    <p>Generate or regenerate audio for your pages. Audio files are stored on your server.</p>

                    <table class="wp-list-table widefat fixed striped">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th>Status</th>
                                <th>Est. Duration</th>
                                <th>Generated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $pages = get_pages([
                                'post_status' => 'publish',
                                'sort_column' => 'menu_order,post_title',
                            ]);

                            $extractor = new RWN_TTS_Content_Extractor();

                            foreach ($pages as $page):
                                $audio_url = get_post_meta($page->ID, '_rwn_tts_audio_url', true);
                                $generated = get_post_meta($page->ID, '_rwn_tts_audio_generated', true);
                                $has_audio = !empty($audio_url);
                                $content_changed = $has_audio && $extractor->has_content_changed($page->ID);
                                $duration = $extractor->estimate_duration($page->ID);

                                $status_class = 'status-none';
                                $status_text = 'No audio';
                                if ($has_audio && $content_changed) {
                                    $status_class = 'status-outdated';
                                    $status_text = 'Outdated';
                                } elseif ($has_audio) {
                                    $status_class = 'status-ready';
                                    $status_text = 'Ready';
                                }
                            ?>
                            <tr data-post-id="<?php echo esc_attr($page->ID); ?>">
                                <td>
                                    <strong><?php echo esc_html($page->post_title); ?></strong>
                                    <div class="row-actions">
                                        <a href="<?php echo get_permalink($page->ID); ?>" target="_blank">View</a> |
                                        <a href="<?php echo get_edit_post_link($page->ID); ?>">Edit</a>
                                    </div>
                                </td>
                                <td>
                                    <span class="rwn-tts-status <?php echo esc_attr($status_class); ?>">
                                        <?php echo esc_html($status_text); ?>
                                    </span>
                                </td>
                                <td>
                                    ~<?php echo esc_html($duration['formatted']); ?>
                                    <span class="description">(<?php echo number_format($duration['words']); ?> words)</span>
                                </td>
                                <td class="generated-date">
                                    <?php
                                    if ($generated) {
                                        echo esc_html(date_i18n(get_option('date_format') . ' ' . get_option('time_format'), strtotime($generated)));
                                    } else {
                                        echo '—';
                                    }
                                    ?>
                                </td>
                                <td>
                                    <button type="button"
                                            class="button rwn-tts-generate"
                                            data-post-id="<?php echo esc_attr($page->ID); ?>">
                                        <?php echo $has_audio ? 'Regenerate' : 'Generate'; ?>
                                    </button>
                                    <button type="button"
                                            class="button rwn-tts-edit-content"
                                            data-post-id="<?php echo esc_attr($page->ID); ?>">
                                        Edit Text
                                    </button>
                                    <?php if ($has_audio): ?>
                                    <button type="button"
                                            class="button rwn-tts-preview"
                                            data-audio-url="<?php echo esc_url($audio_url); ?>">
                                        Preview
                                    </button>
                                    <?php endif; ?>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <?php endif; ?>
            </div>

            <!-- Edit Content Modal -->
            <div id="rwn-tts-modal" class="rwn-tts-modal" hidden>
                <div class="rwn-tts-modal-content">
                    <div class="rwn-tts-modal-header">
                        <h3>Edit Audio Text</h3>
                        <button type="button" class="rwn-tts-modal-close">&times;</button>
                    </div>
                    <div class="rwn-tts-modal-body">
                        <p class="description">Edit the text that will be converted to audio. This allows you to improve pronunciation, remove unwanted text, or add clarifications.</p>
                        <textarea id="rwn-tts-content-editor" rows="15"></textarea>
                        <p class="rwn-tts-char-count">
                            <span id="rwn-tts-char-count">0</span> characters
                        </p>
                    </div>
                    <div class="rwn-tts-modal-footer">
                        <button type="button" class="button rwn-tts-reset-content">Reset to Auto-Extract</button>
                        <button type="button" class="button button-primary rwn-tts-save-content">Save Text</button>
                    </div>
                </div>
            </div>

            <!-- Audio Preview -->
            <audio id="rwn-tts-preview-audio" hidden></audio>
        </div>
        <?php
    }
}
