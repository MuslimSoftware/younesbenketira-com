import React from 'react'
import { CareerExperience } from '../../data/careerData'
import CareerAssetViewer from './CareerAssetViewer'
import Tag from '../projects/Tag'

interface JobProps {
  experience: CareerExperience
}

const Job: React.FC<JobProps> = ({ experience }) => {
  return (
    <div className="job">
      <div className="career-content">
        <div className="career-header">
          <div className="career-title-section">
            <h2 className="career-company">{experience.company}</h2>
            <a 
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="career-external-link"
              aria-label={`Visit ${experience.company} website`}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21M21 3V9M21 3L9 15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <p className="career-about">{experience.about}</p>
          <p className="career-location">{experience.location}</p>
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