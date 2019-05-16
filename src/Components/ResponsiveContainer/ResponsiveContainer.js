import React, { Fragment } from 'react';
import { Responsive } from 'semantic-ui-react';
import { Box } from 'rebass';
import theme from '../../utils/theme';

/**
 * Responsive Semantic with width rebass (styled-system) appoach
 * @param {Object} props
 * @param {Array} props.width - use as rebase width true is visible, false is invisible
 */
const ResponsiveContainer = props => {
  const { width } = props;
  const newPixel = theme.breakpoints.map(rem => {
    return convertRemToPixels(stringToNumber(rem));
  });
  let i = 0;
  if (Array.isArray(width)) {
    return (
      <Fragment>
        {width.map(display => {
          if (display) {
            if (i == 0) {
              return (
                <Responsive key={i} maxWidth={newPixel[i++] - 1}>
                  {props.children}
                </Responsive>
              );
            } else if (i !== width.length - 1) {
              return (
                <Responsive
                  key={i}
                  minWidth={newPixel[i - 1]}
                  maxWidth={newPixel[i++] - 1}
                >
                  {props.children}
                </Responsive>
              );
            } else {
              return (
                <Responsive key={i} minWidth={newPixel[i++ - 1]}>
                  {props.children}
                </Responsive>
              );
            }
          }
        })}
      </Fragment>
    );
  } else return <Fragment>{props.children}</Fragment>;
};

const stringToNumber = str => {
  return parseInt(str, 10);
};

const convertRemToPixels = rem => {
  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return rem * 16;
};

export default ResponsiveContainer;
