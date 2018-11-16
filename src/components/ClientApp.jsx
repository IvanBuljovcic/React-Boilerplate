import React from 'react';
import { hot } from 'react-hot-loader';

// - Default Styles
import '../css/main.css';

// - Root Components
import Header from './Header/Header';
import Routes from './Routing/Routes';

function addToken() {
  localStorage.setItem('authToken', 'asdasdasd');
}

const ClientApp = () => (
  <React.Fragment>
    <Header />

    <Routes />

    <button onClick={() => addToken()} type="button">ADD TOKEN</button>
  </React.Fragment>
);

export default hot(module)(ClientApp);
