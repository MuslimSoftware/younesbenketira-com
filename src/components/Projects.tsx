import React from 'react'

interface Project {
  id: number
  title: string
  subtitle: string
  videoUrl?: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      subtitle: "A revolutionary AI application",
      videoUrl: "/videos/project1.mp4"
    },
    {
      id: 2,
      title: "Project Two", 
      subtitle: "Full-stack web platform",
      videoUrl: "/videos/project2.mp4"
    },
    {
      id: 3,
      title: "Project Three",
      subtitle: "Machine learning solution",
      videoUrl: "/videos/project3.mp4"
    }
  ]

  return (
    <section id="projects" className="projects">
      {projects.map((project) => (
        <div key={project.id} className="project-section">
          <div className="project-content">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-subtitle">{project.subtitle}</p>
            {project.videoUrl && (
              <div className="project-video">
                <video
                  src={project.videoUrl}
                  controls
                  className="video-player"
                  poster="/images/video-placeholder.jpg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects