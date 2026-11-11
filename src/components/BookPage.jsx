import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import GraduationPage from './GraduationPage'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function BookPage({
  page,
  pageNumber,
  totalPages,
  flipped,
  zIndex,
  isActive,
}) {
  const reduced = usePrefersReducedMotion()
  const isGraduation = page.theme === 'graduation'

  return (
    <motion.article
      className={`book-page-face ${isGraduation ? 'graduation' : ''}`}
      style={{ zIndex }}
      animate={{ rotateY: flipped ? -180 : 0 }}
      transition={
        reduced
          ? { duration: 0.01 }
          : { duration: 0.95, ease: [0.645, 0.045, 0.355, 1] }
      }
      aria-hidden={flipped || !isActive}
    >
      <div className="book-ornament" />

      {isGraduation && isActive && !flipped && <GraduationPage active />}

      <div className="book-page-content">
        {isGraduation ? (
          <div className="mb-3 flex items-center gap-2 text-champagne-deep">
            <GraduationCap size={16} aria-hidden />
            <span className="font-ui text-[10px] uppercase tracking-[0.28em] sm:text-xs">
              Graduation · Page {pageNumber} of {totalPages}
            </span>
          </div>
        ) : (
          <p className="mb-3 font-ui text-[10px] uppercase tracking-[0.28em] text-ink-soft sm:text-xs">
            Page {pageNumber} of {totalPages}
          </p>
        )}

        <h3 className="font-display text-xl text-burgundy sm:text-2xl md:text-[1.7rem]">
          {page.heading}
        </h3>

        <div className="mt-4 space-y-3 font-letter text-base leading-relaxed text-ink sm:text-lg">
          {page.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {page.closing ? (
          <p className="mt-6 whitespace-pre-line font-letter text-base italic text-burgundy sm:text-lg">
            {page.closing}
          </p>
        ) : null}
      </div>
    </motion.article>
  )
}
