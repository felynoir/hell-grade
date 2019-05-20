import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Segment,
  Divider,
  Tab,
  Table,
  Message,
  Checkbox,
  Form,
  Icon,
  Input,
  Dropdown,
  Dimmer,
  Loader,
  Label,
  Progress,
} from 'semantic-ui-react';

import { Flex, Box } from 'rebass';

// let d = addYears(new Date('2015-01-01T00:00'), 1);
// let f = format(d, 'YYYY-MM-DD');

class SubmitCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: '',
      language: 'C',
    };
  }

  onFormSubmit = e => {
    e.preventDefault(); // Stop form submit
    console.log('form submit', this.state);
    // this.fileUpload(this.state.file);
  };

  onFormChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
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

  // fileUpload = async file => {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   try {
  //     axios.post('/file/upload/enpoint').then(response => {
  //       console.log(response);
  //       console.log(response.status);
  //       this.setState({ statusCode: response.status }, () => {
  //         console.log(
  //           'This is the response status code --->',
  //           this.state.statusCode,
  //         );
  //       });
  //     });
  //   } catch (error) {
  //     console.error(Error(`Error uploading file ${error.message}`));
  //   }
  // };

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
    const { language, fileName } = this.state;
    return (
      <Flex>
        <Box width={1}>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <label>Select Language</label>
              <Dropdown
                fluid
                defaultValue={language}
                selection
                id="language"
                onChange={this.onFormChange}
                options={languages}
              />
            </Form.Field>
            <Form.Field>
              <label>File input & upload </label>
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
              <input type="file" id="file" hidden onChange={this.fileChange} />
              <Form.Input
                fluid
                label="File Chosen: "
                placeholder="Upload file before submit"
                readOnly
                value={fileName}
              />
              <Button
                style={{ marginTop: '20px', margin: 'auto' }}
                type="submit"
              >
                Upload
              </Button>
            </Form.Field>
          </Form>
        </Box>
      </Flex>
    );
  }
}

export default SubmitCode;
