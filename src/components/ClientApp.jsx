import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// - Root Components
import Header from './Header/Header';
import Routes from './Routing/Routes';

const ClientApp = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />

      <Routes />
    </React.Fragment>
  </BrowserRouter>
);

export default hot(module)(ClientApp);
