import { useDelayedAnimation } from '../hooks/useDelayedAnimation'
import HeroName from './hero/HeroName'
import HeroTitle from './hero/HeroTitle'
import ScrollIndicator from './hero/ScrollIndicator'

const Hero: React.FC = () => {
  const isAnimating = useDelayedAnimation({ delay: 10 })

  return (
    <section id="hero" className="hero" aria-label="Introduction and hero section">
      <div className="hero-content">
        <HeroName 
          name="Younes Benketira"
        />
        <HeroTitle 
          title="Full Stack AI Engineer" 
          isAnimating={isAnimating}
        />
      </div>
      
      <ScrollIndicator text="Projects" />
    </section>
  )
}

export default Hero