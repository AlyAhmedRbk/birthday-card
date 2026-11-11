/** Shared Framer Motion variants — respect reduced motion in consumers. */

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
}

export const fadeScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.45 } },
}

export const softRise = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerChildren = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

export const heartPulse = {
  animate: {
    scale: [1, 1.08, 1],
    filter: [
      'drop-shadow(0 0 8px rgba(232,160,176,0.4))',
      'drop-shadow(0 0 18px rgba(232,160,176,0.75))',
      'drop-shadow(0 0 8px rgba(232,160,176,0.4))',
    ],
    transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const floatY = (amount = 12, duration = 4) => ({
  animate: {
    y: [-amount, amount, -amount],
    transition: { duration, repeat: Infinity, ease: 'easeInOut' },
  },
})
