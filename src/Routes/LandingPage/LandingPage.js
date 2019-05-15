import React from 'react';
import { Flex, Box } from 'rebass';
import { Segment, Divider } from 'semantic-ui-react';
import LoginForm from '../../Components/LoginForm';
import styled from 'styled-components';

const FullFlex = styled(Flex)`
  height: 100vh;
  width: 100vw;
`;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

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
            <LoginForm />
          </Segment>
        </Flex>
      </FullFlex>
    );
  }
}

export default LandingPage;
