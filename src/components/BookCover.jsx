import { motion } from 'framer-motion'
import { book } from '../content/birthdayMessages'
import FloralCorner from './FloralCorner'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function BookCover({ open, onOpen }) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      className="book-cover"
      style={{ zIndex: open ? 1 : 20 }}
      animate={{ rotateY: open ? -160 : 0 }}
      transition={
        reduced
          ? { duration: 0.01 }
          : { duration: 1.35, ease: [0.65, 0.05, 0.36, 1] }
      }
    >
      <div className="book-ornament" />
      <FloralCorner className="tl" />
      <FloralCorner className="tr" />
      <FloralCorner className="bl" />
      <FloralCorner className="br" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <p className="mb-4 font-ui text-[10px] uppercase tracking-[0.35em] text-champagne/75 sm:text-xs">
          Birthday Letter
        </p>
        <h2 className="font-display text-3xl leading-snug text-blush-soft sm:text-4xl">
          {book.coverTitle}
        </h2>
        <div className="my-5 h-px w-16 bg-gradient-to-r from-transparent via-champagne/70 to-transparent" />
        <p className="font-letter text-base text-cream/80 sm:text-lg">
          {book.coverSubtitle}
        </p>

        {!open && (
          <motion.button
            type="button"
            onClick={onOpen}
            className="mt-10 rounded-full border border-champagne/50 bg-champagne/10 px-6 py-3 font-ui text-sm text-champagne transition hover:bg-champagne/20"
            whileHover={reduced ? undefined : { scale: 1.03 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
          >
            {book.openCta}
          </motion.button>
        )}

        <motion.span
          className="mt-8 text-rose"
          animate={reduced ? undefined : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          aria-hidden
        >
          ♥
        </motion.span>
      </div>

      <div className="book-cover-inner" aria-hidden />
    </motion.div>
  )
}
