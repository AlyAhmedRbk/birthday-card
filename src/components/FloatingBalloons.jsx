import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const BALLOONS = [
  { x: '6%', color: '#E8A0B0', delay: 0, scale: 1 },
  { x: '18%', color: '#E8D5A8', delay: 0.4, scale: 0.85 },
  { x: '78%', color: '#D8CCE8', delay: 0.2, scale: 0.95 },
  { x: '90%', color: '#C56B82', delay: 0.7, scale: 0.8 },
  { x: '48%', color: '#F6D5DE', delay: 1, scale: 0.7 },
]

export default function FloatingBalloons() {
  const reduced = usePrefersReducedMotion()
  if (reduced) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {BALLOONS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-20%]"
          style={{ left: b.x, scale: b.scale }}
          animate={{ y: ['0%', '-130%'], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 14 + i,
            delay: b.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width="36" height="56" viewBox="0 0 36 56" fill="none">
            <ellipse cx="18" cy="20" rx="16" ry="20" fill={b.color} opacity="0.85" />
            <path d="M18 40 L18 54" stroke="rgba(250,246,240,0.45)" strokeWidth="1.2" />
            <path d="M14 40 Q18 37 22 40" fill={b.color} opacity="0.9" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
