// libs
import React from 'react';
// constant
import { TRANSPORT_FEE } from '../../../../constants';
// until
import { formatPrice } from '../../../Products/utils';
// others
import './style.scss';

interface CartCalculateProps {
  cartProvisionalTotal: number;
  cartTotal: number;
}

const CartCalculate: React.FC<CartCalculateProps> = ({ cartProvisionalTotal, cartTotal }) => {
  return (
    <div className="cart-calculate-wrapper">
      <div className="provisional">
        <span className="text">Tạm tính</span>
        <span className="money">{formatPrice(cartProvisionalTotal)}</span>
      </div>
      <div className="transport-fee">
        <span className="text">Phí vận chuyển</span>
        <span className="money">{formatPrice(TRANSPORT_FEE)}</span>
      </div>
      <div className="total">
        <span className="text">Tổng cộng</span>
        <span className="money">{formatPrice(cartTotal)}</span>
      </div>
    </div>
  );
};

export default CartCalculate;
