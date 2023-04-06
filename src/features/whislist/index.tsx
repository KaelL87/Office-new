import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import CardOffer from '@/components/Cards/cardOffers';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Whislist: React.FC = () => {
  const isMd = useMediaQuery(960);
  return (
    <Box
      className="whislist"
      display="flex"
      flexDirection="column"
      mt={1}
      sx={{
        height: !isMd ? 'calc(100vh - 95px)' : 'calc(100vh - 90px)',
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Typography variant="h2" whiteSpace={'break-spaces'} fontWeight={600} component="div">
            Whislist
          </Typography>
        </Grid>
        <Grid item xs={12} container gap={1} rowGap={4}>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <CardOffer />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Whislist;
