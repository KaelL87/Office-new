import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import ClientLogo01 from '@/assets/img/clients/img1.png';
import SocialMedia from '@/components/socialMedia';

const CardCourseInfo: React.FC<{ scrolled?: boolean }> = ({ scrolled }) => {
  return (
    <Card sx={{ width: 375 }}>
      {!scrolled && <CardMedia component="img" height="200" image={ClientLogo01} />}
      <CardContent sx={{ width: '90%', margin: '0 auto' }}>
        <Grid container mt={2} alignItems={'center'}>
          <Grid item xs={4} display="flex" justifyContent="flex-start">
            <Box display={'flex'} alignItems="baseline">
              <Typography fontSize={30} fontWeight={700} color="#00509D">
                $39.
              </Typography>
              <Typography fontSize={20} fontWeight={700} color="#00509D">
                99
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center" alignItems="baseline">
            <Box display={'flex'} alignItems={'baseline'}>
              <Typography variant="body2" fontSize={20} fontWeight={700} color="GrayText">
                $39.
              </Typography>
              <Typography variant="body2" fontSize={15} fontWeight={700} color="GrayText">
                99
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Box
              display={'flex'}
              alignItems={'baseline'}
              sx={{
                border: '1px solid #6CBD7E',
                padding: '2.5px 6px',
                borderRadius: '7px',
              }}
            >
              <Typography variant="body2" fontSize={12} fontWeight={400} color="black">
                34% OFF
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12} display="flex">
            <Grid item xs={6} display={'flex'} justifyContent="flex-start">
              <TuneOutlinedIcon sx={{ marginRight: '5px' }} />
              <Typography variant="body1" color="gray">
                Level
              </Typography>
            </Grid>
            <Grid item display={'flex'} xs={6} justifyContent="flex-end">
              <Typography variant="body1" color="gray">
                Beginner
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={1} mb={1}>
            <Divider orientation="horizontal" flexItem />
          </Grid>
          <Grid item xs={12} display="flex">
            <Grid item xs={6} display={'flex'} justifyContent="flex-start">
              <ScheduleOutlinedIcon sx={{ marginRight: '5px' }} />
              <Typography variant="body1" color="gray">
                Duration
              </Typography>
            </Grid>
            <Grid item display={'flex'} xs={6} justifyContent="flex-end">
              <Typography variant="body1" color="gray">
                15.3 hrs
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={1} mb={1}>
            <Divider orientation="horizontal" flexItem />
          </Grid>
          <Grid item xs={12} display="flex">
            <Grid item xs={6} display={'flex'} justifyContent="flex-start">
              <PlayCircleFilledWhiteOutlinedIcon sx={{ marginRight: '5px' }} />
              <Typography variant="body1" color="gray">
                Lectures
              </Typography>
            </Grid>
            <Grid item display={'flex'} xs={6} justifyContent="flex-end">
              <Typography variant="body1" color="gray">
                10 Lectures
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={1} mb={1}>
            <Divider orientation="horizontal" flexItem />
          </Grid>
          <Grid item xs={12} display="flex">
            <Grid item xs={6} display={'flex'} justifyContent="flex-start">
              <SellOutlinedIcon sx={{ marginRight: '5px' }} />
              <Typography variant="body1" color="gray">
                Topic
              </Typography>
            </Grid>
            <Grid item display={'flex'} xs={6} justifyContent="flex-end">
              <Typography variant="body1" color="gray">
                Non Fungible Token (NFT)
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={1} mb={1}>
            <Divider orientation="horizontal" flexItem />
          </Grid>
          <Grid item xs={12} display="flex">
            <Grid item xs={6} display={'flex'} justifyContent="flex-start">
              <LanguageOutlinedIcon sx={{ marginRight: '5px' }} />
              <Typography variant="body1" color="gray">
                Language
              </Typography>
            </Grid>
            <Grid item display={'flex'} xs={6} justifyContent="flex-end">
              <Typography variant="body1" color="gray">
                English
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mt={3}
            mb={2}
          >
            <Typography variant="h3" fontWeight={600} color="black">
              Materials Included
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={0.1}>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{ marginRight: '5px', color: '#00509D' }}
                  fontSize={'small'}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Videos
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{ marginRight: '5px', color: '#00509D' }}
                  fontSize={'small'}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Notes
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{ marginRight: '5px', color: '#00509D' }}
                  fontSize={'small'}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Booklets
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{ marginRight: '5px', color: '#00509D' }}
                  fontSize={'small'}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Exercise
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{ marginRight: '5px', color: '#00509D' }}
                  fontSize={'small'}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Questions & Solutions
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ width: '90%', margin: '0 auto' }}>
        <Grid container display={'flex'} justifyContent={'center'}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              size="medium"
              startIcon={<AddShoppingCartIcon />}
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
              Add to Cart
            </Button>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Button
              fullWidth
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'aliceblue',
                  borderColor: '#0062cc',
                  boxShadow: 'none',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: 'aliceblue',
                  borderColor: '#005cbf',
                },
              }}
            >
              <Typography variant="body1" color="#00509D">
                Add to Wishlist
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CardActions>
      <CardContent sx={{ padding: '0 15px', marginTop: '15px' }}>
        <Grid container display="flex" alignItems="center">
          <SocialMedia />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardCourseInfo;
