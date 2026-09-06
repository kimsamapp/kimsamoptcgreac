import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()
  const onLanding = pathname === '/'

  return (
    <nav className="topnav">
      <div className="container">
        <Link to="/" className="brand">
          KimSam<span>OPTCG</span>
        </Link>
        <ul className="navlinks">
          {onLanding ? (
            <>
              <li><a href="#how">How it works</a></li>
              <li><a href="#inventory">Inventory</a></li>
              <li><a href="#newsletter">Notify me</a></li>
              <li><Link to="/prizepool">Prize Pool</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#how">How it works</Link></li>
              <li><a href="#pool">Prize pool</a></li>
              <li><a href="#inventory">Pack inventory</a></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
