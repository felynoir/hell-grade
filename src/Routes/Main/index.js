import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/register']} exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};
