import React from 'react';
import { Flex, Box } from 'rebass';
import { withRouter } from 'react-router-dom';
import ProblemManage from '../../Components/ProblemManage';

class ProblemPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProblemManage />;
  }
}

export default withRouter(ProblemPage);
