// libs
import { Box, Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { TRANSPORT_FEE } from '../../../../constants';
import { formatPrice } from '../../../Products/utils';
import { cartItemsTotalSelector } from '../../CartSelector';
// others
import './style.scss';

const PayCart = () => {
  const cartProvisionalTotal = useSelector(cartItemsTotalSelector);
  const cartTotal = cartProvisionalTotal + TRANSPORT_FEE;
  return (
    <Box className="pay-cart-wrapper">
      <Container>
        <div className="total">
          <span className="text">Tổng cộng</span>
          <span className="money">{formatPrice(cartTotal)}</span>
        </div>
        <div className="border"></div>
        <div className="btn-pay-cart">
          <span>Thanh toán</span>
        </div>
      </Container>
    </Box>
  );
};

export default PayCart;
