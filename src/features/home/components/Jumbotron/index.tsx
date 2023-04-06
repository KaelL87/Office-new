/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, InputBase, Paper, Typography } from '@mui/material';

import bg1 from '@/assets/jumbo/bg1.png';

const Jumbotron: React.FC = () => {
  return (
    <Box
      component="section"
      bgcolor="#EEF0F4"
      flexDirection={'row'}
      sx={{ zIndex: 1 }}
      className="flexSpaceCenter"
    >
      <Grid container width="80%" margin="auto" spacing={2}>
        <Grid item xs={12} sm={5} margin="auto" mt={7} mb={7}>
          <Grid item xs={12}>
            <Typography variant="h1" fontWeight="bold">
              Sharpen Your <strong style={{ color: '#00509D' }}>Trading</strong> Skills Online
            </Typography>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Typography variant="h4">
              Learn how to profit through practical training. Our educational programs are authored
              by professional traders sharing success trading secrets.
            </Typography>
          </Grid>
          <Grid item xs={12} mt={4} display="flex">
            <Paper
              component="form"
              elevation={8}
              sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <Box sx={{ p: '10px 5px' }}>
                <SearchIcon />
              </Box>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="What do you want to learn?"
                inputProps={{ 'aria-label': 'What do you want to learn?' }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00509D',
                  textTransform: 'initial',
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
                Search
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          className="flexNullCenter flexColumn"
          display={{ xs: 'none', sm: 'flex' }}
          position="relative"
          justifyContent={'center'}
        >
          <Box position={'absolute'}>
            <img src={bg1} style={{ maxWidth: '100%', maxHeight: '500px' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Jumbotron;
