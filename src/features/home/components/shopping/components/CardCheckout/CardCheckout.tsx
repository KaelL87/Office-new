import React from 'react';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

const CardCheckout: React.FC = () => {
  return (
    <Card sx={{ width: 300, p: '15px 10px', height: '200px' }}>
      <CardContent sx={{ width: '90%', margin: '0 auto' }}>
        <Stack spacing={1}>
          <Box component={'div'}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Total:
            </Typography>
            <Typography>3600</Typography>
          </Box>
          <Box component={'div'}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Count
            </Typography>
            <Typography>1</Typography>
          </Box>
        </Stack>
      </CardContent>
      <CardActions sx={{ width: '90%', margin: '0 auto' }}>
        <Grid container display={'flex'} justifyContent={'center'}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              size="medium"
              startIcon={<ShoppingCartCheckoutIcon />}
              sx={{
                backgroundColor: '#00509D',
                '&:hover': {
                  backgroundColor: '#00296B',
                  borderColor: '#0062cc',
                  boxShadow: 'none',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: '#00296B',
                  borderColor: '#005cbf',
                },
              }}
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default CardCheckout;
