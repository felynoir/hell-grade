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

class SubmitCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: '',
      language: 'C',
    };
  }

  onFormChange = (e, { id, value }) => {
    this.setState({
      [id]: value,
    });
  };

  fileChange = e => {
    this.setState({
      [e.target.id]: e.target.files[0],
      fileName: e.target.files[0].name,
    });
  };

  onSubmit = () => {
    const { handleSubmit } = this.props;
    handleSubmit(this.state);
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
    const { language, fileName } = this.state;
    return (
      <Flex>
        <Box width={1}>
          <Form onSubmit={this.onSubmit}>
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
                id="file"
                accept=".c,.cpp"
                hidden
                onChange={this.fileChange}
              />
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
                color="teal"
                fluid
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
