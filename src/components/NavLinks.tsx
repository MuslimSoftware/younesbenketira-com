interface NavItem {
  href: string
  label: string
}

interface NavLinksProps {
  items?: NavItem[]
}
  
const defaultNavItems: NavItem[] = [
  { href: '#hero', label: 'Professional' },
  { href: '#about', label: 'Personal' }
]

const NavLinks: React.FC<NavLinksProps> = ({ items = defaultNavItems }) => {
  return (
    <ul className="nav-links">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks