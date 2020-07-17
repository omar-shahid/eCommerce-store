import React, { useContext } from "react"
import { Link } from "react-router-dom"
import "./../styles/Navbar.css"
import { CartCountContext } from "./../CartCountContext"

function Navbar() {
  const { count } = useContext(CartCountContext)
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
            <span badge={count}>
              <Link to="/cart">Cart</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
