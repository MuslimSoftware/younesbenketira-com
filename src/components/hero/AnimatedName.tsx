import React from 'react'

interface AnimatedNameProps {
  name: string
  isAnimating: boolean
}

const AnimatedName: React.FC<AnimatedNameProps> = ({
  name,
  isAnimating
}) => {
  return (
    <div className="hero-name-container">
      <h1 className={`hero-name-responsive ${isAnimating ? 'fade-in' : ''}`}>
        {name}
      </h1>
    </div>
  )
}

export default AnimatedName