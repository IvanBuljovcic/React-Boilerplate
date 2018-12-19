import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// - Utils | Authentication
import auth from '../../redux/middleware/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const renderRoute = props => {
    if (auth.authenticate()) {
      return <Component {...props} />;
    }

    return <Redirect to="/" />;
  };

  return <Route {...rest} render={props => renderRoute(props)} />;
};

export default ProtectedRoute;
