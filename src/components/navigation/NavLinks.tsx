interface NavItem {
  href: string
  label: string
}

interface NavLinksProps {
  items?: NavItem[]
}
  
const defaultNavItems: NavItem[] = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#career', label: 'Career' },
  { href: '#contact', label: 'Contact' }
]

const NavLinks: React.FC<NavLinksProps> = ({ items = defaultNavItems }) => {
  return (
    <ul className="nav-links" role="list">
      {items.map((item, index) => (
        <li key={index} role="listitem">
          <a href={item.href} aria-label={`Navigate to ${item.label} section`}>{item.label}</a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks