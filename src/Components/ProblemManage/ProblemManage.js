import React, { Component } from 'react';
import {
  Button,
  Icon,
  Input as SemanticInput,
  Segment,
  Label,
} from 'semantic-ui-react';
import api from '../../utils/api';
import { Form, Input } from 'formsy-semantic-ui-react';
import { Flex, Box, Text } from 'rebass';

// let d = addYears(new Date('2015-01-01T00:00'), 1);
// let f = format(d, 'YYYY-MM-DD');

class ProblemManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileInput: [],
      time: 1,
    };
  }

  onFormSubmit = async data => {
    console.log('form submit', this.state);
    console.log('data', data);

    const { filePdf, fileInput, fileOutput } = this.state;
    const reqForm = new FormData();

    reqForm.append('filePdf', filePdf[0]);
    Object.keys(fileInput).map(key => {
      reqForm.append('fileInput', fileInput[key]);
    });
    Object.keys(fileOutput).map(key => {
      reqForm.append('fileOutput', fileOutput[key]);
    });
    reqForm.append('data', JSON.stringify(data));
    try {
      api.post('/problem/upload', reqForm).then(response => {
        console.log(response.status);
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
    this.setState({ [e.target.id]: e.target.files });
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
    const { fileInput, fileOutput, filePdf } = this.state;
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
                  htmlFor="filePdf"
                  type="button"
                  secondary
                  animated="fade"
                >
                  <Button.Content visible>
                    <Icon name="file" />
                  </Button.Content>
                  <Button.Content hidden>Choose a File</Button.Content>
                </Button>
                <input
                  type="file"
                  id="filePdf"
                  name="filePdf"
                  accept=".pdf"
                  hidden
                  onChange={this.fileChange}
                />
                <Box mb={2} />
                <Segment>{filePdf && filePdf[0].name}</Segment>
              </Flex>
              <Flex flexDirection="column" mb={formMargin}>
                <Text>Input Files</Text>
                <Button
                  as="label"
                  htmlFor="fileInput"
                  type="button"
                  secondary
                  animated="fade"
                >
                  <Button.Content visible>
                    <Icon name="file" />
                  </Button.Content>
                  <Button.Content hidden>Choose a File</Button.Content>
                </Button>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  accept=".in"
                  hidden
                  multiple
                  onChange={this.fileChange}
                />
                <Box mb={1} />
                <Segment>
                  {fileInput &&
                    Object.keys(fileInput).map(fn => {
                      const file = fileInput[fn];
                      return `[${file.name}] `;
                    })}
                </Segment>
              </Flex>
              <Flex flexDirection="column" mb={formMargin}>
                <Text>Output Files</Text>
                <Button
                  as="label"
                  htmlFor="fileOutput"
                  type="button"
                  secondary
                  animated="fade"
                >
                  <Button.Content visible>
                    <Icon name="file" />
                  </Button.Content>
                  <Button.Content hidden>Choose a File</Button.Content>
                </Button>
                <input
                  type="file"
                  id="fileOutput"
                  name="fileOutput"
                  accept=".sol"
                  hidden
                  multiple
                  onChange={this.fileChange}
                />
                <Box mb={1} />
                <Segment>
                  {fileOutput &&
                    Object.keys(fileOutput).map(fn => {
                      const file = fileOutput[fn];
                      return `[${file.name}] `;
                    })}
                </Segment>
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
                  fluid
                  color="teal"
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
