import React from 'react'

interface AnimatedNameProps {
  name: string
  isAnimating: boolean
  fontSize?: number
  strokeWidth?: number
  dashArray?: number
  drawDuration?: string
  fillDelay?: string
  fillDuration?: string
}

const AnimatedName: React.FC<AnimatedNameProps> = ({
  name,
  isAnimating,
  fontSize = 200,
  strokeWidth = 3,
  dashArray = 3000,
  drawDuration = '3s',
  fillDelay = '2.8s',
  fillDuration = '0.5s'
}) => {
  const animationStyles = `
    .name-path {
      font-family: 'Great Vibes', cursive;
      font-size: ${fontSize}px;
      fill: none;
      stroke: #333;
      stroke-width: ${strokeWidth};
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: ${dashArray};
      stroke-dashoffset: -${dashArray};
      animation: ${isAnimating ? `drawName ${drawDuration} ease-in-out forwards` : 'none'};
    }
    
    @keyframes drawName {
      to {
        stroke-dashoffset: 0;
      }
    }
    
    .name-fill {
      font-family: 'Great Vibes', cursive;
      font-size: ${fontSize}px;
      fill: #333;
      opacity: 0;
      animation: ${isAnimating ? `fillName ${fillDuration} ease-in-out ${fillDelay} forwards` : 'none'};
    }
    
    @keyframes fillName {
      to {
        opacity: 1;
      }
    }
  `

  return (
    <div className="animated-name-container">
      <svg 
        className="animated-name-svg" 
        viewBox="0 0 1400 220" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{animationStyles}</style>
        </defs>
        
        {/* Draw the stroke */}
        <text x="700" y="160" textAnchor="middle" className="name-path">
          {name}
        </text>
        
        {/* Fill the text */}
        <text x="700" y="160" textAnchor="middle" className="name-fill">
          {name}
        </text>
      </svg>
    </div>
  )
}

export default AnimatedName