import { MutableRefObject } from 'react'

interface UseVideoControlsProps {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  pausedVideos: Record<number, boolean>
  setPausedVideos: (pausedVideos: Record<number, boolean>) => void
  isMuted: boolean
  setIsMuted: (muted: boolean) => void
  videoRefs: MutableRefObject<(any | null)[]>
}

export const useVideoControls = ({
  currentIndex,
  setCurrentIndex,
  pausedVideos,
  setPausedVideos,
  isMuted,
  setIsMuted,
  videoRefs
}: UseVideoControlsProps) => {
  const handleVideoToggle = () => {
    const currentVideo = videoRefs.current[currentIndex]
    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play()
        setPausedVideos({ ...pausedVideos, [currentIndex]: false })
      } else {
        currentVideo.pause()
        setPausedVideos({ ...pausedVideos, [currentIndex]: true })
      }
    }
  }

  const handleVideoSwitch = (index: number) => {
    setCurrentIndex(index)
    // No need to update pause state - each video maintains its own state
  }

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
    videoRefs.current.forEach(video => {
      if (video) {
        video.muted = !isMuted
      }
    })
  }

  return {
    handleVideoToggle,
    handleVideoSwitch,
    handleMuteToggle
  }
}