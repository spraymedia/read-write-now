/**
 * Read Write Now TTS - Admin JavaScript
 */

(function($) {
    'use strict';

    // Preview audio
    const previewAudio = document.getElementById('rwn-tts-preview-audio');

    // Speed slider display
    const speedSlider = document.getElementById('rwn_tts_speed');
    const speedValue = document.getElementById('rwn_tts_speed_value');

    if (speedSlider && speedValue) {
        speedSlider.addEventListener('input', function() {
            speedValue.textContent = this.value + 'x';
        });
    }

    // Generate audio button
    $(document).on('click', '.rwn-tts-generate', function() {
        const btn = $(this);
        const row = btn.closest('tr');
        const postId = btn.data('post-id');

        btn.prop('disabled', true).text('Generating...');
        row.find('.rwn-tts-status').removeClass('status-ready status-outdated status-none').addClass('status-generating').text('Generating...');

        $.ajax({
            url: rwnTTSAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'rwn_tts_generate',
                nonce: rwnTTSAdmin.nonce,
                post_id: postId
            },
            success: function(response) {
                if (response.success) {
                    row.find('.rwn-tts-status').removeClass('status-generating').addClass('status-ready').text('Ready');
                    row.find('.generated-date').text(response.data.generated);
                    btn.text('Regenerate');

                    // Add/update preview button
                    let previewBtn = row.find('.rwn-tts-preview');
                    if (previewBtn.length === 0) {
                        btn.after('<button type="button" class="button rwn-tts-preview" data-audio-url="' + response.data.url + '">Preview</button>');
                    } else {
                        previewBtn.data('audio-url', response.data.url);
                    }

                    showNotice('Audio generated successfully!', 'success');
                } else {
                    row.find('.rwn-tts-status').removeClass('status-generating').addClass('status-none').text('Error');
                    showNotice('Error: ' + response.data, 'error');
                }
            },
            error: function() {
                row.find('.rwn-tts-status').removeClass('status-generating').addClass('status-none').text('Error');
                showNotice('Network error. Please try again.', 'error');
            },
            complete: function() {
                btn.prop('disabled', false);
            }
        });
    });

    // Preview audio
    $(document).on('click', '.rwn-tts-preview', function() {
        const audioUrl = $(this).data('audio-url');

        if (previewAudio.src === audioUrl && !previewAudio.paused) {
            previewAudio.pause();
            $(this).text('Preview');
        } else {
            previewAudio.src = audioUrl;
            previewAudio.play();
            $(this).text('Stop');
        }
    });

    previewAudio.addEventListener('ended', function() {
        $('.rwn-tts-preview').text('Preview');
    });

    // Edit content modal
    const modal = $('#rwn-tts-modal');
    const contentEditor = $('#rwn-tts-content-editor');
    const charCount = $('#rwn-tts-char-count');
    let currentEditPostId = null;

    $(document).on('click', '.rwn-tts-edit-content', function() {
        currentEditPostId = $(this).data('post-id');
        modal.removeAttr('hidden').show();

        // Load content
        contentEditor.val('Loading...');

        $.ajax({
            url: rwnTTSAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'rwn_tts_get_content',
                nonce: rwnTTSAdmin.nonce,
                post_id: currentEditPostId
            },
            success: function(response) {
                if (response.success) {
                    contentEditor.val(response.data.content);
                    updateCharCount();
                } else {
                    contentEditor.val('Error loading content: ' + response.data);
                }
            },
            error: function() {
                contentEditor.val('Network error loading content.');
            }
        });
    });

    // Close modal
    $(document).on('click', '.rwn-tts-modal-close', function() {
        modal.attr('hidden', true).hide();
        currentEditPostId = null;
    });

    // Click outside to close
    modal.on('click', function(e) {
        if (e.target === this) {
            modal.attr('hidden', true).hide();
            currentEditPostId = null;
        }
    });

    // Character count
    contentEditor.on('input', updateCharCount);

    function updateCharCount() {
        charCount.text(contentEditor.val().length.toLocaleString());
    }

    // Save content
    $(document).on('click', '.rwn-tts-save-content', function() {
        const btn = $(this);
        btn.prop('disabled', true).text('Saving...');

        $.ajax({
            url: rwnTTSAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'rwn_tts_save_content',
                nonce: rwnTTSAdmin.nonce,
                post_id: currentEditPostId,
                content: contentEditor.val()
            },
            success: function(response) {
                if (response.success) {
                    showNotice('Text saved. Click "Regenerate" to update the audio.', 'success');
                    modal.attr('hidden', true).hide();

                    // Mark as outdated
                    $('tr[data-post-id="' + currentEditPostId + '"]')
                        .find('.rwn-tts-status')
                        .removeClass('status-ready')
                        .addClass('status-outdated')
                        .text('Outdated');
                } else {
                    showNotice('Error: ' + response.data, 'error');
                }
            },
            error: function() {
                showNotice('Network error. Please try again.', 'error');
            },
            complete: function() {
                btn.prop('disabled', false).text('Save Text');
            }
        });
    });

    // Reset to auto-extract
    $(document).on('click', '.rwn-tts-reset-content', function() {
        if (confirm('Reset to automatically extracted content? Any custom edits will be lost.')) {
            $.ajax({
                url: rwnTTSAdmin.ajaxUrl,
                type: 'POST',
                data: {
                    action: 'rwn_tts_save_content',
                    nonce: rwnTTSAdmin.nonce,
                    post_id: currentEditPostId,
                    content: ''
                },
                success: function() {
                    // Reload content
                    $.ajax({
                        url: rwnTTSAdmin.ajaxUrl,
                        type: 'POST',
                        data: {
                            action: 'rwn_tts_get_content',
                            nonce: rwnTTSAdmin.nonce,
                            post_id: currentEditPostId
                        },
                        success: function(response) {
                            if (response.success) {
                                contentEditor.val(response.data.content);
                                updateCharCount();
                                showNotice('Reset to auto-extracted content.', 'success');
                            }
                        }
                    });
                }
            });
        }
    });

    // Show notice
    function showNotice(message, type) {
        const notice = $('<div class="notice notice-' + type + ' is-dismissible"><p>' + message + '</p></div>');
        $('.rwn-tts-admin h1').after(notice);

        // Auto-dismiss after 5 seconds
        setTimeout(function() {
            notice.fadeOut(function() {
                $(this).remove();
            });
        }, 5000);
    }

})(jQuery);
