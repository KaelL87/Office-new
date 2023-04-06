import React from 'react';

import { Grid, IconButton } from '@mui/material';

import fb from '@/assets/socials/fb.png';
import ig from '@/assets/socials/ig.png';
import other from '@/assets/socials/other.png';
import tw from '@/assets/socials/tw.png';

const SocialMedia: React.FC = () => {
  return (
    <>
      <Grid item xs={3} sm={3} display="flex" justifyContent="center">
        <IconButton aria-label="FaceBook" sx={{ width: '25px', height: '25px' }}>
          <img src={fb} height={25} />
        </IconButton>
      </Grid>
      <Grid item xs={3} sm={3} display="flex" justifyContent="center">
        <IconButton aria-label="Twitter" sx={{ width: '25px', height: '25px' }}>
          <img src={tw} height={25} />
        </IconButton>
      </Grid>
      <Grid item xs={3} sm={3} display="flex" justifyContent="center">
        <IconButton aria-label="Instagram" sx={{ width: '25px', height: '25px' }}>
          <img src={ig} height={25} />
        </IconButton>
      </Grid>
      <Grid item xs={3} sm={3} display="flex" justifyContent="center">
        <IconButton aria-label="FaceBook">
          <img src={other} height={25} />
        </IconButton>
      </Grid>
    </>
  );
};

export default SocialMedia;
