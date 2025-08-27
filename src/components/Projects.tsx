import React, { Suspense } from 'react'
import { projectsData } from '../data/projectsData'
import Tag from './projects/Tag'
import ProjectLinks from './projects/ProjectLinks'
import VideoSkeleton from './projects/VideoSkeleton'

const AssetViewer = React.lazy(() => import('./projects/AssetViewer'))

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects" aria-label="Portfolio projects">
      {projectsData.map((project, index) => (
        <article key={project.id} className="project-section" aria-labelledby={`project-${project.id}-title`}>
          <div className="project-content">
            <div className="project-header">
              <h2 id={`project-${project.id}-title`} className="project-title">{project.title}</h2>
              <p className="project-description" aria-describedby={`project-${project.id}-title`}>{project.description}</p>
              <div className="project-tags" role="list" aria-label="Technologies used">
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} role="listitem">{tag}</Tag>
                ))}
              </div>
              {project.links && <ProjectLinks links={project.links} />}
            </div>
            <Suspense fallback={
              <div className="asset-viewer-container">
                <div className="video-shell active" aria-label="Loading project media">
                  <VideoSkeleton />
                </div>
              </div>
            }>
              <AssetViewer project={project} />
            </Suspense>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Projects