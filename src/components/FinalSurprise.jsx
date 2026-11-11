import { motion } from 'framer-motion'
import { finale } from '../content/birthdayMessages'
import AnimatedPanda from './AnimatedPanda'
import ConfettiEffect from './ConfettiEffect'
import FloatingHearts from './FloatingHearts'
import MagicalParticles from './MagicalParticles'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function FinalSurprise({ onReplay }) {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-romantic-glow px-6 py-16 text-center">
      <ConfettiEffect active recycle />
      <FloatingHearts />
      <MagicalParticles count={24} />

      <motion.div
        className="relative z-10 flex max-w-2xl flex-col items-center gap-6"
        initial={reduced ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatedPanda size={200} showHeart />

        <motion.p
          className="font-ui text-[10px] uppercase tracking-[0.35em] text-champagne/75 sm:text-xs"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          One last wish
        </motion.p>

        <motion.p
          className="font-display text-2xl text-balance text-blush-soft sm:text-4xl"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {finale.lineOne}
        </motion.p>

        <motion.p
          className="font-letter text-xl text-cream/90 sm:text-2xl"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          {finale.lineTwo}
        </motion.p>

        <motion.button
          type="button"
          onClick={onReplay}
          className="mt-4 rounded-full border border-champagne/50 bg-champagne/15 px-6 py-3 font-ui text-sm text-champagne transition hover:bg-champagne/25"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={reduced ? undefined : { scale: 1.03 }}
          whileTap={reduced ? undefined : { scale: 0.98 }}
        >
          {finale.replayCta}
        </motion.button>
      </motion.div>
    </section>
  )
}
