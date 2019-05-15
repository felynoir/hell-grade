import React from 'react';
import { Flex, Box } from 'rebass';
import { Segment, Divider } from 'semantic-ui-react';
import LoginForm from '../../Components/LoginForm';
import RegisterForm from '../../Components/RegisterForm';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import api from '../../utils/api';
import axios from 'axios';

const FullFlex = styled(Flex)`
  height: 100vh;
  width: 100vw;
`;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmitLoginForm = async data => {
    const response = await api.get('/');
    console.log(response);
  };

  onSubmitRegisterForm = async data => {
    try {
      const res = await api.post('/auth/signup', data);
      console.log(res);
    } catch (err) {
      const { data } = err.response;
      console.log(data);
    }
  };

  render() {
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
            <Route
              path="/"
              exact
              render={props => (
                <LoginForm {...props} onSubmitForm={this.onSubmitLoginForm} />
              )}
            />
            <Route
              path="/register"
              exact
              render={props => (
                <RegisterForm
                  {...props}
                  onSubmitForm={this.onSubmitRegisterForm}
                />
              )}
            />
          </Segment>
        </Flex>
      </FullFlex>
    );
  }
}

export default withRouter(LandingPage);
