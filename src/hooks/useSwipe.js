import { useCallback, useRef } from 'react'

/**
 * Lightweight horizontal swipe detection for mobile page turns.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 48 }) {
  const startX = useRef(null)
  const startY = useRef(null)

  const onTouchStart = useCallback((e) => {
    const touch = e.touches[0]
    startX.current = touch.clientX
    startY.current = touch.clientY
  }, [])

  const onTouchEnd = useCallback(
    (e) => {
      if (startX.current == null) return
      const touch = e.changedTouches[0]
      const dx = touch.clientX - startX.current
      const dy = touch.clientY - startY.current
      startX.current = null
      startY.current = null

      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return
      if (dx < 0) onSwipeLeft?.()
      else onSwipeRight?.()
    },
    [onSwipeLeft, onSwipeRight, threshold],
  )

  return { onTouchStart, onTouchEnd }
}
