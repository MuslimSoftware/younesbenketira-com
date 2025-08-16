import { useEffect, useState } from 'react'
import { useScrollOpacity } from '../../hooks/useScrollOpacity'
import { useViewportOpacity } from '../../hooks/useViewportOpacity'

interface ScrollIndicatorProps {
  text: string
  delay?: number
  useScrollOpacity?: boolean
  useViewportFade?: boolean
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  text, 
  delay = 3500,
  useScrollOpacity: shouldUseScrollOpacity = true,
  useViewportFade = false
}) => {
  const [show, setShow] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const scrollOpacity = useScrollOpacity()
  const { opacity: viewportOpacity, elementRef } = useViewportOpacity()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
      setTimeout(() => setFadeIn(true), 50)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (!show) return null

  const getOpacity = () => {
    if (!fadeIn) return 0
    if (useViewportFade) return viewportOpacity
    if (shouldUseScrollOpacity) return scrollOpacity
    return 1
  }

  const getTransform = () => {
    if (useViewportFade) {
      return fadeIn ? 'translateY(0)' : 'translateY(20px)'
    }
    return fadeIn 
      ? 'translateX(-50%) translateY(0)' 
      : 'translateX(-50%) translateY(20px)'
  }

  return (
    <div 
      ref={useViewportFade ? elementRef : undefined}
      className={`scroll-indicator ${fadeIn ? 'fade-in' : ''} ${useViewportFade ? 'viewport-fade' : ''}`}
      style={{ 
        opacity: getOpacity(),
        transform: getTransform()
      }}
    >
      <span className="scroll-text">{text}</span>
      <svg 
        className="chevron-down" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M6 9L12 15L18 9" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default ScrollIndicator