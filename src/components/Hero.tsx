import { useDelayedAnimation } from '../hooks/useDelayedAnimation'
import AnimatedName from './hero/AnimatedName'
import HeroTitle from './hero/HeroTitle'
import ScrollIndicator from './hero/ScrollIndicator'

const Hero: React.FC = () => {
  const isAnimating = useDelayedAnimation({ delay: 10 })

  return (
    <section id="hero" className="hero" aria-label="Introduction and hero section">
      <div className="hero-content">
        <AnimatedName 
          name="Younes Benketira" 
          isAnimating={isAnimating}
        />
        <HeroTitle 
          title="AI Full Stack Engineer" 
          isAnimating={isAnimating}
        />
      </div>
      
      <ScrollIndicator text="Projects" />
    </section>
  )
}

export default Hero