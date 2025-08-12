import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/younesbenketira" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/younesbenketira" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:younes@example.com">
            Email
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; {currentYear} Younes Benketira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer