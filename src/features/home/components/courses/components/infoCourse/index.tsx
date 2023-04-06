import React from 'react';

import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { Avatar, Box, Chip, Divider, Grid, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import bg2 from '@/assets/bg2.png';
import ClientLogo01 from '@/assets/img/clients/img1.png';
import img from '@/assets/img1.png';
import BreadCrumb from '@/components/breadCrumb';
import CardCourse from '@/components/Cards/Cards/CardCourse';
import useSafeState from '@/hooks/useSafeState';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const InfoCourse: React.FC = () => {
  const [scrolled, setScrolled] = useSafeState(false);
  window.addEventListener('scroll', () => {
    if (document.body.scrollHeight - window?.pageYOffset <= 940) {
      return setScrolled(false);
    }
    if (window?.pageYOffset >= 375) {
      return setScrolled(true);
    }

    setScrolled(false);
  });
  return (
    <Box
      component="section"
      bgcolor="#EEF0F4"
      flexDirection={'row'}
      sx={{ zIndex: 2 }}
      className="flexSpaceCenter"
    >
      <Grid
        container
        maxWidth={{ xs: '75%', md: '92%', lg: '80%' }}
        margin="0 auto"
        rowSpacing={1}
        columnSpacing={2}
      >
        <Grid item xs={12}>
          <BreadCrumb />
        </Grid>
        <Grid item xs={12} mt={3} display={'flex'} alignItems={'center'} columnGap={1}>
          <Chip
            label="-34%"
            size="small"
            sx={{ backgroundColor: '#6CBD7E', borderRadius: '5px', height: '16px' }}
          />
          <Typography variant="h4" fontWeight="bold">
            Category : NFT
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          mt={3}
          display={{ sm: 'flex', md: 'none' }}
          alignItems={'center'}
          columnGap={1}
        >
          <Img alt="complex" src={ClientLogo01} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} margin="auto" mt={7} mb={7}>
          <Grid item xs={12}>
            <Typography variant="h1" fontWeight="bold">
              Mastering <strong style={{ color: '#00509D' }}>Non Fungible Token</strong> (NFT)
            </Typography>
          </Grid>
          <Grid item xs={12} mt={3} display="inline-flex" alignItems={'center'}>
            <Avatar src={img} sx={{ width: 22, height: 22 }} />
            <Typography variant="body2" fontSize={12} fontWeight={600} sx={{ ml: 0.6 }}>
              By Hector Ahmed{' '}
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: '4px 7px', borderColor: '#00000099' }}
            />
            <Typography variant="body2" fontSize={12} fontWeight={500} color="GrayText">
              {' '}
              Last Update December 1, 2021{' '}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={1} display="inline-flex" alignItems={'center'}>
            <Typography variant="body1" fontSize={14} fontWeight={800} sx={{ mr: 0.6 }}>
              4.5/5
            </Typography>
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
              <Box>{'(15)'}</Box>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: '4px 7px', borderColor: '#00000099' }}
            />
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <HowToRegOutlinedIcon />
              <Typography
                variant="body2"
                fontSize={12}
                fontWeight={500}
                color="GrayText"
                sx={{ position: 'relative', top: '1px' }}
              >
                1,342 already enrolled
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          className="flexNullCenter flexColumn"
          display={{ xs: 'none', md: 'flex' }}
          position="relative"
          justifyContent={'center'}
        >
          <Box position={'absolute'} sx={{ top: '-20px', right: '-55px' }}>
            <img src={bg2} style={{ maxWidth: '100%', maxHeight: '265px' }} />
          </Box>
          <Box
            position={{ sm: 'relative', md: 'absolute' }}
            sx={
              !scrolled
                ? { top: { sm: '0', md: '5%' }, right: '0' }
                : {
                    position: { sm: 'relative', md: 'fixed' },
                    top: { sm: '0', md: '40px' },
                    right: { sm: '0', md: '10%' },
                  }
            }
          >
            <CardCourse scrolled={scrolled} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          className="flexNullCenter flexColumn"
          display={{ sm: 'flex', md: 'none' }}
          position="relative"
          justifyContent={'center'}
        >
          Aqui va alguna info
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoCourse;
