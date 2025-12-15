
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link text-light">Home</a>
            </li>
            <li className="nav-item">
              <a href="#catalog" className="nav-link text-light">Catalog</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link text-light">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-light">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;