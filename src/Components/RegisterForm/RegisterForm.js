import React, { Fragment } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Box, Card, Text, Flex } from 'rebass';
import { Form, Input } from 'formsy-semantic-ui-react';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Card p={3}>
          <Form>
            <Flex flexDirection="column">
              <Box>
                <Text mb={1}>Email</Text>
                <Input required fluid name="email" placeholder="Email" />
                <Text mb={1}>Password</Text>
                <Input
                  type="Password"
                  required
                  fluid
                  name="password"
                  placeholder="Password"
                />
              </Box>
              <Box mt={2} />
              <Flex flexWrap="wrap" justifyContent="center">
                <Box mt={[3, 2, 2]}>
                  <Button icon labelPosition="left" primary>
                    Let's Code
                    <Icon name="code" />
                  </Button>
                </Box>
                <Box mt={[3, 2, 2]}>
                  <Button icon labelPosition="right" secondary>
                    Sign up
                    <Icon name="signup" />
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Form>
        </Card>
      </Fragment>
    );
  }
}

export default RegisterForm;
