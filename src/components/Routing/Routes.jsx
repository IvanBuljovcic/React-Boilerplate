import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Title from '../Common/Title';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <Title text="Home" />} />
    <Route path="/about" component={() => <Title text="About" />} />
    <Route path="/settings" component={() => <Title text="Settings" />} />
  </Switch>  
);

export default Routes;
