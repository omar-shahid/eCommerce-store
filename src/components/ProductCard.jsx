import React, { useState, useContext } from "react"
import { CartContext } from "./../CartContext"
import { CartCountContext } from "./../CartCountContext"

function ProductCard({ product }) {
  const [qty, setQty] = useState(0)

  const { dispatch } = useContext(CartContext)
  const { setCount } = useContext(CartCountContext)

  const addQty = () => {
    setQty((prevQty) => prevQty + 1)
  }
  const removeQty = () => {
    if (qty === 0) return
    setQty((prevQty) => prevQty - 1)
  }
  const addToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { ...product, qty },
    })
    setCount((prevCount) => prevCount + 1)
    setQty(0)
  }

  const getPrice = () => {
    if (qty === 0) return product.price
    return product.price * qty
  }

  return (
    <div
      key={product.image}
      style={{ height: "400px", border: "1px solid #a4b0be" }}
      className="d-flex align-items-center productListContainer p-5 mb-3"
    >
      <div className="row mb-3">
        <div className="col-6">
          <h1 className="product-heading">{product.title}</h1>
          <p>{product.description}</p>
          <div className="d-flex align-items-center mt-1">
            <button
              onClick={() => addToCart(product)}
              className="button"
              style={{ marginRight: "20px" }}
            >
              Add to Cart
            </button>
            <div className="quantity-controller">
              <button onClick={addQty}>+</button>
              <div className="d-flex justify-content-center">{qty}</div>
              <button onClick={removeQty}>-</button>
            </div>
            <h2>${getPrice()}</h2>
          </div>
        </div>
        <div className="col-4">
          <img
            src={product.image}
            style={{
              maxWidth: "100%",
            }}
            alt="Product"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
