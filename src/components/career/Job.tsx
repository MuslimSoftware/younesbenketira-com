import React from 'react'
import { CareerExperience } from '../../data/careerData'
import CareerAssetViewer from './CareerAssetViewer'
import Tag from '../projects/Tag'
import CareerLinks from './CareerLinks'

interface JobProps {
  experience: CareerExperience
}

const Job: React.FC<JobProps> = ({ experience }) => {
  return (
    <div className="job">
      <div className="career-content">
        <div className="career-header">
          <h2 className="career-company">{experience.company}</h2>
          <p className="career-about">{experience.about}</p>
          <p className="career-location">{experience.location}</p>
          {experience.links && <CareerLinks links={experience.links} />}
        </div>
        <div className="career-layout">
          <div className="career-video">
            <CareerAssetViewer career={experience} />
          </div>
          <div className="career-info">
            <div className="career-title-duration">
              <h3 className="career-job-title">{experience.jobTitle}</h3>
              <p className="career-duration">{experience.duration}</p>
            </div>
            <div className="career-tags">
              {experience.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
            <p className="career-description">{experience.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job