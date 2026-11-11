import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * Original SVG panda with glowing heart — used in intro and finale.
 */
export default function AnimatedPanda({
  size = 220,
  showHeart = true,
  className = '',
  animate = true,
}) {
  const reduced = usePrefersReducedMotion()
  const shouldAnimate = animate && !reduced

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      initial={shouldAnimate ? { opacity: 0, scale: 0.85, y: 24 } : false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-[12%] rounded-full bg-rose/25 blur-2xl"
        animate={
          shouldAnimate
            ? { opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.05, 0.95] }
            : undefined
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <svg
        viewBox="0 0 240 240"
        width="100%"
        height="100%"
        role="img"
        aria-label="Cute panda holding a glowing heart"
      >
        <defs>
          <radialGradient id="pandaFace" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#FFFBF7" />
            <stop offset="70%" stopColor="#F7F2EC" />
            <stop offset="100%" stopColor="#E8DFD6" />
          </radialGradient>
          <radialGradient id="heartFill" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFD0DA" />
            <stop offset="55%" stopColor="#E8799A" />
            <stop offset="100%" stopColor="#B84A6A" />
          </radialGradient>
          <filter id="heartSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="68" cy="62" rx="28" ry="30" fill="#1A1216" />
        <ellipse cx="172" cy="62" rx="28" ry="30" fill="#1A1216" />
        <ellipse cx="68" cy="64" rx="14" ry="15" fill="#3A2A32" />
        <ellipse cx="172" cy="64" rx="14" ry="15" fill="#3A2A32" />

        <ellipse cx="120" cy="118" rx="78" ry="72" fill="url(#pandaFace)" />

        <ellipse cx="88" cy="112" rx="22" ry="26" fill="#1A1216" transform="rotate(-12 88 112)" />
        <ellipse cx="152" cy="112" rx="22" ry="26" fill="#1A1216" transform="rotate(12 152 112)" />

        <motion.g
          animate={shouldAnimate ? { scaleY: [1, 1, 0.12, 1, 1] } : undefined}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.42, 0.46, 0.5, 1] }}
          style={{ transformOrigin: '120px 112px' }}
        >
          <circle cx="90" cy="112" r="7" fill="#FAF6F0" />
          <circle cx="150" cy="112" r="7" fill="#FAF6F0" />
          <circle cx="92" cy="113" r="3.5" fill="#1A1216" />
          <circle cx="152" cy="113" r="3.5" fill="#1A1216" />
          <circle cx="93.5" cy="111" r="1.2" fill="#FFFFFF" />
          <circle cx="153.5" cy="111" r="1.2" fill="#FFFFFF" />
        </motion.g>

        <ellipse cx="68" cy="138" rx="12" ry="7" fill="#E8A0B0" opacity="0.45" />
        <ellipse cx="172" cy="138" rx="12" ry="7" fill="#E8A0B0" opacity="0.45" />

        <ellipse cx="120" cy="138" rx="9" ry="6" fill="#1A1216" />
        <path
          d="M112 148 Q120 156 128 148"
          fill="none"
          stroke="#1A1216"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <ellipse cx="62" cy="168" rx="22" ry="16" fill="#1A1216" transform="rotate(-25 62 168)" />
        <ellipse cx="178" cy="168" rx="22" ry="16" fill="#1A1216" transform="rotate(25 178 168)" />

        <ellipse cx="120" cy="198" rx="48" ry="22" fill="#F7F2EC" />
        <ellipse cx="120" cy="198" rx="28" ry="14" fill="#1A1216" opacity="0.85" />

        {showHeart && (
          <motion.g
            filter="url(#heartSoftGlow)"
            animate={
              shouldAnimate
                ? { scale: [1, 1.12, 1] }
                : undefined
            }
            transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '120px 176px' }}
          >
            <path
              d="M120 198c-8.5-6.2-28-20.5-28-36.5C92 150 99 144 107 144c4.2 0 7.2 2 9 4.8 1.8-2.8 4.8-4.8 9-4.8 8 0 15 6 15 17.5 0 16-19.5 30.3-28 36.5z"
              fill="url(#heartFill)"
            />
          </motion.g>
        )}
      </svg>
    </motion.div>
  )
}
