import React, { Fragment } from 'react';
import { Table, Header, Image, Label, Pagination } from 'semantic-ui-react';
import { Box, Flex } from 'rebass';
import { Link, withRouter } from 'react-router-dom';
class ProblemList extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePageChange = (e, { activePage }) => {
    const { history } = this.props;
    history.push(`/main/${activePage}`);
  };

  render() {
    const ribbon = {
      Hard: 'red',
      Medium: 'yellow',
      Easy: 'green',
    };
    const { problems, page, perPage, match } = this.props;
    const listProblems = problems.slice((page - 1) * perPage, page * perPage);
    return (
      <Flex alignItems="center" flexDirection="column" p={[4, 2]}>
        <Box width={1}>
          <Table inverted selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Problem</Table.HeaderCell>
                <Table.HeaderCell>Submit</Table.HeaderCell>
                <Table.HeaderCell>Correct</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {listProblems.map((problem, index) => {
                return (
                  <Table.Row key={`${problem.name}${index}`}>
                    <Table.Cell>
                      <Label ribbon color={ribbon[problem.rate]}>
                        {problem.rate}
                      </Label>
                      <Link to={problem.to || match.url}>{problem.name}</Link>
                    </Table.Cell>
                    <Table.Cell>{problem.sended}</Table.Cell>
                    <Table.Cell>{problem.passed}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Box>
        <Box mt={3}>
          <Pagination
            boundaryRange={0}
            defaultActivePage={page}
            ellipsisItem={null}
            onPageChange={this.handlePageChange}
            nextItem=">"
            prevItem="<"
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={Math.ceil(problems.length / perPage)}
          />
        </Box>
      </Flex>
    );
  }
}

export default withRouter(ProblemList);
