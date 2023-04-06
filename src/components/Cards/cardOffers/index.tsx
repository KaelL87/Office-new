/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import styled from '@emotion/styled';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Fade,
  Grid,
  Rating,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from '@mui/material';

import ClientLogo01 from '@/assets/img/clients/img1.png';

const TooltipWithStyle = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
  />
))(() => {
  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'transparent',
      minWidth: 150,
      borderRadius: 0,
      padding: 0,
    },
  };
});

const CardOffer: React.FC<{ data?: any; bg?: string }> = ({ data, bg = '#ffff' }) => {
  return (
    <Card sx={{ width: 225, backgroundColor: bg }}>
      <TooltipWithStyle
        PopperProps={{
          placement: 'auto',
        }}
        title={
          <Box width={'150px'} height={'150px'} bgcolor="aliceblue" padding="0" color={'black'}>
            prueba
          </Box>
        }
        placement="right"
      >
        <Box>
          <CardMedia
            component="img"
            height="140"
            image={ClientLogo01}
            sx={{ padding: '15px 15px 0 15px' }}
          />
          <CardContent sx={{ paddingBottom: '16px !important' }}>
            <Grid container>
              <Grid item xs={6} display="flex" justifyContent="flex-start" alignItems="center">
                <Chip
                  size="small"
                  label={'PROFESSIONAL'}
                  sx={{ backgroundColor: '#75B7F4', height: '14px' }}
                />
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="flex-end">
                <Typography variant="body2" fontSize={14} fontWeight={700} color="black">
                  $39.99
                </Typography>
              </Grid>
            </Grid>
            <Grid container mt={1}>
              <Grid item xs={12}>
                <Typography variant="body2" fontSize={16} fontWeight={700} color="black">
                  NFT(Non Fungible Token) - The Complete Guide (2022 Edition)
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                mt={1}
              >
                <Typography variant="body2" fontSize={12} fontWeight={500} color="GrayText">
                  By Hector
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </TooltipWithStyle>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="small"
          startIcon={<AddShoppingCartIcon />}
          sx={{
            width: '90%',
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
          Add to Cart
        </Button>
      </CardActions>
      <CardContent sx={{ padding: '0 15px' }}>
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Rating name="read-only" readOnly value={4} precision={0.5} sx={{ color: '#FDC500' }} />
          <Box>{'(15)'}</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardOffer;
