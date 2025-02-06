// import CartContext from '../../context/CartContext'

// import Header from '../Header'
// import EmptyCartView from '../EmptyCartView'
// import CartListView from '../CartListView'
// import CartSummary from '../CartSummary'

// import './index.css'
// import { Component } from 'react'

// const Cart = () => (
//   <CartContext.Consumer>
//     {value => {
//       const {cartList, removeAllCartItems} = value
//       const showEmptyView = cartList.length === 0
//       const onClickRemoveAllBtn = () => {
//         removeAllCartItems()
//       }

//       return (
//         <>
//           <Header />
//           <div className="cart-container">
//             {showEmptyView ? (
//               <EmptyCartView />
//             ) : (
//               <div className="cart-content-container">
//                 <h1 className="cart-heading">My Cart</h1>
//                 <button
//                   type="button"
//                   className="remove-all-btn"
//                   onClick={onClickRemoveAllBtn}
//                 >
//                   Remove All
//                 </button>
//                 <CartListView />
//                 <CartSummary />
//               </div>
//             )}
//           </div>
//         </>
//       )
//     }}
//   </CartContext.Consumer>
// )

// export default Cart


import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

import Header from '../Header';
import EmptyCartView from '../EmptyCartView';
import CartListView from '../CartListView';
import CartSummary from '../CartSummary';

import './index.css';

const Cart = () => {
  const { cartList, removeAllCartItems } = useContext(CartContext);
  const showEmptyView = cartList.length === 0;

  return (
    <>
      <Header />
      <div className="cart-container">
        {showEmptyView ? (
          <EmptyCartView />
        ) : (
          <div className="cart-content-container">
            <h1 className="cart-heading">My Cart</h1>
            <button
              type="button"
              className="remove-all-btn"
              onClick={removeAllCartItems}
            >
              Remove All
            </button>
            <CartListView />
            <CartSummary />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
