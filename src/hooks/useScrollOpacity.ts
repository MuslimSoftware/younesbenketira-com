import { useEffect, useState } from 'react'

interface UseScrollOpacityOptions {
  fadeStart?: number
  fadeEnd?: number
}

export const useScrollOpacity = ({ 
  fadeStart = 50, 
  fadeEnd = 200 
}: UseScrollOpacityOptions = {}) => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      if (scrollY <= fadeStart) {
        setOpacity(1)
      } else if (scrollY >= fadeEnd) {
        setOpacity(0)
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart)
        setOpacity(1 - progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [fadeStart, fadeEnd])

  return opacity
}