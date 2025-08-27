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
    pausedVideos,
    setPausedVideos,
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
    pausedVideos,
    setPausedVideos,
    isMuted,
    setIsMuted,
    videoRefs
  })

  // Handle image projects
  if (project.assetType === 'image') {
    return (
      <div>
        <div className="asset-viewer-image-container" role="img" aria-label={`${project.title} image gallery`}>
          <ImageCarousel assets={project.assets} />
        </div>
      </div>
    )
  }

  // Handle video projects
  if (project.assetType === 'video') {
    return (
      <div>
        <div className="asset-viewer-container">
          {project.assets.length > 0 ? (
            project.assets.map((asset, index) => (
              <div 
                key={asset.playbackId || index}
                className={`video-shell ${index === currentIndex ? 'active' : 'hidden'} asset-viewer-video-clickable`}
                onClick={handleVideoToggle}
                role="button"
                tabIndex={0}
                aria-label={`Play/pause ${project.title} - ${asset.label} video`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleVideoToggle()
                  }
                }}
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
                  title={`${project.title} - ${asset.label}`}
                  aria-label={`${project.title} ${asset.label} demonstration video`}
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
            isPaused={pausedVideos[currentIndex] || false}
            isMuted={isMuted}
            onMuteToggle={handleMuteToggle}
            onVideoToggle={handleVideoToggle}
          />
        </div>
        
        {project.assets.length > 1 && (
          <div className="video-pills" role="tablist" aria-label={`${project.title} video navigation`}>
            {project.assets.map((asset, index) => (
              <button
                key={asset.playbackId || index}
                onClick={() => handleVideoSwitch(index)}
                className={`video-pill ${index === currentIndex ? 'active' : ''}`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Switch to ${asset.label} video`}
                tabIndex={index === currentIndex ? 0 : -1}
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