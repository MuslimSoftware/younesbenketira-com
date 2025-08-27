import React from 'react'

interface HeroTitleProps {
  title: string
  isAnimating: boolean
  className?: string
}

const HeroTitle: React.FC<HeroTitleProps> = ({ 
  title, 
  isAnimating, 
  className = '' 
}) => {
  return (
    <p 
      className={`hero-title ${isAnimating ? 'fade-in-fast' : ''} ${className}`}
      aria-label={`Professional title: ${title}`}
    >
      {title}
    </p>
  )
}

export default HeroTitle