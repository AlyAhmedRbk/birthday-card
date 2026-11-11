import { motion } from 'framer-motion'
import { intro } from '../content/birthdayMessages'
import ConfettiEffect from './ConfettiEffect'
import FloatingHearts from './FloatingHearts'
import FloatingBalloons from './FloatingBalloons'
import MagicalParticles from './MagicalParticles'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function BirthdayCelebration({ onOpen }) {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-romantic-glow px-6 py-16 text-center">
      <ConfettiEffect active recycle />
      <FloatingHearts />
      <FloatingBalloons />
      <MagicalParticles count={18} />

      <motion.div
        className="relative z-10 flex max-w-2xl flex-col items-center gap-5"
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="font-ui text-xs uppercase tracking-[0.35em] text-champagne/80"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A celebration just for you
        </motion.p>

        <motion.h1
          className="font-display text-4xl font-semibold tracking-wide text-blush-soft sm:text-6xl md:text-7xl"
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          {intro.headline}
        </motion.h1>

        <motion.p
          className="font-letter text-xl text-cream/90 sm:text-2xl md:text-3xl"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {intro.subheadline}
        </motion.p>

        <motion.button
          type="button"
          onClick={onOpen}
          className="mt-8 rounded-full bg-gradient-to-r from-rose to-rose-deep px-8 py-3.5 font-ui text-sm font-medium tracking-wide text-ivory shadow-glow-rose transition hover:brightness-110 active:scale-[0.98]"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={reduced ? undefined : { scale: 1.03 }}
          whileTap={reduced ? undefined : { scale: 0.98 }}
        >
          {intro.cta}
        </motion.button>
      </motion.div>
    </section>
  )
}
