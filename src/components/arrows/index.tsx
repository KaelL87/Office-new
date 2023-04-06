/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { IconButton } from '@mui/material';

export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <IconButton
        aria-label="prevArrow"
        sx={{ width: '25px', height: '25px', padding: '0', bgcolor: '#ebebebc4' }}
      >
        <EastIcon color={'secondary'} />
      </IconButton>
    </div>
  );
};

export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <IconButton
        aria-label="prevArrow"
        sx={{ width: '25px', height: '25px', padding: '0', bgcolor: '#ebebebc4' }}
      >
        <WestIcon color={'secondary'} />
      </IconButton>
    </div>
  );
};
