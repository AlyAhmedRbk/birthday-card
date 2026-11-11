import { useCallback, useEffect, useRef, useState } from 'react'
import { audio as audioContent } from '../content/birthdayMessages'

/**
 * Optional background music — never autoplays.
 * Replace /public/audio/background.mp3 with your chosen track.
 */
export function useAudio(src = audioContent.src) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const el = new Audio(src)
    el.loop = true
    el.preload = 'metadata'
    el.volume = 0.45

    const onCanPlay = () => setIsReady(true)
    const onError = () => {
      setHasError(true)
      setIsReady(false)
    }
    const onEnded = () => setIsPlaying(false)

    el.addEventListener('canplaythrough', onCanPlay)
    el.addEventListener('error', onError)
    el.addEventListener('ended', onEnded)
    audioRef.current = el

    return () => {
      el.pause()
      el.removeEventListener('canplaythrough', onCanPlay)
      el.removeEventListener('error', onError)
      el.removeEventListener('ended', onEnded)
      audioRef.current = null
    }
  }, [src])

  const toggle = useCallback(async () => {
    const el = audioRef.current
    if (!el || hasError) return

    try {
      if (el.paused) {
        await el.play()
        setIsPlaying(true)
      } else {
        el.pause()
        setIsPlaying(false)
      }
    } catch {
      setIsPlaying(false)
    }
  }, [hasError])

  const pause = useCallback(() => {
    const el = audioRef.current
    if (!el) return
    el.pause()
    setIsPlaying(false)
  }, [])

  return { isPlaying, isReady, hasError, toggle, pause, labels: audioContent }
}
