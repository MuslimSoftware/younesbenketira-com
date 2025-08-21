import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdDesktopMac } from 'react-icons/md'
import { ProjectLink } from '../../data/projectsData'

interface ProjectLinksProps {
  links: ProjectLink[]
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  const getIcon = (type: 'github' | 'demo') => {
    switch (type) {
      case 'github':
        return <FaGithub />
      case 'demo':
        return <MdDesktopMac />
    }
  }

  const handleLinkClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="project-links">
      {links.map((link, index) => (
        <button
          key={index}
          className="project-link-button"
          onClick={() => handleLinkClick(link.url)}
          disabled={!link.url}
          aria-label={`${link.type} link`}
        >
          {getIcon(link.type)}
        </button>
      ))}
    </div>
  )
}

export default ProjectLinks