import React from 'react'
import { IoVolumeHigh, IoVolumeMute, IoPause } from 'react-icons/io5'
import { type Project } from '../../data/projectsData'

interface VideoControlsProps {
  project: Project
  currentIndex: number
  isPaused: boolean
  isMuted: boolean
  onMuteToggle: (e: React.MouseEvent) => void
  onVideoToggle: () => void
}

const VideoControls: React.FC<VideoControlsProps> = ({
  project,
  currentIndex,
  isPaused,
  isMuted,
  onMuteToggle,
  onVideoToggle
}) => {
  return (
    <div className="video-controls">
      {project.assetType === 'video' && project.assets[currentIndex]?.hasAudio && (
        <button 
          onClick={onMuteToggle}
          className="video-control-button mute-toggle"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          title={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <IoVolumeMute size={16} aria-hidden="true" /> : <IoVolumeHigh size={16} aria-hidden="true" />}
        </button>
      )}
      {isPaused && (
        <button 
          onClick={onVideoToggle}
          className="video-control-button pause-indicator"
          aria-label="Play video"
          title="Play video"
        >
          <IoPause size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default VideoControls