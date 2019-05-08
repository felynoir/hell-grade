import React from 'react';
import { hot } from 'react-hot-loader';

import styled from 'styled-components';

const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  background-color: pink;
`;

const F = () => <Title>React Bolt</Title>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          aa:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />

        <F />
      </form>
    );
  }
}

export default hot(module)(App);
