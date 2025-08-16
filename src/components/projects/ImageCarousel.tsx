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
      <div className="image-carousel-empty">
        No images available
      </div>
    )
  }

  return (
    <div
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      className="image-carousel-scroll hide-scrollbar"
    >
      {assets.map((asset, index) => (
        <div
          key={asset.src || index}
          className="image-carousel-item"
        >
          <img
            src={asset.src}
            alt={asset.alt || asset.label}
            className="image-carousel-image"
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageCarousel