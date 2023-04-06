import React from 'react';

import { Box } from '@mui/material';

import { useMediaQuery } from '@/hooks/useMediaQuery';

const Learning: React.FC = () => {
  const isMd = useMediaQuery(960);
  return (
    <Box
      className="learning"
      display="flex"
      flexDirection="column"
      mt={1}
      sx={{
        height: !isMd ? 'calc(100vh - 95px)' : 'calc(100vh - 145px)',
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      Learning
    </Box>
  );
};

export default Learning;
