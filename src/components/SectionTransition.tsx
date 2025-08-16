import React from 'react'
import ScrollIndicator from './hero/ScrollIndicator'

interface SectionTransitionProps {
  text: string
  delay?: number
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ text, delay = 1000 }) => {
  return (
    <div className="section-transition">
      <ScrollIndicator text={text} delay={delay} useViewportFade={true} />
    </div>
  )
}

export default SectionTransition