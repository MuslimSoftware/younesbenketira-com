import React from 'react'
import { MdDesktopMac } from 'react-icons/md'
import { CareerLink } from '../../data/careerData'

interface CareerLinksProps {
  links: CareerLink[]
}

const CareerLinks: React.FC<CareerLinksProps> = ({ links }) => {
  const getIcon = (type: 'demo') => {
    switch (type) {
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

export default CareerLinks