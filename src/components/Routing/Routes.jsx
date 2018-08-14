import React from 'react';
import { Switch, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Title from '../Common/Title/Title';
import Loader from '../Common/Loader/Loader';

const About = importedComponent(() => import('../About/About'), {
  LoadingComponent: () => <Loader />,
  ErrorComponent: () => (
    <div>
      ERROR
    </div>
  )
})

About.preload();

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <Title text="Home" />} />
    <Route path="/about" component={() => <About />} />
    <Route path="/settings" component={() => <Title text="Settings" />} />
  </Switch>
);

export default Routes;
