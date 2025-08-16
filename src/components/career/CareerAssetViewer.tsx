import React from 'react'
import MuxPlayer from "@mux/mux-player-react"
import { type CareerExperience } from '../../data/careerData'
import { useAssetViewer } from '../../hooks/useAssetViewer'
import { useVideoControls } from '../../hooks/useVideoControls'
import VideoControls from '../projects/VideoControls'
import VideoSkeleton from '../projects/VideoSkeleton'

interface CareerAssetViewerProps {
  career: CareerExperience
}

const CareerAssetViewer: React.FC<CareerAssetViewerProps> = ({ career }) => {
  const {
    currentIndex,
    setCurrentIndex,
    isPaused,
    setIsPaused,
    isMuted,
    setIsMuted,
    videoRefs
  } = useAssetViewer()

  const {
    handleVideoToggle,
    handleVideoSwitch,
    handleMuteToggle
  } = useVideoControls({
    currentIndex,
    setCurrentIndex,
    setIsPaused,
    isMuted,
    setIsMuted,
    videoRefs
  })

  return (
    <div className="career-asset-viewer">
      <div className="career-video-container">
        {career.assets.length > 0 ? (
          career.assets.map((asset, index) => (
            <div 
              key={asset.playbackId || index}
              className={`video-shell ${index === currentIndex ? 'active' : 'hidden'} career-video-clickable`}
              onClick={handleVideoToggle}
            >
              <MuxPlayer
                ref={(el) => {
                  if (el) {
                    videoRefs.current[index] = el
                  }
                }}
                playbackId={asset.playbackId}
                streamType="on-demand"
                autoPlay={index === currentIndex}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                className="mux-no-ui"
              />
            </div>
          ))
        ) : (
          <div className="video-shell active">
            <VideoSkeleton />
          </div>
        )}
        
        <VideoControls
          project={{ 
            ...career, 
            title: career.company,
            assetType: 'video' as const 
          }}
          currentIndex={currentIndex}
          isPaused={isPaused}
          isMuted={isMuted}
          onMuteToggle={handleMuteToggle}
          onVideoToggle={handleVideoToggle}
        />
      </div>
      
      {career.assets.length > 1 && (
        <div className="video-pills">
          {career.assets.map((asset, index) => (
            <button
              key={asset.playbackId || index}
              onClick={() => handleVideoSwitch(index)}
              className={`video-pill ${index === currentIndex ? 'active' : ''}`}
            >
              {asset.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CareerAssetViewer