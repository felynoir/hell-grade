import React, { Fragment } from 'react';
import { Responsive } from 'semantic-ui-react';
import { Box } from 'rebass';
import theme from '../../utils/theme';

const ScoringBar = props => {};

const stringToNumber = str => {
  return parseInt(str, 10);
};

const convertRemToPixels = rem => {
  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return rem * 16;
};

export default ScoringBar;
