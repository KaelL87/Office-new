/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy, Suspense } from 'react';

import { Box } from '@mui/material';

import { Spinner } from '@/components/spinner';

const defaultFallback = (
  <Box
    position="relative"
    display="flex"
    justifyContent="center"
    alignItems="center"
    bgcolor="white"
    margin="0 auto"
  >
    {console.log('prueba')}
    <Spinner size="10rem" marginRight="1rem" width="5px" color="blue" margin="auto" />
    <Box position="absolute" display="flex" alignItems="center" justifyContent="center">
      <div>Loading</div>
    </Box>
  </Box>
);

export const dynamic = (fn, fallback) => {
  const Component = lazy(fn);

  return (props = {}) => (
    <Suspense fallback={fallback || defaultFallback}>
      <Component {...props} />
    </Suspense>
  );
};
