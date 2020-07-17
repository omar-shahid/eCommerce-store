import React, { useState } from "react"

function CartItem() {
  const [qty, setQty] = useState(0)
  const addQty = () => {
    setQty((prevQty) => prevQty + 1)
  }
  const removeQty = () => {
    if (qty === 0) return
    setQty((prevQty) => prevQty - 1)
  }
  return (
    <tr>
      <td>
        <img
          src="/public_images/30-303663_nike-running-shoes-png-transparent-image-presto-extreme.png"
          alt="Shoe"
        />
      </td>
      <td>Nike Shoe</td>
      <td>
        <div className="quantity-controller">
          <button onClick={addQty}>+</button>
          <div className="d-flex justify-content-center">{qty}</div>
          <button onClick={removeQty}>-</button>
        </div>
      </td>
      <td>$125</td>
    </tr>
  )
}

export default CartItem
