/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import styled, { keyframes } from 'styled-components';

import { Box, BoxProps } from '@/components/box';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled(Box)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border: ${({ width }) => `solid ${width} transparent`};
  border-top-color: ${({ color }) => color};
  animation: ${rotate} 1.5s linear infinite;
`;

export type SpinnerProps = BoxProps;

export const Spinner = ({
  size = '5rem',
  width = '0.5rem',
  color = 'gray',
  ...remainderProps
}: SpinnerProps): JSX.Element => (
  <StyledSpinner
    data-testid="Spinner"
    size={size}
    width={width}
    color={color}
    {...remainderProps}
  />
);
