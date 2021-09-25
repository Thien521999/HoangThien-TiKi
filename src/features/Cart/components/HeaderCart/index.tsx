// libs
import { Box, Container } from '@material-ui/core';
import React from 'react';
// others
import './style.scss';

const HeaderCart = () => {
  return (
    <Box className="header-cart-wrapper">
      <Container>
        <h2 className="title-cart">Giỏ hàng</h2>
      </Container>
    </Box>
  );
};

export default HeaderCart;
