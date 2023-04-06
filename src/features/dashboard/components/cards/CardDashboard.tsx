import React from 'react';

import { Box, Grid, styled, Typography } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CardDashboard: React.FC<{ img: any; title: string; subtitle: string }> = ({
  img,
  title,
  subtitle,
}) => {
  return (
    <Grid
      sx={{
        border: '1px solid #b0b0b0',
        height: '120px',
        width: '210px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}
      flexDirection="row"
      item
      container
    >
      <Grid item xs={5} display="flex" justifyContent="center">
        <Box sx={{ maxWidth: 55 }} display="flex" justifyContent="center">
          <Img alt="complex" src={img} />
        </Box>
      </Grid>
      <Grid item xs={7} display="flex" justifyContent="flex-start">
        <Box>
          <Typography variant="h2" whiteSpace={'break-spaces'} fontWeight={600} component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardDashboard;
