import React, { createContext, useState } from "react"

export const CartCountContext = createContext(undefined)

export const CartCountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  return (
    <CartCountContext.Provider value={{ count, setCount }}>
      {children}
    </CartCountContext.Provider>
  )
}
