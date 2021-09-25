// libs
import React from 'react';
import { useHistory } from 'react-router';
// others
import './style.scss';

const CartEmpty = () => {
  const history = useHistory();
  const handleClickContinueBuy = () => {
    history.push('/');
  };
  return (
    <div className="cart-empty-wrapper">
      <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" className="empty__img" />
      <p className="empty__note">There are no products in your cart</p>
      <div className="empty__btn" onClick={handleClickContinueBuy}>
        <span>Continue shopping</span>
      </div>
    </div>
  );
};

export default CartEmpty;
