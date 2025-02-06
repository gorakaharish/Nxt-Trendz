// import React from 'react'

// const CartContext = React.createContext({
//   cartList: [],
//   removeAllCartItems: () => {},
//   addCartItem: () => {},
//   removeCartItem: () => {},
//   incrementCartItemQuantity: () => {},
//   decrementCartItemQuantity: () => {},
// })

// export default CartContext


import { createContext } from 'react';

const CartContext = createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
});

export default CartContext;

