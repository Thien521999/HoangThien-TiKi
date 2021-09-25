// libs
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// components
import ProductFeatures from './features/Products';
import CartFeatures from './features/Cart';
import NotFound from './components/NotFound';
// others
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route path="/" component={ProductFeatures} exact />
        <Route path="/cart" component={CartFeatures} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
