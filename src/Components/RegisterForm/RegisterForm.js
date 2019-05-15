import React, { Fragment } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { Box, Card, Text, Flex } from 'rebass';
import { Form, Input } from 'formsy-semantic-ui-react';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onValidSubmit = formData => {
    this.props.onSubmitForm(formData);
  };

  render() {
    const errorLabel = <Label basic color="red" pointing />;
    return (
      <Fragment>
        <Card p={3}>
          <Form onValidSubmit={this.onValidSubmit}>
            <Flex flexDirection="column">
              <Box>
                <Text mb={1}>Username</Text>
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

export default withRouter(RegisterForm);
