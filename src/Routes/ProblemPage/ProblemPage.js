import React from 'react';
import { Flex, Box } from 'rebass';
import {
  Card,
  Icon,
  Button,
  Tab,
  Dimmer,
  Loader,
  Image,
  Segment,
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import ScoreBoard from '../../Components/ScoreBoard';
import SubmitCode from './SubmitCode';
import { PdfViewer } from '../../Components/EmbeddedView';
import api from '../../utils/api';

const ProblemDetail = ({
  problem: { name, author, description, memory, time },
}) => {
  return (
    <Card fluid color="red">
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{author}</Card.Meta>
        {description && <Card.Description>{description}</Card.Description>}
      </Card.Content>
      <Card.Content>
        <Flex justifyContent="space-between">
          <Box>
            <Icon name="clock" />
            {time} s
          </Box>
          <Box>
            {memory} MB <Icon name="hdd" />
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
      problem: null,
    };
  }

  componentDidMount = async () => {
    const {
      match: { params },
    } = this.props;
    const { name } = params;
    try {
      const { data } = await api.get(`/problem/${name}`);
      this.setState({ problem: data });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { problem } = this.state;
    const { pdf, _id } = problem ? problem : {};
    const panes = [
      {
        menuItem: 'Problem',
        render: () => (
          <Tab.Pane>
            <Box style={{ height: '500px' }}>
              {pdf && <PdfViewer url={pdf} />}
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
            <SubmitCode id={_id} />
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
        {problem ? (
          <div>
            <Flex>
              <ProblemDetail problem={problem} />
            </Flex>
            <Box mt={3}>
              <Tab panes={panes} />
            </Box>
          </div>
        ) : (
          <Segment>
            <Loader active inline="centered" />
          </Segment>
        )}
      </Flex>
    );
  }
}

export default withRouter(ProblemPage);
