import React, { createContext, useReducer } from "react"

export const CartContext = createContext(undefined)

export const CartContextProvider = ({ children }) => {
  const cartContextontextReducer = (state = [], action = {}) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return [...state, action.payload]

      case "REMOVE_PRODUCT":
        return state.filter((product) => product.id !== action.payload)

      case "UPDATE_QUANTITY":
        const prevProd = state.find(
          (product) => product.id === action.payload.id
        )

        const prevProdIndex = state.indexOf(prevProd)
        state[prevProdIndex] = action.payload

        return [...state]

      case "CLEAR":
        return []

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
