import React, { useState, useRef } from 'react'
import MuxPlayer from "@mux/mux-player-react"
import { type Project } from '../../data/projectsData'
import VideoSkeleton from './VideoSkeleton'

interface DemoProps {
  project: Project
}

const Demo: React.FC<DemoProps> = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const videoRefs = useRef<(any | null)[]>([])

  const handleVideoToggle = () => {
    const currentVideo = videoRefs.current[currentIndex]
    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play()
        setIsPaused(false)
      } else {
        currentVideo.pause()
        setIsPaused(true)
      }
    }
  }

  const handleVideoSwitch = (index: number) => {
    setCurrentIndex(index)
    setIsPaused(false)
  }

  return (
    <div className="project-video">
      <div className="video-container" style={{ position: 'relative' }}>
        {project.videos.length > 0 ? (
          project.videos.map((video, index) => (
            <div 
              key={video.playbackId}
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
                playbackId={video.playbackId}
                streamType="on-demand"
                autoPlay={index === currentIndex}
                muted
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
        {isPaused && (
          <div className="paused-indicator">
            ⏸
          </div>
        )}
      </div>
      {project.videos.length > 1 && (
        <div className="video-pills">
          {project.videos.map((video, index) => (
            <button
              key={video.playbackId}
              onClick={() => handleVideoSwitch(index)}
              className={`video-pill ${index === currentIndex ? 'active' : ''}`}
            >
              {video.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Demo