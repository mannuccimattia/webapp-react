import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <div className="d-flex align-items-center">
            <img src="../src/assets/imgs/logo.png" alt="logo" id="header-logo" />
            <div>BoolFlix</div>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
