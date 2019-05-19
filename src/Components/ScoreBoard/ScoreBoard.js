import React, { Fragment } from 'react';
import {
  Table,
  Header,
  Image,
  Label,
  Pagination,
  Button,
} from 'semantic-ui-react';
import { Box, Flex } from 'rebass';
import { Link, withRouter } from 'react-router-dom';
class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
    };
  }

  render() {
    const { submissions } = this.props;
    const { limit } = this.state;
    return (
      <Flex alignItems="center" flexDirection="column" p={[4, 2]}>
        <Box width={1}>
          <Table basic="very" celled unstackable textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Problem</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Grading</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {submissions.slice(0, limit).map((submit, index) => {
                return (
                  <Table.Row key={`${index}`}>
                    <Table.Cell>Problem No.1</Table.Cell>
                    <Table.Cell>22.01.19 15:00</Table.Cell>
                    <Table.Cell>PPP-----PPPP---PPPPPPTTTT</Table.Cell>
                    <Table.Cell>0.999</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Box>
        <Box mt={3}>
          {limit < submissions.length && (
            <Button
              color="black"
              onClick={() => this.setState({ limit: this.state.limit + 5 })}
            >
              Load more
            </Button>
          )}
        </Box>
      </Flex>
    );
  }
}

export default withRouter(ScoreBoard);
