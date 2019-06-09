import React from 'react';
import { Flex, Box } from 'rebass';
import api from '../../utils/api';
import SubmitCodeUI from '../../Components/SubmitCode';

class SubmitCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problem: null,
    };
  }

  handleSubmit = async ({ file, language }) => {
    const { id } = this.props;
    const reqForm = new FormData();
    reqForm.append('code', file);
    reqForm.append('language', language);
    reqForm.append('problemId', id);
    try {
      const { data } = await api.post('/submission/submit', reqForm);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <SubmitCodeUI handleSubmit={this.handleSubmit} />;
  }
}

export default SubmitCode;
