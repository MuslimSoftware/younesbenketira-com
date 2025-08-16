import React from 'react'
import { IonIcon } from '@ionic/react'
import { volumeHighOutline, volumeMuteOutline, pauseOutline } from 'ionicons/icons'
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
        >
          <IonIcon icon={isMuted ? volumeMuteOutline : volumeHighOutline} size="small" />
        </button>
      )}
      {isPaused && (
        <button 
          onClick={onVideoToggle}
          className="video-control-button pause-indicator"
        >
          <IonIcon icon={pauseOutline} size="small" />
        </button>
      )}
    </div>
  )
}

export default VideoControls