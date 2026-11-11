import { useCallback, useState } from 'react'
import { stages } from '../content/birthdayMessages'

const ORDER = [stages.intro, stages.celebration, stages.book, stages.finale]

export function useStage(initial = stages.intro) {
  const [stage, setStage] = useState(initial)

  const goTo = useCallback((next) => {
    if (ORDER.includes(next)) setStage(next)
  }, [])

  const next = useCallback(() => {
    setStage((current) => {
      const index = ORDER.indexOf(current)
      return ORDER[Math.min(index + 1, ORDER.length - 1)]
    })
  }, [])

  const replay = useCallback(() => {
    setStage(stages.intro)
  }, [])

  return { stage, goTo, next, replay, stages }
}
