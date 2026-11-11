import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function createParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    size: 2 + (i % 4),
    delay: (i % 10) * 0.35,
    duration: 4 + (i % 6),
    kind: i % 5 === 0 ? 'heart' : i % 3 === 0 ? 'star' : 'dot',
  }))
}

export default function MagicalParticles({ count = 28, className = '' }) {
  const reduced = usePrefersReducedMotion()
  const particles = useMemo(() => createParticles(count), [count])

  if (reduced) return null

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            color: p.kind === 'heart' ? 'rgba(232,160,176,0.7)' : 'rgba(232,213,168,0.75)',
            fontSize: p.kind === 'dot' ? 0 : p.size + 6,
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 0.9, 0],
            scale: [0.4, 1.15, 0.5],
            y: [0, -18, -36],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {p.kind === 'heart' ? '♥' : p.kind === 'star' ? '✦' : (
            <span className="block h-full w-full rounded-full bg-champagne/70" />
          )}
        </motion.span>
      ))}
    </div>
  )
}
