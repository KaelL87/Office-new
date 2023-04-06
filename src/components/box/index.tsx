/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

import styled from 'styled-components';

import { StyledSystemProps } from '@/styles/Styles';
import { styledSystem } from '@/styles/styles1';

const centeredProps: StyledSystemProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const StyledBox = styled('div')`
  box-sizing: border-box;
  min-width: 0;
  ${styledSystem}
`;

export interface BoxProps extends StyledSystemProps, React.HTMLAttributes<HTMLDivElement> {
  centeredContent?: boolean;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { centeredContent, ...restProps } = props;

  return (
    <StyledBox
      ref={ref}
      data-testid="Box"
      {...(centeredContent ? centeredProps : {})}
      {...restProps}
    />
  );
});
