import { useState, useEffect } from 'react'

interface UseScrollVisibilityOptions {
  threshold?: number
}

export const useScrollVisibility = ({ threshold = 100 }: UseScrollVisibilityOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      
      if (currentScrollY < lastScrollY && currentScrollY > threshold) {
        // Scrolling up and past threshold
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY || currentScrollY <= threshold) {
        // Scrolling down or near top
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, threshold])

  return isVisible
}