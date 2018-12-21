import React from 'react';
import { hot } from 'react-hot-loader';
import config from 'config';

// - Default Styles
import '../css/main.css';

// - Root Components
import Header from './Header';
import Routes from './Routing';

function addToken() {
  localStorage.setItem('authToken', 'asdasdasd');
}

const ClientApp = () => (
  <React.Fragment>
    <Header />

    <Routes />

    <button onClick={() => addToken()} type="button">
      ADD TOKEN
    </button>
  </React.Fragment>
);

export default (
  config.HOT_MODULE_LOADER ?
    hot(module)(ClientApp) :
    ClientApp
);
