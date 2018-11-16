import React from 'react';
import { Route } from 'react-router-dom';

import auth from '../../redux/middleware/auth';

function pushToRoot() {
  window.location = '/';
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.authenticate()) {
        return <Component {...props} />;
      }

      return pushToRoot();
    }}
  />
);

export default ProtectedRoute;
