import React from 'react';
import ProblemList from '../../Components/ProblemList';
import { withRouter } from 'react-router-dom';
import { logout } from '../../utils/authenticate';
import api from '../../utils/api';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
    };
  }

  handleLogout = () => {
    logout();
  };

  componentDidMount = async () => {
    try {
      const { data } = await api.get('/problem');
      this.setState({ problems: data });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { problems } = this.state;
    const {
      match: { params },
    } = this.props;
    const page = params.page ? params.page : 1;
    return (
      <ProblemList
        style={{ width: '700px' }}
        problems={problems}
        page={page}
        perPage={5}
      />
    );
  }
}

export default withRouter(Main);
