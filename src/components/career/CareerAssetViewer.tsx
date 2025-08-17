import React from 'react'
import { type CareerExperience } from '../../data/careerData'

interface CareerAssetViewerProps {
  career: CareerExperience
}

const CareerAssetViewer: React.FC<CareerAssetViewerProps> = ({ career }) => {
  const firstAsset = career.assets[0]
  
  if (!firstAsset || !firstAsset.src) {
    return null
  }

  return (
    <div className="career-asset-viewer">
      <div className="career-image-container">
        <img 
          src={firstAsset.src} 
          alt={firstAsset.alt || firstAsset.label} 
          className="career-image"
        />
      </div>
    </div>
  )
}

export default CareerAssetViewer