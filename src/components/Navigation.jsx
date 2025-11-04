import { Link, useLocation } from 'react-router-dom'

function Navigation() {

const location = useLocation ()

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>CodeCaddy</h2>
      </div>
      
      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link
          to="/"
          className={location.pathname === '/search' ? 'nav-link active' : 'nav-link'}
          >
            Book Search
          </Link>
          <Link
          to="/"
          className={location.pathname === '/collection' ? 'nav-link active' : 'nav-link'}
          >
            Collection
          </Link>
          <Link
          to="/"
          className={location.pathname === '/details' ? 'nav-link active' : 'nav-link'}
          >
            Details
          </Link>
        
        
      </div>
    </nav>
  )
}

export default Navigation