/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { ThemeDecorator } from 'services/theme';

import { Box } from '.';

export default {
  title: 'Components/Box',
  component: Box,
  decorators: [ThemeDecorator],
};

export const Default = () => (
  <p>Box has no default UI. See other Box stories to view how props effect Box component.</p>
);
export const CommonStylingProps = () => (
  <Box
    m="30px"
    p="30px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    color="white"
    bg="gray"
    width="100px"
    height="100px"
    borderRadius="md"
    boxShadow="sm"
  >
    Box
  </Box>
);

export const CommonProps = () => (
  <Box as="button" p="10px" border="2px solid red" color="red" backgroundColor="none">
    button
  </Box>
);

export const Grid = () => (
  <Box
    display="grid"
    gridTemplateColumns="repeat(3,1fr)"
    gridGap="3rem"
    p="10px"
    border="2px solid gray"
  >
    <Box gridColumn="1" gridRow="1">
      item1
    </Box>
    <Box gridColumn="1" gridRow="2">
      item1
    </Box>
    <Box gridColumn="1" gridRow="3">
      item1
    </Box>
    <Box gridColumn="2" gridRow="1">
      item1
    </Box>
    <Box gridColumn="2" gridRow="2">
      item1
    </Box>
    <Box gridColumn="2" gridRow="3">
      item1
    </Box>
    <Box gridColumn="3" gridRow="1">
      item1
    </Box>
    <Box gridColumn="3" gridRow="2">
      item1
    </Box>
    <Box gridColumn="3" gridRow="3">
      item1
    </Box>
  </Box>
);

export const CenteredContent = () => (
  <Box centeredContent height="15rem" width="15rem" backgroundColor="gray">
    Box
  </Box>
);
