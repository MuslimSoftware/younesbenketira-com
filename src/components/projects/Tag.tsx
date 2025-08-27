import React from 'react'

interface TagProps {
  children: string
  role?: string
}

const TAG_COLORS: Record<string, string> = {
  'ai': '#3B82F6', // blue
  'python': '#F59E0B', // yellow
  'react': '#06B6D4', // cyan
  'react native expo': '#8B5CF6', // purple
  'node.js': '#10B981', // green
}

const Tag: React.FC<TagProps> = ({ children, role }) => {
  const color = TAG_COLORS[children.toLowerCase()] || '#6B7280' // gray as fallback

  return (
    <span 
      className="project-tag"
      style={{
        backgroundColor: color
      }}
      role={role}
      aria-label={`Technology: ${children}`}
    >
      {children}
    </span>
  )
}

export default Tag