import React, { Component } from 'react';
import {
  Button,
  Icon,
  Input as SemanticInput,
  Dropdown,
  Label,
} from 'semantic-ui-react';
import axios from 'axios';
import { Form, Input } from 'formsy-semantic-ui-react';
import { Flex, Box, Text } from 'rebass';

// let d = addYears(new Date('2015-01-01T00:00'), 1);
// let f = format(d, 'YYYY-MM-DD');

class ProblemManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: '',
      time: 1,
    };
  }

  onFormSubmit = async data => {
    console.log('form submit', this.state);
    console.log('data', data);
    const { file } = this.state;
    const reqForm = new FormData();
    reqForm.append('problemFlie', file);
    reqForm.append('data', JSON.stringify(data));
    try {
      axios.post('/file/upload/enpoint', reqForm).then(response => {
        console.log(response);
        console.log(response.status);
        this.setState({ statusCode: response.status }, () => {
          console.log(
            'This is the response status code --->',
            this.state.statusCode,
          );
        });
      });
    } catch (error) {
      console.error(Error(`Error uploading file ${error.message}`));
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  fileChange = e => {
    this.setState(
      { file: e.target.files[0], fileName: e.target.files[0].name },
      () => {
        console.log(
          'File chosen --->',
          this.state.file,
          console.log('File name  --->', this.state.fileName),
        );
      },
    );
  };

  render() {
    const languages = [
      {
        key: 'C',
        text: 'C',
        value: 'C',
      },
      {
        key: 'C++',
        text: 'C++',
        value: 'C++',
      },
    ];
    const { language, fileName, time } = this.state;
    const formMargin = 3;
    const errorLabel = <Label basic color="red" pointing />;
    return (
      <Flex>
        <Box width={1}>
          <Form onValidSubmit={this.onFormSubmit}>
            <Flex flexDirection="column">
              <Box mb={formMargin}>
                <Text>Select Language</Text>
                <Input
                  fluid
                  required
                  name="problemName"
                  label="Problem Name"
                  validationErrors={{
                    isDefaultRequiredValue: 'Problem Name is Required',
                  }}
                  errorLabel={errorLabel}
                />
              </Box>
              <Flex flexDirection="column" mb={formMargin}>
                <Text>File input & upload </Text>
                <Button
                  as="label"
                  htmlFor="file"
                  type="button"
                  color="violet"
                  animated="fade"
                >
                  <Button.Content visible>
                    <Icon name="file" />
                  </Button.Content>
                  <Button.Content hidden>Choose a File</Button.Content>
                </Button>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".pdf"
                  hidden
                  onChange={this.fileChange}
                />
                <Box mb={2} />
                <SemanticInput
                  fluid
                  label="File Chosen"
                  placeholder="Upload file before submit"
                  readOnly
                  value={fileName}
                />
              </Flex>
              <Box mb={formMargin}>
                <Input
                  name="time"
                  label="Time (seconds)"
                  defaultValue="1"
                  validations={{
                    isNumeric: true,
                    min: (values, value) => {
                      return value > 0 ? true : 'Less than 0s'; // You can return an error
                    },
                    max: (values, value) => {
                      return value <= 5 ? true : 'More than 5s';
                    },
                  }}
                  errorLabel={errorLabel}
                />
              </Box>
              <Box mb={formMargin}>
                <Input
                  name="memory"
                  label="Memory (MB)"
                  defaultValue="4"
                  validations={{
                    isNumeric: true,
                    min: (values, value) => {
                      return value >= 4 ? true : 'Less than 4MB'; // You can return an error
                    },
                    max: (values, value) => {
                      return value <= 256 ? true : 'More than 256MB';
                    },
                  }}
                  errorLabel={errorLabel}
                />
              </Box>
              <Box>
                <Button
                  style={{ marginTop: '20px', margin: 'auto' }}
                  type="submit"
                >
                  Upload
                </Button>
              </Box>
            </Flex>
          </Form>
        </Box>
      </Flex>
    );
  }
}

export default ProblemManage;
