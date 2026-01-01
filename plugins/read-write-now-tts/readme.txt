=== Read Write Now TTS ===
Contributors: readwritenow
Tags: text-to-speech, accessibility, audio, literacy, openai
Requires at least: 5.8
Tested up to: 6.4
Stable tag: 1.0.0
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

AI-powered text-to-speech for WordPress. Generate natural-sounding audio narration of your pages using OpenAI's TTS API.

== Description ==

Read Write Now TTS provides high-quality audio narration for your WordPress pages. Perfect for:

* Literacy education websites
* Accessibility improvements
* Content that benefits from audio alternatives
* Readers who prefer listening

**Features:**

* Natural AI voices powered by OpenAI
* Pre-generated audio for fast playback
* Floating audio player that appears on pages with audio
* Speed control (0.5x to 2x)
* Mobile-responsive design
* Full keyboard navigation
* Edit text before generation for better pronunciation
* Content change detection to flag outdated audio

== Installation ==

1. Upload the plugin folder to `/wp-content/plugins/`
2. Activate the plugin through the 'Plugins' menu
3. Go to Settings > TTS Audio
4. Enter your OpenAI API key
5. Generate audio for your pages

**Getting an OpenAI API Key:**

1. Go to https://platform.openai.com/
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new secret key
5. Add a payment method (pay-as-you-go)

== Frequently Asked Questions ==

= How much does it cost? =

OpenAI TTS costs approximately $15 per 1 million characters. A typical page with 2,500 characters costs about $0.04 to generate. You only pay when generating or regenerating audio.

= Which voice should I use? =

We recommend "Nova" for literacy education - it's warm, clear, and natural-sounding. "Shimmer" is also good for a softer voice.

= Can I edit the text before generating? =

Yes! Click "Edit Text" next to any page to customize what gets converted to audio. This is useful for improving pronunciation or removing unwanted content.

= Does it work with Elementor? =

Yes, the plugin extracts content from Elementor pages automatically.

= Where are the audio files stored? =

Audio files are stored in your WordPress uploads folder at `/wp-content/uploads/tts-audio/`.

== Changelog ==

= 1.0.0 =
* Initial release
