import React, { useState } from 'react'
import MuxPlayer from "@mux/mux-player-react"
import { type Project } from '../../data/projectsData'
import VideoSkeleton from './VideoSkeleton'

interface DemoProps {
  project: Project
}

const Demo: React.FC<DemoProps> = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="project-video">
      <div className="video-container">
        {project.videos.length > 0 ? (
          project.videos.map((video, index) => (
            <div 
              key={video.playbackId}
              className={`video-shell ${index === currentIndex ? 'active' : 'hidden'}`}
            >
              <MuxPlayer
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
      </div>
      {project.videos.length > 1 && (
        <div className="video-pills">
          {project.videos.map((video, index) => (
            <button
              key={video.playbackId}
              onClick={() => setCurrentIndex(index)}
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