import React from 'react';
import AppContext from '../context';

// import AppContext from '../../App';

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return { cartItems, setCartItems, totalPrice };
};