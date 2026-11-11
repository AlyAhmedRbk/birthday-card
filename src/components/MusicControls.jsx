import { Music, Pause } from 'lucide-react'
import { useAudio } from '../hooks/useAudio'

export default function MusicControls() {
  const { isPlaying, hasError, toggle, labels } = useAudio()

  if (hasError) return null

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? labels.labelPause : labels.labelPlay}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40 bg-burgundy-deep/70 text-champagne shadow-glow-gold backdrop-blur-md transition hover:scale-105 hover:border-champagne hover:bg-burgundy/80"
    >
      {isPlaying ? <Pause size={18} aria-hidden /> : <Music size={18} aria-hidden />}
    </button>
  )
}
