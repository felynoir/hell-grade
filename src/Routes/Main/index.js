import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthenRoute, PrivateRoute } from '../UtilsRoute';
import LandingPage from '../LandingPage';
import Main from './Main';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenRoute path={['/', '/register']} exact component={LandingPage} />
        <PrivateRoute path={['/main', '/main/:page']} exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
};
