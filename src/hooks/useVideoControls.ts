import { MutableRefObject } from 'react'

interface UseVideoControlsProps {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  setIsPaused: (paused: boolean) => void
  isMuted: boolean
  setIsMuted: (muted: boolean) => void
  videoRefs: MutableRefObject<(any | null)[]>
}

export const useVideoControls = ({
  currentIndex,
  setCurrentIndex,
  setIsPaused,
  isMuted,
  setIsMuted,
  videoRefs
}: UseVideoControlsProps) => {
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