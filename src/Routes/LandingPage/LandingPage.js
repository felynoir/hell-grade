import React from 'react';
import { Flex, Box } from 'rebass';
import { Segment, Divider } from 'semantic-ui-react';
import LoginForm from '../../Components/LoginForm';
import RegisterForm from '../../Components/RegisterForm';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';

const FullFlex = styled(Flex)`
  height: 100vh;
  width: 100vw;
`;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmitLoginForm = data => {
    console.log(data);
  };

  onSubmitRegisterForm = data => {
    console.log(data);
  };

  render() {
    console.log(this.prop);
    return (
      <FullFlex flexWrap="wrap">
        <Box
          p={5}
          fontSize={1}
          width={[1, 1, 1 / 2]}
          color="white"
          bg="magenta"
        >
          Box1
        </Box>
        <Flex
          p={4}
          justifyContent="center"
          alignItems="center"
          width={[1, 1, 1 / 2]}
        >
          <Segment raised style={{ maxWidth: '30em' }}>
            <Route path="/" exact component={LoginForm} />
            <Route path="/register" exact component={RegisterForm} />
          </Segment>
        </Flex>
      </FullFlex>
    );
  }
}

export default withRouter(LandingPage);
