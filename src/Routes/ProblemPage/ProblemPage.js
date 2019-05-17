import React from 'react';
import { Flex, Box } from 'rebass';
import { Segment, Divider } from 'semantic-ui-react';
import LoginForm from '../../Components/LoginForm';
import RegisterForm from '../../Components/RegisterForm';
import styled from 'styled-components';

import { PdfViewer } from '../../Components/EmbeddedView';

const FullFlex = styled(Flex)`
  height: 100vh;
  width: 100vw;
`;

class ProblemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorLogin: '',
      errorRegister: '',
    };
  }

  render() {
    const problem = {};
    return (
      <FullFlex flexWrap="wrap">
        <Box style={{ height: '500px' }} width={1 / 2}>
          <PdfViewer url="https://www.codecube.in.th/judge/docs/160.pdf#page=1" />
        </Box>
      </FullFlex>
    );
  }
}

export default ProblemPage;
