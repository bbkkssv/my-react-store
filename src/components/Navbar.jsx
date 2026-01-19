import { Link } from 'react-router-dom'
import { IconShoppingCart } from '@tabler/icons-react';

import { useContext } from 'react';
import GlobalContext from '../state/globalContext'; 

// Navigation bar component
function Navbar() {
const user = useContext(GlobalContext).user;
const cart = useContext(GlobalContext).cart;

  function getTotalItems() {
    let sum = 0

    for(let i=0; i < cart.length; i++){
      sum = sum + cart[i].quantity
    }

    return sum
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm bg-wa-cream border-bottom-wa-green">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src="/images/logo.png" alt="Whispering Acres" className="navbar-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3 rounded text-wa-brown" to={"/"}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3 rounded text-wa-brown" to={"/about"}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3 rounded text-wa-brown" to={"/catalog"}>
                Catalog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3 rounded text-wa-brown" to={"/contact"}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3 rounded text-wa-brown" to={"/admin"}>
                Admin
              </Link>
            </li>

          </ul>

          <div className='d-flex align-items-center gap-2'>
            <div className='nav-link fw-semibold px-3 rounded text-wa-brown'>{user.name}</div>
            <Link to={"/cart"} className='btn btn-outline-wa-green d-flex align-items-center gap-2'>
              <IconShoppingCart/> Cart ({getTotalItems()})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;