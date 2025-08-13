import { useEffect, useState } from 'react'
import { useScrollOpacity } from '../../hooks/useScrollOpacity'

interface ScrollIndicatorProps {
  text: string
  delay?: number
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  text, 
  delay = 3500 
}) => {
  const [show, setShow] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const scrollOpacity = useScrollOpacity()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
      setTimeout(() => setFadeIn(true), 50)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (!show) return null

  return (
    <div 
      className={`scroll-indicator ${fadeIn ? 'fade-in' : ''}`}
      style={{ 
        opacity: fadeIn ? scrollOpacity : 0,
        transform: fadeIn 
          ? 'translateX(-50%) translateY(0)' 
          : 'translateX(-50%) translateY(20px)'
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