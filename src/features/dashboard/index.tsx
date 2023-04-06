import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import group1 from '@/assets/group1.png';
import group2 from '@/assets/group2.png';
import group3 from '@/assets/group3.png';
import { Spinner } from '@/components/spinner';

import CardDashboard from './components/cards/CardDashboard';

const DashBoard: React.FC = () => {
  return (
    <Box className="dashboard" display="flex" flexDirection="column" mt={1}>
      <Grid container mt={1} gap={2} ml={1}>
        <Grid item xs={12}>
          <Typography variant="h2" whiteSpace={'break-spaces'} fontWeight={600} component="div">
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <CardDashboard img={group1} title={'19'} subtitle={'Enrolled Courses'} />
          </Grid>
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <CardDashboard img={group2} title={'0'} subtitle={'Active Courses'} />
          </Grid>
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <CardDashboard img={group3} title={'27'} subtitle={'Courses Completed'} />
          </Grid>
        </Grid>
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="white"
          margin="0 auto"
        >
          <Spinner size="10rem" marginRight="1rem" width="5px" color="blue" margin="auto" />
          <Box position="absolute" display="flex" alignItems="center" justifyContent="center">
            <div>Loading</div>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default DashBoard;
