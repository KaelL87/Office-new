import React from 'react';

import { Box } from '@mui/material';

import Description from './components/description';
import InfoCourse from './components/infoCourse';

const Course: React.FC = () => {
  return (
    <Box flexDirection="column" margin="auto" display="flex">
      <InfoCourse />
      <Description />
    </Box>
  );
};

export default Course;
