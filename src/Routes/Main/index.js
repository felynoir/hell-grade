import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthenRoute, PrivateRoute, AdminRoute } from '../UtilsRoute';
import LandingPage from '../LandingPage';
import NavigationBar from '../../Components/NavigationBar';
import Main from './Main';
import ProblemPage from '../ProblemPage';
import ProblemManage from '../ProblemManage';
import { logout } from '../../utils/authenticate';

const leftMenus = [{ name: 'Home', to: '' }, { name: 'Users', to: '' }];
const rightMenus = [{ name: 'Logout', onClick: logout }];

const MainApp = () => (
  <NavigationBar leftMenus={leftMenus} rightMenus={rightMenus}>
    <Switch>
      <PrivateRoute path={['/main', '/main/:page']} exact component={Main} />
      <PrivateRoute path="/problem/:id" exact component={ProblemPage} />
      <AdminRoute path="/manage" exact component={ProblemManage} />
      <Route render={() => <div>404</div>} />
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
