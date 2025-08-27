import { useScrollVisibility } from '../hooks/useScrollVisibility'

interface HeaderProps {
  currentPage: 'professional' | 'personal'
  onPageChange: (page: 'professional' | 'personal') => void
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const isVisible = useScrollVisibility({ threshold: 300 })
  const shouldShowHeader = currentPage === 'personal' || isVisible

  return (
    <header className={`header ${shouldShowHeader ? 'header-visible' : 'header-hidden'}`} role="banner">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <ul className="nav-links" role="list">
          <li role="listitem">
            <a 
              href="#professional"
              onClick={(e) => {
                e.preventDefault()
                onPageChange('professional')
              }}
              className={currentPage === 'professional' ? 'active' : ''}
              aria-label="Switch to Professional page"
            >
              Professional
            </a>
          </li>
          <li role="listitem">
            <a 
              href="#personal"
              onClick={(e) => {
                e.preventDefault()
                onPageChange('personal')
              }}
              className={currentPage === 'personal' ? 'active' : ''}
              aria-label="Switch to Personal page"
            >
              Personal
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header