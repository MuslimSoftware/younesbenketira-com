import React from 'react'
import MuxPlayer from "@mux/mux-player-react"
import { type Project } from '../../data/projectsData'
import { useAssetViewer } from '../../hooks/useAssetViewer'
import { useVideoControls } from '../../hooks/useVideoControls'
import VideoControls from './VideoControls'
import ImageCarousel from './ImageCarousel'
import VideoSkeleton from './VideoSkeleton'

interface AssetViewerProps {
  project: Project
}

const AssetViewer: React.FC<AssetViewerProps> = ({ project }) => {
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

  // Handle image projects
  if (project.assetType === 'image') {
    return (
      <div className="project-assets">
        <div className="asset-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <ImageCarousel assets={project.assets} />
        </div>
      </div>
    )
  }

  // Handle video projects
  if (project.assetType === 'video') {
    return (
      <div className="project-assets">
        <div className="asset-container" style={{ position: 'relative' }}>
          {project.assets.length > 0 ? (
            project.assets.map((asset, index) => (
              <div 
                key={asset.playbackId || index}
                className={`video-shell ${index === currentIndex ? 'active' : 'hidden'}`}
                onClick={handleVideoToggle}
                style={{ cursor: 'pointer' }}
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
            project={project}
            currentIndex={currentIndex}
            isPaused={isPaused}
            isMuted={isMuted}
            onMuteToggle={handleMuteToggle}
            onVideoToggle={handleVideoToggle}
          />
        </div>
        
        {project.assets.length > 1 && (
          <div className="video-pills">
            {project.assets.map((asset, index) => (
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

  return null
}

export default AssetViewer