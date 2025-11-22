import React from 'react'

interface HeroNameProps {
  name: string
}

const HeroName: React.FC<HeroNameProps> = ({
  name
}) => {
  return (
    <div className="hero-name-container">
      <h1 
        className="hero-name-responsive"
        aria-label={`${name}, Full Stack AI Engineer`}
      >
        {name}
      </h1>
    </div>
  )
}

export default HeroName