import React from 'react'
import { projectsData } from '../data/projectsData'
import Demo from './ui/Demo'
import Tag from './ui/Tag'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      {projectsData.map((project) => (
        <div key={project.id} className="project-section">
          <div className="project-content">
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </div>
            </div>
            <Demo project={project} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects