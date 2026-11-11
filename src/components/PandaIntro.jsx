import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { intro } from '../content/birthdayMessages'
import AnimatedPanda from './AnimatedPanda'
import MagicalParticles from './MagicalParticles'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const BEATS = {
  black: 0,
  particles: 1,
  panda: 2,
  text: 3,
  ready: 4,
}

/**
 * Cinematic Netflix-inspired opening (original assets only).
 */
export default function PandaIntro({ onComplete }) {
  const reduced = usePrefersReducedMotion()
  const [beat, setBeat] = useState(reduced ? BEATS.ready : BEATS.black)

  useEffect(() => {
    if (reduced) return undefined

    const timers = [
      setTimeout(() => setBeat(BEATS.particles), 700),
      setTimeout(() => setBeat(BEATS.panda), 1800),
      setTimeout(() => setBeat(BEATS.text), 3400),
      setTimeout(() => setBeat(BEATS.ready), 5200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [reduced])

  useEffect(() => {
    if (beat !== BEATS.ready) return undefined
    const auto = setTimeout(() => onComplete?.(), reduced ? 800 : 2800)
    return () => clearTimeout(auto)
  }, [beat, onComplete, reduced])

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-burgundy-deep px-6 text-center">
      {/* Ambient atmosphere fades in after black */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-romantic-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= BEATS.particles ? 0.85 : 0 }}
        transition={{ duration: 1.6 }}
      />

      {beat >= BEATS.particles && <MagicalParticles count={32} />}

      <div className="relative z-10 flex max-w-xl flex-col items-center gap-6">
        <AnimatePresence>
          {beat >= BEATS.panda && (
            <motion.div
              key="panda"
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatedPanda size={240} showHeart />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {beat >= BEATS.text && (
            <motion.p
              key="tease"
              className="font-display text-2xl text-balance text-blush-soft sm:text-3xl md:text-4xl"
              initial={reduced ? false : { opacity: 0, y: 18, letterSpacing: '0.08em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.02em' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {intro.tease}
            </motion.p>
          )}
        </AnimatePresence>

        {beat >= BEATS.ready && (
          <motion.button
            type="button"
            onClick={onComplete}
            className="mt-2 rounded-full border border-champagne/40 bg-champagne/10 px-5 py-2.5 font-ui text-xs font-medium uppercase tracking-[0.2em] text-champagne/90 transition hover:bg-champagne/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Continue
          </motion.button>
        )}
      </div>

      {/* Cinematic vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,4,8,0.65)_100%)]"
        aria-hidden
      />
    </section>
  )
}
