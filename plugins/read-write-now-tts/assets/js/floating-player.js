/**
 * Read Write Now TTS - Floating Audio Player
 *
 * A simple, accessible audio player for page narration.
 */

(function() {
    'use strict';

    // Exit if no audio configured
    if (typeof rwnTTS === 'undefined' || !rwnTTS.audioUrl) {
        return;
    }

    const player = document.getElementById('rwn-tts-player');
    if (!player) return;

    // Elements
    const toggleBtn = player.querySelector('.rwn-tts-toggle');
    const panel = document.getElementById('rwn-tts-panel');
    const closeBtn = player.querySelector('.rwn-tts-close');
    const playBtn = player.querySelector('.rwn-tts-play');
    const playIcon = player.querySelector('.rwn-tts-icon-play');
    const pauseIcon = player.querySelector('.rwn-tts-icon-pause');
    const progressBar = player.querySelector('.rwn-tts-progress');
    const currentTimeEl = player.querySelector('.rwn-tts-current');
    const durationEl = player.querySelector('.rwn-tts-duration');
    const speedBtns = player.querySelectorAll('.rwn-tts-speed-btn');

    // Create audio element
    const audio = new Audio(rwnTTS.audioUrl);
    audio.preload = 'metadata';

    let isPlaying = false;
    let isOpen = false;

    // Format time as mm:ss
    function formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Update UI state
    function updatePlayState() {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            playBtn.setAttribute('aria-label', 'Pause');
            toggleBtn.classList.add('playing');
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            playBtn.setAttribute('aria-label', 'Play');
            toggleBtn.classList.remove('playing');
        }
    }

    // Toggle panel visibility
    function togglePanel() {
        isOpen = !isOpen;
        panel.hidden = !isOpen;
        toggleBtn.setAttribute('aria-expanded', isOpen);

        if (isOpen) {
            player.classList.add('open');
        } else {
            player.classList.remove('open');
        }
    }

    // Play/Pause toggle
    function togglePlay() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(function(e) {
                console.error('Audio play failed:', e);
            });
        }
    }

    // Set playback speed
    function setSpeed(speed) {
        audio.playbackRate = parseFloat(speed);
        speedBtns.forEach(function(btn) {
            btn.classList.toggle('active', btn.dataset.speed === speed.toString());
        });
    }

    // Event Listeners

    // Toggle button
    toggleBtn.addEventListener('click', function() {
        togglePanel();
    });

    // Close button
    closeBtn.addEventListener('click', function() {
        if (isOpen) togglePanel();
    });

    // Play button
    playBtn.addEventListener('click', togglePlay);

    // Audio events
    audio.addEventListener('play', function() {
        isPlaying = true;
        updatePlayState();
    });

    audio.addEventListener('pause', function() {
        isPlaying = false;
        updatePlayState();
    });

    audio.addEventListener('ended', function() {
        isPlaying = false;
        updatePlayState();
        progressBar.value = 0;
        currentTimeEl.textContent = '0:00';
    });

    audio.addEventListener('loadedmetadata', function() {
        durationEl.textContent = formatTime(audio.duration);
        progressBar.max = 100;
    });

    audio.addEventListener('timeupdate', function() {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener('error', function(e) {
        console.error('Audio error:', e);
        currentTimeEl.textContent = 'Error';
    });

    // Progress bar seeking
    progressBar.addEventListener('input', function() {
        if (audio.duration) {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        }
    });

    // Speed buttons
    speedBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            setSpeed(this.dataset.speed);
        });
    });

    // Keyboard navigation
    player.addEventListener('keydown', function(e) {
        switch (e.key) {
            case 'Escape':
                if (isOpen) togglePanel();
                break;
            case ' ':
                if (document.activeElement === playBtn || document.activeElement === toggleBtn) {
                    e.preventDefault();
                    if (isOpen) {
                        togglePlay();
                    } else {
                        togglePanel();
                    }
                }
                break;
            case 'ArrowLeft':
                if (isOpen) {
                    e.preventDefault();
                    audio.currentTime = Math.max(0, audio.currentTime - 10);
                }
                break;
            case 'ArrowRight':
                if (isOpen) {
                    e.preventDefault();
                    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
                }
                break;
        }
    });

    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        if (isOpen && !player.contains(e.target)) {
            togglePanel();
        }
    });

    // Announce to screen readers
    toggleBtn.setAttribute('aria-label', 'Listen to this page - opens audio player');

    // Show player with animation
    setTimeout(function() {
        player.classList.add('visible');
    }, 500);

})();
