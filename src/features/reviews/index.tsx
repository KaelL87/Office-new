import React from 'react';

import { Box } from '@mui/material';

import { useMediaQuery } from '@/hooks/useMediaQuery';

const Reviews: React.FC = () => {
  const isMd = useMediaQuery(960);
  return (
    <Box
      className="reviews"
      display="flex"
      flexDirection="column"
      mt={1}
      sx={{
        height: !isMd ? 'calc(100vh - 95px)' : 'calc(100vh - 145px)',
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      Reviews
    </Box>
  );
};

export default Reviews;
