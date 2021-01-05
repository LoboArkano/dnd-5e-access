import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MonsterList from '../containers/MonsterList';
import Footer from './Footer';
import Header from './Header';
import Monster from './Monster';
import Error from './Error';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={MonsterList} exact />
      <Route path="/monster" component={Monster} exact />
      <Route component={Error} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
