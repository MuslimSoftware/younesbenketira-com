import { useScrollVisibility } from '../hooks/useScrollVisibility'
import NavLinks from './NavLinks'

const Header: React.FC = () => {
  const isVisible = useScrollVisibility({ threshold: 100 })

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <nav className="nav">
        <NavLinks />
      </nav>
    </header>
  )
}

export default Header