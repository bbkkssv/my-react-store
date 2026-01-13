import { Link } from 'react-router-dom'

// Navigation bar component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary sticky-top">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <span className="fs-3">🛍</span>
          <span className="fw-bold fs-4">My Online Store</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/catalog"}>
                Catalog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/admin"}>
                Admin
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;