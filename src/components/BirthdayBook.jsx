import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { book, pages } from '../content/birthdayMessages'
import BookCover from './BookCover'
import BookPage from './BookPage'
import { useSwipe } from '../hooks/useSwipe'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import '../styles/book.css'

export default function BirthdayBook({ onFinish }) {
  const reduced = usePrefersReducedMotion()
  const [opened, setOpened] = useState(false)
  const [index, setIndex] = useState(0)
  const [isTurning, setIsTurning] = useState(false)

  const isLast = index === pages.length - 1
  const current = pages[index]

  const goNext = useCallback(() => {
    if (!opened || isTurning) return
    if (isLast) {
      onFinish?.()
      return
    }
    setIsTurning(true)
    setIndex((i) => Math.min(pages.length - 1, i + 1))
    window.setTimeout(() => setIsTurning(false), reduced ? 50 : 900)
  }, [opened, isTurning, isLast, onFinish, reduced])

  const goPrev = useCallback(() => {
    if (!opened || isTurning || index === 0) return
    setIsTurning(true)
    setIndex((i) => Math.max(0, i - 1))
    window.setTimeout(() => setIsTurning(false), reduced ? 50 : 900)
  }, [opened, isTurning, index, reduced])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        if (!opened) setOpened(true)
        else goNext()
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [opened, goNext, goPrev])

  const swipe = useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
  })

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center gap-7 overflow-hidden bg-romantic-glow px-4 py-12">
      <motion.p
        className="font-ui text-[10px] uppercase tracking-[0.3em] text-champagne/70 sm:text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {opened ? 'Your Birthday Letter' : 'A Letter Waiting For You'}
      </motion.p>

      <div className="book-scene" {...swipe}>
        <div className="book-shell">
          <div
            className="absolute inset-0 rounded-sm bg-cream shadow-book"
            aria-hidden
          />
          <div className="book-spine-shadow" />

          <div className="book-page-stack">
            {pages.map((page, i) => {
              const flipped = opened && i < index
              const zIndex = flipped ? i + 1 : pages.length - i + 2
              return (
                <BookPage
                  key={page.id}
                  page={page}
                  pageNumber={i + 1}
                  totalPages={pages.length}
                  flipped={flipped}
                  zIndex={zIndex}
                  isActive={opened && i === index}
                />
              )
            })}
          </div>

          <BookCover open={opened} onOpen={() => setOpened(true)} />
        </div>
      </div>

      <AnimatePresence>
        {opened && (
          <motion.div
            className="relative z-20 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={goPrev}
              disabled={index === 0 || isTurning}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/40 bg-burgundy-deep/55 text-champagne transition hover:bg-burgundy-deep/75 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>

            <div
              className="flex gap-1.5 px-2"
              role="progressbar"
              aria-valuenow={index + 1}
              aria-valuemin={1}
              aria-valuemax={pages.length}
              aria-label="Letter progress"
            >
              {pages.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Go to page ${i + 1}`}
                  onClick={() => {
                    if (isTurning) return
                    setIndex(i)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-5 bg-champagne' : 'w-3 bg-champagne/30 hover:bg-champagne/50'
                  }`}
                />
              ))}
            </div>

            {isLast ? (
              <button
                type="button"
                onClick={onFinish}
                className="rounded-full bg-rose px-5 py-2.5 font-ui text-sm text-ivory shadow-glow-rose transition hover:brightness-110"
              >
                {book.finalCta}
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                disabled={isTurning}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/40 bg-burgundy-deep/55 text-champagne transition hover:bg-burgundy-deep/75 disabled:opacity-35"
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {opened && (
        <p className="max-w-xs text-center font-ui text-[11px] text-cream/45 sm:hidden">
          Swipe left or right to turn pages
        </p>
      )}

      <div className="sr-only" aria-live="polite">
        {opened
          ? `${current.heading}. Page ${index + 1} of ${pages.length}.`
          : 'Book cover. Open your letter to begin.'}
      </div>
    </section>
  )
}
