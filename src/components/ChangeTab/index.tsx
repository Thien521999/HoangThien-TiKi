// libs
import { Box } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';
import { NavLink } from 'react-router-dom';
// others
import './style.scss';

const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

const ChangeTab = () => {
  return (
    <Box className="change-tab-wrapper">
      <NavLink to="/" exact className="btn-tab">
        <div className="icon-tab">
          <HomeIcon className="icon-home" />
        </div>
        <div className="text-tab">Trang Chủ</div>
      </NavLink>
      <NavLink to="/cart" className="btn-tab">
        <div className="icon-tab">
          <AddShoppingCartIcon />
        </div>
        <div className="text-tab">Giỏ hàng</div>
      </NavLink>
    </Box>
  );
};

export default ChangeTab;
