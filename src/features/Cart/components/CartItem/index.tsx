// libs
import { Box, Container, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
// components
import CartDetail from '../CartDetail';
import CartEmpty from '../CartEmpty';
import CartCalculate from '../CartCalculate';
// constant
import { TRANSPORT_FEE } from '../../../../constants';
// others
import './style.scss';
import { cartItemsTotalSelector } from '../../CartSelector';

const CartItem: React.FC = () => {
  const listBookInCart = useSelector((state: any) => state.cart?.cartItems);

  const cartProvisionalTotal = useSelector(cartItemsTotalSelector);
  const cartTotal = cartProvisionalTotal + TRANSPORT_FEE;

  return (
    <div className="cart-item-wrapper">
      <Box className="content-cart-top">
        <Container>
          <h2 className="title-detail-cart">Chi tiết đơn hàng</h2>
          <Paper elevation={0}>
            <div className="list-book-cart">
              {listBookInCart.length <= 0 && <CartEmpty />}
              {listBookInCart.length > 0 &&
                listBookInCart.map((book: any) => <CartDetail key={book?.id} book={book} />)}
              {listBookInCart.length > 0 && (
                <CartCalculate cartProvisionalTotal={cartProvisionalTotal} cartTotal={cartTotal} />
              )}
            </div>
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default CartItem;
