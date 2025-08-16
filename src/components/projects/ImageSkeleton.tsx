import React from 'react'

const ImageSkeleton: React.FC = () => {
  return (
    <div 
      className="image-skeleton"
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'loading 1.5s infinite',
        borderRadius: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#999',
        fontSize: '14px'
      }}
    >
      Loading image...
    </div>
  )
}

export default ImageSkeleton