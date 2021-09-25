// libs
import { Box, Container } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { useHistory } from 'react-router';
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
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const handleClickHome = () => {
    history.push('/');
  };
  const handleClickCart = () => {
    history.push('/cart');
  };
  return (
    <Box className="change-tab-wrapper">
      <Container>
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
          <Tab icon={<HomeIcon />} label="Trang chủ" onClick={handleClickHome} />
          <Tab icon={<AddShoppingCartIcon />} label="Giỏ hàng" onClick={handleClickCart} />
        </Tabs>
      </Container>
    </Box>
  );
};

export default ChangeTab;
