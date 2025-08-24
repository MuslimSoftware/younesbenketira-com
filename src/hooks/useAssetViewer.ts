import { useState, useRef } from 'react'

export const useAssetViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [pausedVideos, setPausedVideos] = useState<Record<number, boolean>>({})
  const [isMuted, setIsMuted] = useState(true)
  const videoRefs = useRef<(any | null)[]>([])

  return {
    currentIndex,
    setCurrentIndex,
    pausedVideos,
    setPausedVideos,
    isMuted,
    setIsMuted,
    videoRefs
  }
}