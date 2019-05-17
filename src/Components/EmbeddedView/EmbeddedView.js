import React from 'react';
import styled from 'styled-components';

const Object = styled.object`
  width: 100%;
  height: 100%;
`;

/**
 * Rendering pdf view with html object
 * @param {Object} props
 * @param {String} url - url or link of pdf.
 */
export const PdfViewer = ({ url }) => {
  return <Object data={url} />;
};
