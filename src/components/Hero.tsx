import { useDelayedAnimation } from '../hooks/useDelayedAnimation'
import AnimatedName from './AnimatedName'
import HeroTitle from './HeroTitle'

const Hero: React.FC = () => {
  const isAnimating = useDelayedAnimation({ delay: 10 })

  return (
    <section id="hero" className="hero">
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
    </section>
  )
}

export default Hero