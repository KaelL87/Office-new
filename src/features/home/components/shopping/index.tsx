import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import CardCheckout from './components/CardCheckout/CardCheckout';
import CardItem from './components/CardItem/CardItem';

const ShoppingCart: React.FC = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} mt={5} mb={5} sx={{ zIndex: 1, maxWidth: '100vw' }}>
      <Grid container mt={7} rowSpacing={3} sx={{ width: '80%' }} columnSpacing={3} margin="auto">
        <Grid item xs={12} mb={2}>
          <Typography sx={{ fontWeight: '700', fontSize: '2.5rem' }}>Shopping Cart</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid item xs={12} mb={2}>
            <Box sx={{ width: '100%', border: '1px solid lightgray', height: 'auto' }}>
              <CardItem />
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box sx={{ width: '100%', border: '1px solid lightgray', height: 'auto' }}>
              <CardItem />
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box sx={{ width: '100%', border: '1px solid lightgray', height: 'auto' }}>
              <CardItem />
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box sx={{ width: '100%', border: '1px solid lightgray', height: 'auto' }}>
              <CardItem />
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box sx={{ width: '100%', border: '1px solid lightgray', height: 'auto' }}>
              <CardItem />
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box sx={{ width: '100%', border: '1px solid lightgray', height: 'auto' }}>
              <CardItem />
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box sx={{ width: '100%', border: '1px solid lightgray', height: 'auto' }}>
              <CardItem />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} display="flex" justifyContent={'center'}>
          <CardCheckout />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;
