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


import React from 'react';

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
});

export default CartContext;
