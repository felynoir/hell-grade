import React from 'react';
import { Flex, Box } from 'rebass';
import { Segment, Divider } from 'semantic-ui-react';
import LoginForm from '../../Components/LoginForm';
import RegisterForm from '../../Components/RegisterForm';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import api from '../../utils/api';
import { login } from '../../utils/authenticate';

const FullFlex = styled(Flex)`
  height: 100vh;
  width: 100vw;
`;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorLogin: '',
      errorRegister: '',
    };
  }

  onSubmitLoginForm = async (data, reset) => {
    try {
      const { history } = this.props;
      const res = await api.post('/auth/signin', data);
      login(res.data.token);
      reset();
      this.resetErrorLogin();
      history.replace('/main');
    } catch (err) {
      const { data } = err.response;
      this.setState({
        errorLogin: data.message,
      });
    }
  };

  onSubmitRegisterForm = async (data, reset) => {
    try {
      const res = await api.post('/auth/signup', data);
      console.log(res);
      reset();
      this.resetErrorRegister();
    } catch (err) {
      const { data } = err.response;
      console.log(err.response);
      this.setState({
        errorRegister: data.message,
      });
    }
  };

  resetErrorLogin = () => {
    this.setState({ errorLogin: '' });
  };

  resetErrorRegister = () => {
    this.setState({ errorRegister: '' });
  };

  render() {
    const { errorLogin, errorRegister } = this.state;
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
          <Segment raised style={{ maxWidth: '25em', width: '25em' }}>
            <Route
              path="/"
              exact
              render={props => (
                <LoginForm
                  {...props}
                  error={errorLogin}
                  resetError={this.resetErrorLogin}
                  onSubmitForm={this.onSubmitLoginForm}
                />
              )}
            />
            <Route
              path="/register"
              exact
              render={props => (
                <RegisterForm
                  {...props}
                  error={errorRegister}
                  resetError={this.resetErrorRegister}
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
