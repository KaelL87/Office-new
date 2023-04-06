import React from 'react';

import { Avatar, Box, Button, Grid, Typography } from '@mui/material';

import img2 from '@/assets/img2.png';

const Profile: React.FC = () => {
  return (
    <Box className="profile" display="flex" flexDirection="column" mt={1}>
      <Grid container mt={1} gap={2} ml={{ xs: 0, sm: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h2" whiteSpace={'break-spaces'} fontWeight={600} component="div">
            Profile
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            margin={'auto'}
            sx={{
              border: '1px solid #b0b0b0',
              minHeight: '120px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Grid container p={5}>
              <Grid item xs={12}>
                <Avatar src={img2} sx={{ width: 84, height: 84 }} />
              </Grid>
              <Grid item container xs={12} mt={3}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" component="div" sx={{ color: '#878787' }}>
                    Registration Date:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" component="div" sx={{ color: 'black' }}>
                    Thu 26 Nov 2020, 04:15:28 am
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} mt={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" component="div" sx={{ color: '#878787' }}>
                    First Name:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" component="div" sx={{ color: 'black' }}>
                    Adeniyi
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} mt={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" component="div" sx={{ color: '#878787' }}>
                    Last Name:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" component="div" sx={{ color: 'black' }}>
                    David
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} mt={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" component="div" sx={{ color: '#878787' }}>
                    Username:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" component="div" sx={{ color: 'black' }}>
                    KaeL87
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} mt={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" component="div" sx={{ color: '#878787' }}>
                    Email:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" component="div" sx={{ color: 'black' }}>
                    student@edumall.com
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} mt={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" component="div" sx={{ color: '#878787' }}>
                    Phone Number:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" component="div" sx={{ color: 'black' }}>
                    09038332315
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} mt={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" component="div" sx={{ color: '#878787' }}>
                    Job Title:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" component="div" sx={{ color: 'black' }}>
                    ________
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} mt={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" component="div" sx={{ color: '#878787' }}>
                    Bio:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="body1" component="div" sx={{ color: 'black' }}>
                    I am a good student.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Button
            variant="contained"
            size="medium"
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
            Edit Profile
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
