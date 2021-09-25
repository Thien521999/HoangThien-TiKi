// libs
import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
// components
import ListPage from './pages/ListPage';
// others
import './style.scss';

const ProductFeatures = () => {
  const match = useRouteMatch(); //Lam viec voi nested routing
  return (
    <Box className="product-feature-wrapper">
      <Switch>
        <Route path={match.url} component={ListPage} exact />
      </Switch>
    </Box>
  );
};

export default ProductFeatures;
