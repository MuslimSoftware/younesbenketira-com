import React, { useState, useEffect } from 'react'

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Scrolling up or near top
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header