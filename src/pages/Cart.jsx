import React, { useContext } from "react"
import Helmet from "react-helmet"

import CartItem from "../components/CartItem"

import { CartContext } from "./../CartContext"
import { CartCountContext } from "./../CartCountContext"

import "./../styles/cart.css"

function Cart() {
  const { dispatch, state } = useContext(CartContext)
  const { setCount } = useContext(CartCountContext)

  const getTotalPrice = () => {
    return state.reduce(
      (priceState, product) => product.price * product.qty + priceState,
      0
    )
  }
  const clearAllContext = () => {
    dispatch({
      type: "CLEAR",
    })
    changeCountToZero()
  }
  const changeCountToZero = () => {
    setCount(0)
  }
  return (
    <>
      <Helmet>
        <title>Cart - E Commerce Site - BootCamp 2020 Project</title>
      </Helmet>
      {state.length > 0 ? (
        <div className="container-xl">
          <h1 className="banner-heading text-center">Cart</h1>
          <table className="cart">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {state.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </tbody>
          </table>
          <div className="d-flex align-items-center justify-content-space-between mt-1">
            <h1 className="total">
              Total: <span>${getTotalPrice()}</span>
            </h1>
            <button
              onClick={clearAllContext}
              className="button"
              style={{ marginRight: "20px" }}
              disabled={getTotalPrice() === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <>
          {changeCountToZero()}
          <div className="container-xl">
            <h1 className="banner-heading text-center">Your cart is empty</h1>
          </div>
        </>
      )}
    </>
  )
}

export default Cart
