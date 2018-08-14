import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// - Root Components
import Header from './components/Header/Header';
import Routes from './components/Routing/Routes';

const ROOT_ELEMENT = document.getElementById('app');

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />

      <Routes />
    </React.Fragment>
  </BrowserRouter>
);

render(<App />, ROOT_ELEMENT);
