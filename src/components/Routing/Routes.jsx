import React from 'react';
import { Switch, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Title from '../Common/Title/Title';
import Loader from '../Common/Loader/Loader';
import Home from '../Home/HomeController';

const About = importedComponent(() => import('../About/About'), {
  LoadingComponent: () => <Loader />,
  ErrorComponent: () => (
    <div>
      ERROR
    </div>
  )
});

const Example = importedComponent(() => import('../REDUX_EXAMPLE_COMP/Example'), {
  LoadingComponent: () => <Loader />,
  ErrorComponent: <h1>ITS AN ERROR, FUCK!</h1>
})

About.preload();

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={() => <About />} />
    <Route path="/settings" component={() => <Title text="Settings" />} />
    <Route path="/example" component={() => <Example />} />
  </Switch>
);

export default Routes;
