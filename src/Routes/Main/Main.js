import React from 'react';
import NavigationBar from '../../Components/NavigationBar';
import { withRouter } from 'react-router-dom';
import { logout } from '../../utils/authenticate';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    const { history } = this.props;
    logout();
  };

  render() {
    const leftMenus = [{ name: 'Home', to: '' }, { name: 'Users', to: '' }];
    const rightMenus = [{ name: 'Logout', onClick: this.handleLogout }];
    return (
      <NavigationBar leftMenus={leftMenus} rightMenus={rightMenus}>
        Kuy
      </NavigationBar>
    );
  }
}

export default withRouter(Main);
