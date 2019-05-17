import React from 'react';
import ProblemList from '../../Components/ProblemList';
import NavigationBar from '../../Components/NavigationBar';
import { withRouter } from 'react-router-dom';
import { logout } from '../../utils/authenticate';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    logout();
  };

  render() {
    const leftMenus = [{ name: 'Home', to: '' }, { name: 'Users', to: '' }];
    const rightMenus = [{ name: 'Logout', onClick: this.handleLogout }];
    const problems = [
      { name: 'problem no.1', sended: 20, passed: 19, rate: 'Hard' },
      { name: 'problem no.2', sended: 20, passed: 11, rate: 'Easy' },
      { name: 'problem no.3', sended: 25, passed: 16, rate: 'Medium' },
      { name: 'problem no.1', sended: 20, passed: 19, rate: 'Hard' },
      { name: 'problem no.2', sended: 20, passed: 11, rate: 'Easy' },
      { name: 'problem no.3', sended: 25, passed: 16, rate: 'Medium' },
      { name: 'problem no.1', sended: 20, passed: 19, rate: 'Hard' },
      { name: 'problem no.2', sended: 20, passed: 11, rate: 'Easy' },
      { name: 'problem no.3', sended: 25, passed: 16, rate: 'Medium' },
    ];
    const {
      match: { params },
    } = this.props;
    const page = params.page ? params.page : 1;
    return (
      <NavigationBar leftMenus={leftMenus} rightMenus={rightMenus}>
        <ProblemList
          style={{ width: '700px' }}
          problems={problems}
          page={page}
          perPage={5}
        />
      </NavigationBar>
    );
  }
}

export default withRouter(Main);
