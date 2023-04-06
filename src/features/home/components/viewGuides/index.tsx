import React from 'react';

import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';
import styled from 'styled-components';

import ClientLogo01 from '@/assets/guides/img1.png';
import ClientLogo02 from '@/assets/guides/img2.png';
import ClientLogo03 from '@/assets/guides/img3.png';
import ClientLogo04 from '@/assets/guides/img4.png';
import { NextArrow, PrevArrow } from '@/components/arrows';

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const ViewGuides: React.FC = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 644,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      component="section"
      flexDirection={'row'}
      mt={7}
      mb={7}
      sx={{ zIndex: 99, maxWidth: '100vw' }}
    >
      <Grid container mt={7} rowSpacing={3} sx={{ width: '80%' }} columnSpacing={3} margin="auto">
        <Grid item xs={12}>
          <Typography variant="h2" whiteSpace={'break-spaces'} fontWeight={600} component="div">
            ROI Academy <strong style={{ color: '#00509D' }}>Guide</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box width={'80%'} margin="auto">
            <Slider {...settings}>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: 'transparente' }} elevation={0}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo01}
                    sx={{ padding: '15px 50px 0px 50px' }}
                  />
                  <CardContent sx={{ padding: '0 30px' }}>
                    <Grid container mt={1}>
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          fontSize={16}
                          fontWeight={700}
                          color="black"
                          textAlign={'center'}
                        >
                          Learn The Essential Skills
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        mt={1}
                      >
                        <Typography
                          variant="body2"
                          fontSize={14}
                          fontWeight={500}
                          color="GrayText"
                          textAlign={'center'}
                        >
                          Like basic of trading and much more
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: 'transparente' }} elevation={0}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo02}
                    sx={{ padding: '15px 50px 0px 50px' }}
                  />
                  <CardContent sx={{ padding: '0 30px' }}>
                    <Grid container mt={1}>
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          fontSize={16}
                          fontWeight={700}
                          color="black"
                          textAlign={'center'}
                        >
                          Earn Certificates & Degrees
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        mt={1}
                      >
                        <Typography
                          variant="body2"
                          fontSize={14}
                          fontWeight={500}
                          color="GrayText"
                          textAlign={'center'}
                        >
                          From top institutions and universities
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: 'transparente' }} elevation={0}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo03}
                    sx={{ padding: '15px 50px 0px 50px' }}
                  />
                  <CardContent sx={{ padding: '0 30px' }}>
                    <Grid container mt={1}>
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          fontSize={16}
                          fontWeight={700}
                          color="black"
                          textAlign={'center'}
                        >
                          Get Ready For The Next Career
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        mt={1}
                      >
                        <Typography
                          variant="body2"
                          fontSize={14}
                          fontWeight={500}
                          color="GrayText"
                          textAlign={'center'}
                        >
                          Mastering new skills in trading, analytics and more
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: 'transparente' }} elevation={0}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo04}
                    sx={{ padding: '15px 50px 0px 50px' }}
                  />
                  <CardContent sx={{ padding: '0 30px' }}>
                    <Grid container mt={1}>
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          fontSize={16}
                          fontWeight={700}
                          color="black"
                          textAlign={'center'}
                        >
                          Master At Different Areas
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        mt={1}
                      >
                        <Typography
                          variant="body2"
                          fontSize={14}
                          fontWeight={500}
                          color="GrayText"
                          textAlign={'center'}
                        >
                          With ROI`s thousands of courses instructed experts
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </LogoWrapper>
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewGuides;
