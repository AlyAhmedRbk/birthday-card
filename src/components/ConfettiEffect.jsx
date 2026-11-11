import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function ConfettiEffect({ active = true, recycle = true, pieces }) {
  const reduced = usePrefersReducedMotion()
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  if (!active || reduced || !size.width) return null

  const isMobile = size.width < 640

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={pieces ?? (isMobile ? 70 : recycle ? 110 : 200)}
      recycle={recycle}
      gravity={0.11}
      colors={['#E8A0B0', '#E8D5A8', '#F6D5DE', '#C9A96E', '#D8CCE8', '#FAF6F0']}
      style={{ position: 'fixed', inset: 0, zIndex: 40, pointerEvents: 'none' }}
    />
  )
}
