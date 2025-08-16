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
  const buttonStyle = {
    background: 'rgba(0, 0, 0, 0.6)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'background 0.2s ease'
  }

  return (
    <div 
      className="video-controls"
      style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        display: 'flex',
        gap: '8px',
        zIndex: 10
      }}
    >
      {project.assetType === 'video' && project.assets[currentIndex]?.hasAudio && (
        <button 
          onClick={onMuteToggle}
          className="mute-toggle"
          style={buttonStyle}
        >
          <IonIcon icon={isMuted ? volumeMuteOutline : volumeHighOutline} size="small" />
        </button>
      )}
      {isPaused && (
        <button 
          onClick={onVideoToggle}
          className="pause-indicator"
          style={buttonStyle}
        >
          <IonIcon icon={pauseOutline} size="small" />
        </button>
      )}
    </div>
  )
}

export default VideoControls