import { useEffect, useState, useRef } from 'react'

export const useViewportOpacity = () => {
  const [opacity, setOpacity] = useState(1)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const fadeStartPoint = viewportHeight * 0.85 // Start fading at 85% down the viewport

      // Calculate the center of the element
      const elementCenter = rect.top + rect.height / 2

      // When element center is above 75% point, start fading
      if (elementCenter <= fadeStartPoint) {
        // Calculate how far past the fade start point we are
        const fadeDistance = fadeStartPoint - elementCenter
        const maxFadeDistance = fadeStartPoint // Fade completely by top of viewport
        
        const fadeProgress = Math.min(fadeDistance / maxFadeDistance, 1)
        setOpacity(Math.max(1 - fadeProgress, 0))
      } else {
        // Element is below fade start point, full opacity
        setOpacity(1)
      }
    }

    // Initial calculation
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return { opacity, elementRef }
}