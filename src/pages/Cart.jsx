import React from "react"
import "./../styles/cart.css"
import CartItem from "../components/CartItem"

function Cart() {
  return (
    <div className="container-xl">
      <h1 className="banner-heading text-center">Cart</h1>
      <table className="cart">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <CartItem />
      </table>
    </div>
  )
}

export default Cart
