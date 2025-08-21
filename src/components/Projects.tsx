import React from 'react'
import { projectsData } from '../data/projectsData'
import AssetViewer from './projects/AssetViewer'
import Tag from './projects/Tag'
import ProjectLinks from './projects/ProjectLinks'

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
              {project.links && <ProjectLinks links={project.links} />}
            </div>
            <AssetViewer project={project} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects