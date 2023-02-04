import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

const CartProvider = ({ children }) => {
  const [productIDs, setProductIDs] = useState({})

  const addToCart = id => {
    productIDs[id] ? productIDs[id]++ : productIDs[id] = 1

    setProductIDs(() => ({...productIDs}))
  }

  const deleteFromCart = id => {
    if (!productIDs[id]) return

    if (productIDs[id] === 1) {
      delete productIDs[id]
    } else {
      productIDs[id]--
    }

    setProductIDs(() => ({...productIDs}))
  }

  return (
    <>
      <CartContext.Provider value={{ productIDs, addToCart, deleteFromCart }}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartProvider
