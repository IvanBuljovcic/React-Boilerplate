/* eslint-disable */
import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import auth from '../../../redux/middleware/auth';


function removeToken() {
  auth.signOut()
}

const Auth = ({ match }) => (
  <React.Fragment>
    <h1>Auth</h1>

    <Link to={`${match.url}/people`}>Go To People</Link>
    <Link to={`${match.url}/animals`}>Go To Animals</Link>
    
    <Switch>
      <Route path={`${match.url}/people`} component={() => <h1>Persons</h1>} />
      <Route path={`${match.url}/animals`} component={() => <h1>Animals</h1>} />
    </Switch>

    <button onClick={() => removeToken()} type="button">REMOVE TOKEN</button>
  </React.Fragment>
);

export default Auth;
