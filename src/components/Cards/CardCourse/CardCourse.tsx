import React from 'react';

import { Box, Chip, Grid, Paper, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import ClientLogo01 from '@/assets/img/clients/img1.png';
import ProgressBar from '@/components/progressBar';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CardCourse: React.FC = () => {
  return (
    <Paper
      sx={{
        p: '10px 16px',
        flexGrow: 1,
        backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        border: '1px solid #b0b0b0',
      }}
      elevation={0}
    >
      <Grid container spacing={2}>
        <Grid item display="flex" justifyContent="center">
          <Box sx={{ maxWidth: 200 }} display="flex" justifyContent="center">
            <Img alt="complex" src={ClientLogo01} />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
              <Box display="inline-flex" alignItems={'baseline'}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Rating
                    name="read-only"
                    readOnly
                    value={4}
                    precision={0.5}
                    sx={{ color: '#FDC500' }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  fontSize={14}
                  alignItems={'center'}
                  fontWeight={500}
                  sx={{ ml: 0.6, position: 'relative', top: '-4px' }}
                >
                  (15)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Chip
                size="small"
                label={'PROFESSIONAL'}
                sx={{ backgroundColor: '#75B7F4', height: '14px', color: 'white' }}
              />
            </Grid>
            <Grid item xs>
              <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: '600' }}>
                NFT(Non Fungible Token) - The Complete Guide (2022 Edition)
              </Typography>
              <Typography variant="body2" gutterBottom>
                By Hector Amed111
              </Typography>
              <Box width="40%" display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Total Lessons : <strong style={{ color: 'black' }}>10</strong>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Completed Lessons : <strong style={{ color: 'black' }}>5</strong>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item container display="inline-flex" alignItems={'baseline'} columnSpacing={4}>
              <Grid item xs={12} sm={8}>
                <Box width={'100%'}>
                  <ProgressBar value={50} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1" color="text.primary">
                  50% complete
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardCourse;
