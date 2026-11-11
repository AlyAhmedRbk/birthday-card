import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/** Decorative graduation accents for the graduation book chapter. */
export default function GraduationPage({ active = true }) {
  const reduced = usePrefersReducedMotion()
  if (!active) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      <motion.div
        className="absolute right-5 top-5 text-champagne-deep/70"
        animate={reduced ? undefined : { y: [0, -4, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <GraduationCap size={26} />
      </motion.div>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="absolute text-xs text-rose/45"
          style={{ left: `${14 + i * 16}%`, bottom: `${10 + (i % 2) * 6}%` }}
          animate={
            reduced ? undefined : { y: [0, -8, 0], opacity: [0.25, 0.7, 0.25] }
          }
          transition={{ duration: 2.4 + i * 0.15, repeat: Infinity, delay: i * 0.15 }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  )
}
