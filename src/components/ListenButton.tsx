import { Volume2, VolumeX } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ListenButtonProps {
  text: string
  variant?: 'light' | 'dark'
}

export function ListenButton({ text, variant = 'light' }: ListenButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)

  useEffect(() => {
    const handleEnd = () => setIsSpeaking(false)
    speechSynthesis.addEventListener('end', handleEnd)
    return () => speechSynthesis.removeEventListener('end', handleEnd)
  }, [])

  const handleSpeak = () => {
    if (isSpeaking) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    setIsSpeaking(true)
    speechSynthesis.speak(utterance)
  }

  // Light variant = for dark backgrounds (white text/border)
  // Dark variant = for light backgrounds (purple text/border)
  const baseStyles = "inline-flex items-center gap-2 text-sm transition-colors"
  const variantStyles = variant === 'light'
    ? "text-white/80 hover:text-white"
    : "text-[var(--purple)] hover:text-[var(--purple-dark)]"

  const speakingStyles = "text-[var(--orange)]"

  return (
    <button
      onClick={handleSpeak}
      className={`${baseStyles} ${isSpeaking ? speakingStyles : variantStyles}`}
      aria-label={isSpeaking ? 'Stop listening' : 'Listen to this section'}
    >
      {isSpeaking ? (
        <>
          <VolumeX className="h-4 w-4" />
          <span>Stop</span>
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          <span>Listen</span>
        </>
      )}
    </button>
  )
}
