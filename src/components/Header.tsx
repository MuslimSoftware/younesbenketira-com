import { useScrollVisibility } from '../hooks/useScrollVisibility'
import NavLinks from './navigation/NavLinks'

const Header: React.FC = () => {
  const isVisible = useScrollVisibility({ threshold: 300 })

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`} role="banner">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <NavLinks />
      </nav>
    </header>
  )
}

export default Header