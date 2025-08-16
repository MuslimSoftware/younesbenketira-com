import React, { useRef } from 'react'
import { ProjectAsset } from '../../data/projectsData'

interface ImageCarouselProps {
  assets: ProjectAsset[]
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ assets }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current
    if (!container) return

    const startX = e.pageX - container.offsetLeft
    const scrollLeft = container.scrollLeft

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 2
      container.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      container.style.cursor = 'grab'
    }

    container.style.cursor = 'grabbing'
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  if (!assets.length) {
    return (
      <div style={{
        width: '80vw',
        maxWidth: '1200px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f0f0',
        borderRadius: '40px',
        color: '#999'
      }}>
        No images available
      </div>
    )
  }

  return (
    <div
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      style={{
        width: '80vw',
        maxWidth: '1200px',
        height: '600px',
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'flex',
        gap: '40px',
        padding: '20px',
        borderRadius: '40px',
        cursor: 'grab',
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {assets.map((asset, index) => (
        <div
          key={asset.src || index}
          style={{
            flexShrink: 0,
            width: 'auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            src={asset.src}
            alt={asset.alt || asset.label}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '20px',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageCarousel