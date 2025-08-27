import React from 'react'

const VideoSkeleton: React.FC = () => {
  return (
    <div 
      className="video-skeleton"
      role="img"
      aria-label="Loading video content"
      aria-describedby="video-loading-text"
    >
      <span id="video-loading-text" className="sr-only">Video is loading, please wait...</span>
    </div>
  )
}

export default VideoSkeleton