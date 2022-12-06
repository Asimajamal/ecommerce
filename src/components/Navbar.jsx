import React,{useContext} from 'react'
import { CartContext } from '../Global/CartContext';
import {
    FaShoppingCart,FaHome
   } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {

  const {qty}=useContext(CartContext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand mx-5 mt-2  " >OnlineShop</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
    <ul className="navbar-nav  mb-2 mb-lg-0">
      
        <li className="nav-item">
        <Link className="nav-link mt-2 active" aria-current="page" to="/"><FaHome/></Link>
        </li>
        </ul>
    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto mx-5">
      
        <li className="nav-item">
          <Link className="nav-link mt-2 d-flex mx-3" aria-current="page" to="cart"><span ><FaShoppingCart/></span><span ></span><span className="right mx-1">{qty}</span></Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
