import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LockIcon from '@mui/icons-material/Lock';
import RemoveIcon from '@mui/icons-material/Remove';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

import check from '@/assets/checkList.png';
import user1 from '@/assets/user1.png';
import ProgressBar from '@/components/progressBar';

import Reviews from '../../../reviews/Reviews';

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        '.Mui-expanded & > .collapsIconWrapper': {
          display: 'none',
        },
        '.expandIconWrapper': {
          display: 'none',
        },
        '.Mui-expanded & > .expandIconWrapper': {
          display: 'block',
        },
      }}
    >
      <div className="expandIconWrapper">
        <RemoveIcon sx={{ color: '#00509D' }} />
      </div>
      <div className="collapsIconWrapper">
        <AddIcon sx={{ color: '#00509D' }} />
      </div>
    </Box>
  );
};

const Description: React.FC = () => {
  return (
    <Box
      component="section"
      flexDirection={'row'}
      sx={{ zIndex: 1 }}
      mt={3}
      className="flexSpaceCenter"
    >
      <Grid
        container
        maxWidth={{ xs: '75%', md: '92%', lg: '80%' }}
        margin="0 auto"
        display={'flex'}
      >
        <Grid container>
          <Grid item xs={12} mt={1} mb={3}>
            <Typography variant="h2" fontWeight="bold">
              About This Course
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} mb={3}>
            <Typography
              variant="body1"
              fontSize={12}
              fontWeight={500}
              color="GrayText"
              textAlign="justify"
            >
              In this course, I take you from the fundamentals and concepts of data modeling all the
              way through a number of best practices and techniques that you’ll need to build data
              models in your organization. You’ll find many examples that clearly demonstrate the
              key concepts and techniques covered throughout the course.
            </Typography>
            <Typography
              variant="body1"
              fontSize={12}
              fontWeight={500}
              color="GrayText"
              textAlign="justify"
              mt={2}
            >
              By the end of the course, you’ll be all set to not only put these principles to work,
              but also to make the key data modeling and design decisions required by the “art” of
              data modeling that transcend the nuts-and-bolts techniques and design patterns.
            </Typography>
            <Typography
              variant="body1"
              fontSize={12}
              fontWeight={500}
              color="GrayText"
              textAlign="justify"
              mt={2}
            >
              Organisations, or groups of organisations, may establish the need for master data
              management when they hold more than one copy of data about a business entity. Holding
              more than one copy of this master data inherently means that there is an inefficiency
              in maintaining a “single version of the truth” across all copies. Unless people,
              processes and technology are in place to ensure that the data values are kept aligned
              across all copies, it is almost inevitable that different versions of information
              about a business entity will be held.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box display="flex" alignItems={'center'} columnGap={0.6}>
              <SellOutlinedIcon />
              <Typography variant="body2" fontWeight="bold">
                Tags: nft, big data, crypto
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            padding: '15px',
            border: '1px solid #EEF0F4',
            borderRadius: '5px',
            width: { sm: '100%', md: '50%' },
          }}
          mt={3}
        >
          <Grid item xs={12} mb={3}>
            <Typography variant="h3" fontWeight="bold">
              Learning Objectives
            </Typography>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12} sm={6} md={6} mb={1}>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{
                    marginRight: '5px',
                    color: '#00509D',
                    backgroundColor: '#EEF0F4',
                    borderRadius: '50px',
                    fontSize: '20px',
                  }}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Ready to begin walking on real life NFT trading
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} mb={1}>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{
                    marginRight: '5px',
                    color: '#00509D',
                    backgroundColor: '#EEF0F4',
                    borderRadius: '50px',
                    fontSize: '20px',
                  }}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Expanded responsibilities as part of an existing role.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{
                    marginRight: '5px',
                    color: '#00509D',
                    backgroundColor: '#EEF0F4',
                    borderRadius: '50px',
                    fontSize: '20px',
                  }}
                />
                <Typography variant="body1" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Find a new position involving NFT and it’s trading.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={3} columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={12} md={6} mb={5}>
            <Grid item xs={12}>
              <Typography variant="h3" fontWeight="bold">
                Requirements
              </Typography>
            </Grid>
            <Grid item xs={12} mt={3}>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{
                    marginRight: '5px',
                    color: '#00509D',
                    backgroundColor: '#EEF0F4',
                    borderRadius: '50px',
                    fontSize: '20px',
                  }}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Basic understanding of data management concepts and constructs such as relational
                  database tables
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mt={3}>
              <Box display={'flex'} alignItems={'center'}>
                <CheckOutlinedIcon
                  sx={{
                    marginRight: '5px',
                    color: '#00509D',
                    backgroundColor: '#EEF0F4',
                    borderRadius: '50px',
                    fontSize: '20px',
                  }}
                />
                <Typography variant="body2" color="gray" sx={{ position: 'relative', top: '1px' }}>
                  Know how different pieces of data logically relate to one another.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mb={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Divider orientation="horizontal" flexItem />
          </Grid>
        </Grid>
        <Grid container mb={3} columnGap={2}>
          <Grid item xs={12} sm={12} md={6} display={'flex'}>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-start'}>
              <Typography variant="h3" fontWeight="bold">
                Curriculum
              </Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
              <Box display={'flex'} alignItems="baseline" columnGap={2}>
                <Typography variant="body1" fontWeight="bold">
                  13 Lessons
                </Typography>
                <Typography variant="body2" color="gray">
                  15h 15m
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} mt={3}>
            <Accordion
              sx={{
                marginBottom: '20px',
                border: '1.5px solid #EEF0F4',
                borderRadius: '5px',
                '&:before': {
                  display: 'none',
                },
              }}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ flexDirection: 'row-reverse' }}
              >
                <Typography sx={{ fontSize: '20px', color: '#00509D', marginLeft: '10px' }}>
                  IT Background
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0' }}>
                <Stack>
                  <Grid container sx={{ backgroundColor: '#EEF0F4' }}>
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Grid
                        item
                        xs={8}
                        display={'flex'}
                        justifyContent={'flex-start'}
                        sx={{ padding: '10px 20px' }}
                        alignItems={'center'}
                      >
                        <img src={check} height={25} />
                        <Typography sx={{ marginLeft: '7.5px' }}>How is NFT made?</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        padding="0px 20px"
                        margin="10px 0"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <LockIcon sx={{ color: 'black' }} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Grid
                      item
                      xs={8}
                      display={'flex'}
                      justifyContent={'flex-start'}
                      sx={{ padding: '10px 20px' }}
                      alignItems={'center'}
                    >
                      <img src={check} height={25} />
                      <Typography sx={{ marginLeft: '7.5px' }}>
                        What is Solana Blockchain?
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      padding="0px 20px"
                      margin="10px 0"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <LockIcon sx={{ color: 'black' }} />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      backgroundColor: '#EEF0F4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Grid
                        item
                        xs={8}
                        display={'flex'}
                        justifyContent={'flex-start'}
                        sx={{ padding: '10px 20px' }}
                        alignItems={'center'}
                      >
                        <img src={check} height={25} />
                        <Typography sx={{ marginLeft: '7.5px' }}>
                          How to sell NFT in marketplace?
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        padding="0px 20px"
                        margin="10px 0"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <LockIcon sx={{ color: 'black' }} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Grid
                      item
                      xs={8}
                      display={'flex'}
                      justifyContent={'flex-start'}
                      sx={{ padding: '10px 20px' }}
                      alignItems={'center'}
                    >
                      <img src={check} height={25} />
                      <Typography sx={{ marginLeft: '7.5px' }}>How to mint NFT?</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      padding="0px 20px"
                      margin="10px 0"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <LockIcon sx={{ color: 'black' }} />
                    </Grid>
                  </Grid>
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                marginBottom: '20px',
                border: '1.5px solid #EEF0F4',
                borderRadius: '5px',
                '&:before': {
                  display: 'none',
                },
              }}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                sx={{ flexDirection: 'row-reverse' }}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{ fontSize: '20px', color: '#00509D', marginLeft: '10px' }}>
                  Key Concepts
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                marginBottom: '20px',
                border: '1.5px solid #EEF0F4',
                borderRadius: '5px',
                '&:before': {
                  display: 'none',
                },
              }}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                sx={{ flexDirection: 'row-reverse' }}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography sx={{ fontSize: '20px', color: '#00509D', marginLeft: '10px' }}>
                  Apply the principals
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        <Grid container mb={3} columnGap={2}>
          <Grid item xs={12} sm={12} md={6} display={'flex'}>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-start'}>
              <Typography variant="h3" fontWeight="bold">
                Your Instructor
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} display={'flex'} mt={3}>
            <Card sx={{ display: 'flex' }} elevation={0}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Box>
                  <CardMedia component="img" sx={{ width: 160, p: 1 }} image={user1} />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ padding: '0' }}>
                      <Typography component="div" color={'black'} variant="h5" fontWeight={600}>
                        Hector Amed
                      </Typography>
                      <Box display="inline-flex" alignItems={'baseline'} mt={1}>
                        <Typography
                          variant="body1"
                          fontSize={14}
                          alignItems={'center'}
                          fontWeight={600}
                          sx={{ mr: 0.6, position: 'relative', top: '-4px' }}
                        >
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
                        </Box>
                      </Box>
                      <Box display={'flex'} mt={1}>
                        <Box display={'flex'} mr={2}>
                          <HowToRegOutlinedIcon />
                          <Typography
                            variant="body2"
                            fontSize={12}
                            fontWeight={500}
                            color="GrayText"
                            sx={{ position: 'relative', top: '1px' }}
                          >
                            1,342 students taught
                          </Typography>
                        </Box>
                        <Box display={'flex'}>
                          <ReviewsOutlinedIcon />
                          <Typography
                            variant="body2"
                            fontSize={12}
                            fontWeight={500}
                            color="GrayText"
                            sx={{ position: 'relative', top: '1px' }}
                          >
                            98 reviews
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        <Grid container mb={3} mt={3} columnGap={2}>
          <Grid item xs={12} sm={12} md={6} display={'flex'}>
            <Grid item xs={12} display={'flex'} justifyContent={'flex-start'}>
              <Typography variant="h3" fontWeight="bold">
                Sudent’s Feedback
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} display={'flex'} mt={3}>
            <Card sx={{ display: 'flex' }} elevation={0}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <CardContent sx={{ padding: '0' }}>
                  <Box
                    sx={{
                      p: 1,
                    }}
                  >
                    <Paper
                      sx={{
                        width: '150px',
                        height: '150px',
                        textAlign: 'center',
                        lineHeight: '60px',
                        borderRadius: '10px',
                        backgroundColor: '#EEF0F4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      elevation={4}
                    >
                      <Box>
                        <Typography variant="h2" fontWeight="bold">
                          4.4
                        </Typography>
                        <Rating
                          name="read-only"
                          readOnly
                          value={4}
                          precision={0.5}
                          sx={{ color: '#FDC500', mt: 0.5 }}
                        />
                        <Typography variant="body1" mt={1}>
                          8 rating
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto', padding: '0' }}>
                  <Stack
                    direction={'column'}
                    sx={{ position: 'relative', top: '10px', width: '240px' }}
                  >
                    <Box display="inline-flex" width={'100%'} alignItems={'baseline'} mt={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={5}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box width={'100%'} ml={1}>
                        <ProgressBar value={100} />
                      </Box>
                    </Box>
                    <Box display="inline-flex" alignItems={'baseline'} mt={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={4}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box width={'100%'} ml={1}>
                        <ProgressBar value={80} />
                      </Box>
                    </Box>
                    <Box display="inline-flex" alignItems={'baseline'} mt={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={3}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box width={'100%'} ml={1}>
                        <ProgressBar value={60} />
                      </Box>
                    </Box>
                    <Box display="inline-flex" alignItems={'baseline'} mt={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={2}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box width={'100%'} ml={1}>
                        <ProgressBar value={40} />
                      </Box>
                    </Box>
                    <Box display="inline-flex" alignItems={'baseline'} mt={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={1}
                        precision={0.5}
                        sx={{ color: '#FDC500' }}
                      />
                      <Box width={'100%'} ml={1}>
                        <ProgressBar value={20} />
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        <Grid container mb={3} mt={3} columnGap={2}>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'flex-start'}>
            <Typography variant="h3" fontWeight="bold">
              Reviews
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} display={'flex'} mt={2}>
            <Reviews />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;
