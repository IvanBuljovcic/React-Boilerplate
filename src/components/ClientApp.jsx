import React from 'react';
import { hot } from 'react-hot-loader';

// - Default Styles
import '../css/main.css';

// - Root Components
import Header from './Header/Header';
import Routes from './Routing/Routes';

const ClientApp = () => (
  <React.Fragment>
    <Header />

    <Routes />
  </React.Fragment>
);

export default hot(module)(ClientApp);
