import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../../routes';
import Login from './Login';

const AuthContainer = () => {
  return (
    <Switch>
      <Route exact path={routes.login} component={Login} />
      <Redirect from={routes.auth} to={routes.login} />
    </Switch>
  );
};

AuthContainer.propTypes = {};

export default AuthContainer;
