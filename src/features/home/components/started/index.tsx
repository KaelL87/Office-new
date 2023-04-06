import React from 'react';

import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

import img1 from '@/assets/certificates/img1.png';
import img3 from '@/assets/certificates/img3.png';

const Started: React.FC = () => {
  return (
    <Box component="section" flexDirection={'row'} sx={{ zIndex: 1 }}>
      <Grid container rowSpacing={2} columnSpacing={3} mb={2}>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Card
            sx={{
              maxWidth: { xs: 390, md: 640 },
              width: 'auto',
              position: 'relative',
              padding: { xs: '10px 2px', md: '10px 37px' },
              backgroundColor: '#EEF0F4',
            }}
          >
            <CardContent sx={{ p: '16px 16px 0' }}>
              <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={7}>
                  <Typography variant="h3" fontWeight={600} component="div">
                    Achieve Your Goals With ROI Academy
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 14 }} color="black" fontWeight={400} gutterBottom>
                    Create an account to receive our newsletter, course recommendations and
                    promotions.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
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
                Register Now
              </Button>
            </CardActions>
            <img
              height="140"
              src={img1}
              style={{ position: 'absolute', bottom: '0', right: '0' }}
            />
            <img
              height="30"
              width={45}
              src={img3}
              style={{ position: 'absolute', bottom: '25px', left: '0' }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Started;
