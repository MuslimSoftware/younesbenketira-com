import { useEffect, useState } from 'react'

interface UseDelayedAnimationOptions {
  delay?: number
}

export const useDelayedAnimation = ({ delay = 10 }: UseDelayedAnimationOptions = {}) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return isAnimating
}