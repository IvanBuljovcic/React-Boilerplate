import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import config from 'config';

// - Redux | Store | History
import configureStore from './redux/store';
import history from './redux/history';

// - Root Component | HOT Loaded
import ClientApp from './components/ClientApp';

// - Root element in HTML | Bootstrap to this element
const ROOT_ELEMENT = document.getElementById('app');

// - Configure Redux Store
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history} basename={config.ROUTE_BASENAME || ''}>
      <ClientApp />
    </Router>
  </Provider>,
  ROOT_ELEMENT
);
