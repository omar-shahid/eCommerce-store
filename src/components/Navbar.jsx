import React from "react"
import { Link } from "react-router-dom"
import "./../styles/Navbar.css"

function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="top-nav">
        <div className="logo">eCommerce Store</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Shop</Link>
          </li>
          <li>
            <span>
              <Link to="/cart">Cart</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
