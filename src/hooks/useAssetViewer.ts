import { useState, useRef } from 'react'

export const useAssetViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRefs = useRef<(any | null)[]>([])

  return {
    currentIndex,
    setCurrentIndex,
    isPaused,
    setIsPaused,
    isMuted,
    setIsMuted,
    videoRefs
  }
}