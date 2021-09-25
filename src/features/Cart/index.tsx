import React from 'react';
import { useSelector } from 'react-redux';
// components
import HeaderCart from './components/HeaderCart';
import CartItem from './components/CartItem';
import PayCart from './components/PayCart';
import ChangeTab from '../../components/ChangeTab';
// others
import './style.scss';

const CartFeatures = () => {
  const listBookInCart = useSelector((state: any) => state.cart?.cartItems);
  return (
    <div className="cart-features-wrapper">
      <HeaderCart />
      <CartItem />
      {listBookInCart.length > 0 && <PayCart />}
      <ChangeTab />
    </div>
  );
};

export default CartFeatures;
