import React from 'react';
import { render } from 'react-dom';
import { AppContainer, setConfig } from 'react-hot-loader';

import ClientApp from './components/ClientApp';

setConfig({ logLevel: 'log', pureSFC: true });

const ROOT_ELEMENT = document.getElementById('app');

function renderApp(Component) {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    ROOT_ELEMENT
  );
}

renderApp(ClientApp);

if (module.hot) {
  module.hot.accept('./components/ClientApp', () => render(ClientApp));
}

// render(<App />, ROOT_ELEMENT);
