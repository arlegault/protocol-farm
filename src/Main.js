import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home.js';
import Protocols from './Pages/Protocols.js';
import LiquidityProviders from './Pages/LiquidityProviders.js';


const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/protocols' component={Protocols}></Route>
       <Route exact path='/lps' component={LiquidityProviders}></Route>
    </Switch>
  );
}

export default Main;