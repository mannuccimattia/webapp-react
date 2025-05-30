import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar bg-secondary mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          BoolFlix
        </Link>
      </div>
    </nav>
  )
}

export default Header
