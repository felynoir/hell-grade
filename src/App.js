import React from 'react';
import { hot } from 'react-hot-loader';
import Main from './Routes/Main';
import { Box } from 'rebass';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Main />;
  }
}

export default hot(module)(App);
// export default App;
