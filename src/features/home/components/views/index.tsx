import React from 'react';

import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

import img1 from '@/assets/certificates/img1.png';
import img2 from '@/assets/certificates/img2.png';

const Views: React.FC = () => {
  return (
    <Box component="section" flexDirection={'row'} sx={{ zIndex: 1 }}>
      <Grid container mt={7} rowSpacing={3} columnSpacing={3}>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Card
            sx={{
              maxWidth: { xs: 390, md: 440 },
              width: 'auto',
              position: 'relative',
              padding: { xs: '10px 2px', md: '10px 37px' },
              backgroundColor: '#EEF0F4',
            }}
          >
            <CardContent>
              <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h4" fontWeight={600} component="div" color="#00509D">
                    NEW CERTIFICATES
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 18 }} color="black" fontWeight={700} gutterBottom>
                    Online Courses from{' '}
                    <strong style={{ color: '#00509D' }}>ROI Master Academy</strong>
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
                Get Enrolled
              </Button>
            </CardActions>
            <img
              height="140"
              src={img1}
              style={{ position: 'absolute', bottom: '0', right: '0' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Card
            sx={{
              maxWidth: { xs: 390, md: 440 },
              width: 'auto',
              position: 'relative',
              padding: { xs: '10px 2px', md: '10px 37px' },
              backgroundColor: '#EEF0F4',
            }}
          >
            <CardContent>
              <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h4" fontWeight={600} component="div" color="#00509D">
                    NEW COLLECTION
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 18 }} color="black" fontWeight={700} gutterBottom>
                    Master Your <strong style={{ color: '#00509D' }}>Trading Skill</strong> in just
                    30 days
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
                Get Enrolled
              </Button>
            </CardActions>
            <img
              height="140"
              src={img2}
              style={{
                position: 'absolute',
                top: '50%',
                right: '15px',
                transform: 'translateY(-45%)',
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Views;
