import React, { useState, useContext } from "react"
import { CartContext } from "./../CartContext"

function CartItem({ product }) {
  const [qty, setQty] = useState(product.qty)
  const { dispatch } = useContext(CartContext)

  const updateQuantity = (type) => {
    if (type === "plus") {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { ...product, qty: product.qty + 1 },
      })
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { ...product, qty: product.qty - 1 },
      })
    }
  }
  const addQty = () => {
    setQty((prevQty) => prevQty + 1)
    updateQuantity("plus")
  }
  const removeQty = () => {
    if (qty === 0) return
    setQty((prevQty) => prevQty - 1)
    updateQuantity("minus")
  }
  const removeProduct = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    })
  }

  return (
    <tr>
      <td>
        <button className="button" onClick={() => removeProduct(product.id)}>
          Remove
        </button>
      </td>
      <td>
        <img src={product.image} alt="Shoe" />
      </td>
      <td>{product.title}</td>
      <td>
        <div className="quantity-controller">
          <button onClick={addQty}>+</button>
          <div className="d-flex justify-content-center">{qty}</div>
          <button onClick={removeQty}>-</button>
        </div>
      </td>
      <td>${product.price * qty}</td>
    </tr>
  )
}

export default CartItem
