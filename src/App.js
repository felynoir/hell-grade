import React from 'react';
import { hot } from 'react-hot-loader';
import LoginForm from './LoginForm';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginForm />;
  }
}

export default hot(module)(App);
