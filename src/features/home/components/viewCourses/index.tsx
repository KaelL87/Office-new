import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Typography,
} from '@mui/material';
import Slider from 'react-slick';
import styled from 'styled-components';

import ClientLogo01 from '@/assets/img/clients/img1.png';
import ClientLogo02 from '@/assets/img/clients/img2.png';
import ClientLogo03 from '@/assets/img/clients/img3.png';
import { NextArrow, PrevArrow } from '@/components/arrows';
import CardOffer from '@/components/Cards/cardOffers';

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const ViewCourses: React.FC = () => {
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
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
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
            Explore Top <strong style={{ color: '#00509D' }}>Courses</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box width={'80%'} margin="auto">
            <Slider {...settings}>
              <LogoWrapper className="flexCenter">
                <CardOffer bg={'#EEF0F4'} />
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo02}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo03}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo03}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo01}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo01}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo01}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo01}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo01}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo01}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
                  </CardContent>
                </Card>
              </LogoWrapper>
              <LogoWrapper className="flexCenter">
                <Card sx={{ width: 225, backgroundColor: '#EEF0F4' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ClientLogo01}
                    sx={{ padding: '15px 15px 0 15px' }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
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
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box>{'(15)'}</Box>
                    </Box>
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

export default ViewCourses;
