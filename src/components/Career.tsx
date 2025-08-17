import React from 'react'
import { careerData } from '../data/careerData'
import Job from './career/Job'
import SectionTransition from './SectionTransition'

const Career: React.FC = () => {
  return (
    <section id="career" className="career">
      <SectionTransition text="Career" />
      {careerData.map((experience) => (
        <Job key={experience.id} experience={experience} />
      ))}
    </section>
  )
}

export default Career