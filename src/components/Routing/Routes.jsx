import React from 'react';
import { Switch, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Title from '../Common/Title/Title';
import Loader from '../Common/Loader/Loader';
import Home from '../Home/HomeController';
import ProtectedRoute from './Protected';
import Auth from '../Pages/Auth/Auth';
import Example from '../REDUX_EXAMPLE_COMP';

const About = importedComponent(() => import('../About/About'), {
  LoadingComponent: () => <Loader />,
  ErrorComponent: () => <div>ERROR</div>
});

About.preload();

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={() => <About />} />
    <Route path="/settings" component={() => <Title text="Settings" />} />
    <Route path="/example" component={Example} />

    <ProtectedRoute path="/auth" component={Auth} />
  </Switch>
);

export default Routes;
