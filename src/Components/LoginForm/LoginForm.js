import React, { Fragment } from 'react';
import { Button, Icon, Label, Message } from 'semantic-ui-react';
import { Box, Card, Text, Flex } from 'rebass';
import { Form, Input } from 'formsy-semantic-ui-react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onValidSubmit = (formData, reset) => {
    this.props.onSubmitForm(formData, reset);
  };

  render() {
    const errorLabel = <Label basic color="red" pointing />;
    const { error, resetError } = this.props;
    return (
      <Fragment>
        <Card p={3}>
          <Form onValidSubmit={this.onValidSubmit}>
            <Flex flexDirection="column">
              <Box>
                <Text mb={1}>Email</Text>
                <Input
                  required
                  fluid
                  name="email"
                  placeholder="Email"
                  validations="isEmail"
                  validationErrors={{
                    isEmail: 'This is not a valid email',
                    isDefaultRequiredValue: 'Email is Required',
                  }}
                  errorLabel={errorLabel}
                />
                <Text mb={1}>Password</Text>
                <Input
                  type="Password"
                  required
                  fluid
                  name="password"
                  placeholder="Password"
                  validationErrors={{
                    isDefaultRequiredValue: 'Password is Required',
                  }}
                  errorLabel={errorLabel}
                />
              </Box>
              <Box mt={2} />
              {error && (
                <Box mt={2} mb={2}>
                  <Message negative>{error}</Message>
                </Box>
              )}
              <Flex flexWrap="wrap" justifyContent="center">
                <Box mt={[3, 2, 2]}>
                  <Button icon labelPosition="left" primary>
                    Let's Code
                    <Icon name="code" />
                  </Button>
                </Box>
                <Box mt={[3, 2, 2]}>
                  <Button
                    as={Link}
                    to="/register"
                    icon
                    onClick={resetError}
                    labelPosition="right"
                    secondary
                  >
                    Register
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

export default LoginForm;
