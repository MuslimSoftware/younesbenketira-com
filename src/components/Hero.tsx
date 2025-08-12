import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start animation almost immediately after component mounts
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 10)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="animated-name-container">
          <svg 
            className="animated-name-svg" 
            viewBox="0 0 1400 220" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`
                  .name-path {
                    font-family: 'Great Vibes', cursive;
                    font-size: 200px;
                    fill: none;
                    stroke: #333;
                    stroke-width: 3;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: 3000;
                    stroke-dashoffset: -3000;
                    animation: ${isAnimating ? 'drawName 3s ease-in-out forwards' : 'none'};
                  }
                  
                  @keyframes drawName {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  
                  .name-fill {
                    font-family: 'Great Vibes', cursive;
                    font-size: 200px;
                    fill: #333;
                    opacity: 0;
                    animation: ${isAnimating ? 'fillName 0.5s ease-in-out 2.8s forwards' : 'none'};
                  }
                  
                  @keyframes fillName {
                    to {
                      opacity: 1;
                    }
                  }
                `}
              </style>
            </defs>
            
            {/* Draw the stroke */}
            <text x="700" y="160" textAnchor="middle" className="name-path">
              Younes Benketira
            </text>
            
            {/* Fill the text */}
            <text x="700" y="160" textAnchor="middle" className="name-fill">
              Younes Benketira
            </text>
          </svg>
        </div>
        <p className={`hero-title ${isAnimating ? 'fade-in-fast' : ''}`}>AI Full Stack Engineer</p>
      </div>
    </section>
  )
}

export default Hero