import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthenRoute, PrivateRoute } from '../UtilsRoute';
import LandingPage from '../LandingPage';
import NavigationBar from '../../Components/NavigationBar';
import Main from './Main';
import ProblemPage from '../ProblemPage';
import { logout } from '../../utils/authenticate';

const leftMenus = [{ name: 'Home', to: '' }, { name: 'Users', to: '' }];
const rightMenus = [{ name: 'Logout', onClick: logout }];

const MainApp = () => (
  <NavigationBar leftMenus={leftMenus} rightMenus={rightMenus}>
    <Switch>
      <PrivateRoute path={['/main', '/main/:page']} exact component={Main} />
      <PrivateRoute path="/problem/:id" exact component={ProblemPage} />
    </Switch>
  </NavigationBar>
);

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenRoute path={['/', '/register']} exact component={LandingPage} />
        <PrivateRoute component={MainApp} />
      </Switch>
    </BrowserRouter>
  );
};
