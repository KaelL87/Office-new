import React from 'react';

import { useTheme } from '@emotion/react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import logo from '@/assets/logo_text_blue.png';
import Navigation from '@/components/navigationBottom/navigation';
import SocialMedia from '@/components/socialMedia';
import { selectDisplayLayout } from '@/store/slices/layoutSlice';
import { shades } from '@/utils/theme';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { footer, privacy, header, navigation } = useSelector(selectDisplayLayout);
  const {
    palette: { neutral },
  } = useTheme() as any;
  if (!footer) {
    return null;
  }
  if (privacy === 'public' && footer && header) {
    return (
      <Box
        marginTop="60px"
        padding={{ xs: navigation ? '75px 0' : '20px 0', md: '20px 0' }}
        bgcolor={neutral.grayL}
      >
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          rowGap="30px"
          columnGap="clamp(20px, 30px, 40px)"
        >
          <Box>
            <Typography variant="h3" fontWeight="bold" mb="15px" color={shades.secondary[500]}>
              ROI Academy
            </Typography>
            <Typography mb="15px">Pricing</Typography>
            <Typography mb="15px">Updates</Typography>
            <Typography mb="15px">Beta</Typography>
            <Typography mb="15px">Newsletter</Typography>
            <Typography mb="15px">Collaborations</Typography>
          </Box>

          <Box>
            <Typography variant="h3" fontWeight="bold" mb="15px">
              Product
            </Typography>
            <Typography mb="15px">Business</Typography>
            <Typography mb="15px">Designers</Typography>
            <Typography mb="15px">Classrooms</Typography>
            <Typography mb="15px">Newcomers</Typography>
          </Box>
          <Box>
            <Typography variant="h3" fontWeight="bold" mb="15px">
              Learning
            </Typography>
            <Typography mb="15px">Learn Hub</Typography>
            <Typography mb="15px">Manuals</Typography>
            <Typography mb="15px">Tutorials</Typography>
            <Typography mb="15px">Communities</Typography>
          </Box>

          <Box>
            <Typography variant="h3" fontWeight="bold" mb="15px">
              Resources
            </Typography>
            <Typography mb="15px">Tutorials</Typography>
            <Typography mb="15px">Editorials</Typography>
            <Typography mb="15px">Product</Typography>
            <Typography mb="15px">Newsroom</Typography>
          </Box>
          <Box>
            <Typography variant="h3" fontWeight="bold" mb="15px">
              About
            </Typography>
            <Typography mb="15px">Company</Typography>
            <Typography mb="15px">Careers</Typography>
            <Typography mb="15px">Legal</Typography>
            <Typography mb="15px">Helps</Typography>
          </Box>
        </Box>
        <Box mt={1}>
          <Divider orientation="horizontal" flexItem sx={{ width: '80%', margin: '0 auto' }} />
        </Box>
        <Box mt={1} width="80%" margin="auto" display="flex" justifyContent="center">
          <Grid container>
            <Grid
              item
              xs={12}
              md={2}
              display="flex"
              justifyContent={{ xs: 'center', sm: 'center', md: 'flex-start' }}
            >
              <Box component="div" sx={{ display: { xs: 'none', sm: 'block' }, marginTop: '10px' }}>
                <img src={logo} width={200} height={60} />
              </Box>
            </Grid>
            <Grid item xs={12} md={8} display="flex" justifyContent="center" alignItems="center">
              <Box justifyContent="center">
                <Typography>© 2020 ROI Platform. All rights reserved.</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              display="flex"
              alignItems="center"
              container
              justifyContent="flex-end"
            >
              <SocialMedia />
            </Grid>
          </Grid>
        </Box>
        {navigation && (
          <Box sx={{ display: { sm: 'block', md: 'none' } }}>
            <Navigation />
          </Box>
        )}
      </Box>
    );
  }
  return (
    <footer id="footer">
      <h3>{t('footer.copy_right')}</h3>
    </footer>
  );
};

export default Footer;
