/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { LinkButtonContainer } from './LinkButton.styles';

const LinkButton = ({
  children,
  link = '#',
  color = 'black',
  fontSize = '13px',
  height = 'auto',
  width = 'auto',
}) => {
  return (
    <LinkButtonContainer
      href={link}
      color={color}
      fontSize={fontSize}
      height={height}
      width={width}
    >
      {children}
    </LinkButtonContainer>
  );
};

export default LinkButton;
