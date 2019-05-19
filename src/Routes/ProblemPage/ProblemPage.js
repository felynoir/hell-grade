import React from 'react';
import { Flex, Box } from 'rebass';
import { Card, Icon, Button, Tab } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import ScoreBoard from '../../Components/ScoreBoard';
import SubmitCode from '../../Components/SubmitCode';
import { PdfViewer } from '../../Components/EmbeddedView';

const ProblemDetail = ({ problem }) => {
  return (
    <Card fluid color="red">
      <Card.Content>
        <Card.Header>{problem.name}</Card.Header>
        <Card.Meta>{problem.author}</Card.Meta>
        {problem.description && (
          <Card.Description>{problem.description}</Card.Description>
        )}
      </Card.Content>
      <Card.Content>
        <Flex justifyContent="space-between">
          <Box>
            <Icon name="time" />
            {problem.time}
          </Box>
          <Box>
            <Icon name="hdd" />
            {problem.memory}
          </Box>
        </Flex>
      </Card.Content>
    </Card>
  );
};

class ProblemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorLogin: '',
      errorRegister: '',
    };
  }

  handleClickBack = () => {
    const { history } = this.props;
    console.log(history);
    // history.goBack();
  };

  render() {
    const problem = {
      name: 'Problem Name',
      author: 'Author',
      time: '1s',
      memory: '64MB',
      description: 'eiei',
    };
    const panes = [
      {
        menuItem: 'Problem',
        render: () => (
          <Tab.Pane>
            <Box style={{ height: '500px' }}>
              <PdfViewer url="https://www.codecube.in.th/judge/docs/160.pdf#page=1" />
            </Box>
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Status',
        render: () => (
          <Tab.Pane>
            <ScoreBoard submissions={submissions} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Submit',
        render: () => (
          <Tab.Pane>
            <SubmitCode />
          </Tab.Pane>
        ),
      },
    ];

    const submissions = [
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
      { problem: 'Problem name', time: '0.05', score: 'PPPP' },
    ];

    return (
      <Flex flexWrap="wrap" p={3} flexDirection="column">
        <Flex>
          <ProblemDetail problem={problem} />
        </Flex>
        <Box mt={3}>
          <Tab panes={panes} />
        </Box>
      </Flex>
    );
  }
}

export default withRouter(ProblemPage);
