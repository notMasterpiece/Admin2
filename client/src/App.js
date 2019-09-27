import React from 'react';
import './style/app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home/HomeContainer';
import Auth from './scenes/Auth/AuthContainer';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.auth} component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
