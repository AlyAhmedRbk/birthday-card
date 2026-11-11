import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const HEARTS = [
  { left: '8%', delay: 0, size: 14, duration: 9 },
  { left: '22%', delay: 1.2, size: 10, duration: 11 },
  { left: '40%', delay: 0.6, size: 16, duration: 10 },
  { left: '58%', delay: 2, size: 12, duration: 12 },
  { left: '74%', delay: 0.3, size: 11, duration: 9.5 },
  { left: '88%', delay: 1.7, size: 15, duration: 11.5 },
]

export default function FloatingHearts({ className = '' }) {
  const reduced = usePrefersReducedMotion()

  if (reduced) return null

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {HEARTS.map((heart, i) => (
        <motion.span
          key={i}
          className="absolute bottom-[-10%] text-rose/50"
          style={{ left: heart.left, fontSize: heart.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '-120vh', opacity: [0, 0.7, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  )
}
