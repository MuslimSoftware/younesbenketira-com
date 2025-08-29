import { Link } from 'react-router-dom'
import { useScrollVisibility } from '../hooks/useScrollVisibility'

interface HeaderProps {
  currentPage: 'professional' | 'personal'
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const isVisible = useScrollVisibility({ threshold: 300 })
  const shouldShowHeader = currentPage === 'personal' || isVisible

  return (
    <header className={`header ${shouldShowHeader ? 'header-visible' : 'header-hidden'}`} role="banner">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <ul className="nav-links" role="list">
          <li role="listitem">
            <Link 
              to="/"
              className={currentPage === 'professional' ? 'active' : ''}
              aria-label="Switch to Professional page"
            >
              Professional
            </Link>
          </li>
          <li role="listitem">
            <Link 
              to="/personal"
              className={currentPage === 'personal' ? 'active' : ''}
              aria-label="Switch to Personal page"
            >
              Personal
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header