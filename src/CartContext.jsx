import React, { createContext, useReducer } from "react"

export const CartContext = createContext(undefined)

export const CartContextProvider = ({ children }) => {
  const cartContextontextReducer = (state = [], action = {}) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return [...state, action.payload]

      case "REMOVE_PRODUCT":
        return state.filter((product) => product.id === action.payload)

      case "UPDATE_QUANTITY":
        const prevState = state.filter(
          (product) => product.id === action.payload
        )
        return [...prevState, action.payload]

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(cartContextontextReducer, [])
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
