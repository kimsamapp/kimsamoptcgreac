import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()
  const onLanding = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="topnav">
      <div className="container">
        <Link to="/" className="brand" onClick={closeMenu}>
          KimSam<span>OPTCG</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <ul id="primary-navigation" className={`navlinks ${menuOpen ? 'is-open' : ''}`}>
          {onLanding ? (
            <>
              <li><a href="#how" onClick={closeMenu}>How it works</a></li>
              <li><a href="#inventory" onClick={closeMenu}>Inventory</a></li>
              <li><a href="#newsletter" onClick={closeMenu}>Notify me</a></li>
              <li><Link to="/prizepool" onClick={closeMenu}>Prize Pool</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/#how" onClick={closeMenu}>How it works</Link></li>
              <li><a href="#pool" onClick={closeMenu}>Prize pool</a></li>
              <li><a href="#inventory" onClick={closeMenu}>Pack inventory</a></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
