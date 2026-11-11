import { AnimatePresence, motion } from 'framer-motion'
import PandaIntro from './components/PandaIntro'
import BirthdayCelebration from './components/BirthdayCelebration'
import BirthdayBook from './components/BirthdayBook'
import FinalSurprise from './components/FinalSurprise'
import MusicControls from './components/MusicControls'
import { useStage } from './hooks/useStage'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import { fadeIn } from './animations/variants'

export default function App() {
  const { stage, goTo, replay, stages } = useStage()
  const reduced = usePrefersReducedMotion()

  return (
    <main className="relative min-h-dvh overflow-x-hidden">
      <a
        href="#main-stage"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ivory focus:px-3 focus:py-2 focus:text-burgundy"
      >
        Skip to experience
      </a>

      <MusicControls />

      <div id="main-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            variants={reduced ? undefined : fadeIn}
            initial={reduced ? false : 'hidden'}
            animate="visible"
            exit="exit"
          >
            {stage === stages.intro && (
              <PandaIntro onComplete={() => goTo(stages.celebration)} />
            )}
            {stage === stages.celebration && (
              <BirthdayCelebration onOpen={() => goTo(stages.book)} />
            )}
            {stage === stages.book && (
              <BirthdayBook onFinish={() => goTo(stages.finale)} />
            )}
            {stage === stages.finale && <FinalSurprise onReplay={replay} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
