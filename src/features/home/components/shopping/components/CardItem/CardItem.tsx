import React from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Chip, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import ClientLogo01 from '@/assets/img/clients/img1.png';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CardItem: React.FC = () => {
  return (
    <Paper
      sx={{
        p: '10px 16px',
        flexGrow: 1,
        backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
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
              <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: '600' }}>
                NFT(Non Fungible Token) - The Complete Guide (2022 Edition)
              </Typography>
              <Typography variant="body2" gutterBottom>
                By Hector Amed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                100hrs - 146 lectures - All levels
              </Typography>
            </Grid>
            <Grid item xs>
              <Chip
                size="small"
                label={'PROFESSIONAL'}
                sx={{ backgroundColor: '#75B7F4', height: '14px' }}
              />
            </Grid>
            <Grid item>
              <Typography sx={{ color: '#00509D' }} fontSize={18} fontWeight={600} component="div">
                $10000.00
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Tooltip title="Remove">
              <IconButton size="large" aria-label="Cancel" color="inherit" sx={{ padding: '4px' }}>
                <DeleteForeverIcon sx={{ color: 'black' }} fontSize={'medium'} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardItem;
