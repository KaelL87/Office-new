import React, { useEffect } from 'react';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import useSafeState from '@/hooks/useSafeState';

const Navigation: React.FC = () => {
  const [value, setValue] = useSafeState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();
  const location = useLocation();
  const paths = [
    {
      path: '/dashboard',
      name: t('sidebar.dashboard'),
      icon: <DashboardIcon fontSize="medium" />,
    },
    {
      path: '/wallet',
      name: t('sidebar.internal_wallet'),
      icon: <WalletIcon fontSize="medium" />,
    },
    {
      path: '/walletrmai',
      name: t('sidebar.internal_wallet_rmai'),
      icon: <AccountBalanceWalletIcon fontSize="medium" />,
    },
    {
      path: '/staking',
      name: 'Staking',
      icon: <AutoAwesomeMotionIcon fontSize="medium" />,
    },
    {
      path: '/mywallets',
      name: 'My Wallets',
      icon: <AddCardIcon fontSize="medium" />,
    },
  ];

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      paths.map((data: any, index: number) => {
        if (data.path === location.pathname) setValue(index);
      });
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return (
    <Paper elevation={8}>
      <BottomNavigation
        value={value}
        sx={{
          bgcolor: '#f5f5f5',
          height: 'auto',
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          zIndex: 100,
        }}
        onChange={(_, value) => {
          setValue(value);
        }}
      >
        <Grid container padding="0 24px">
          <Grid
            item
            xs={2}
            sm={4}
            display={{ xs: 'none', sm: 'flex' }}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box maxWidth="100%">
              <Box>
                <Typography variant="body1" fontWeight="bold" noWrap>
                  Mastering <strong style={{ color: '#00509D' }}>Non Fungible Token</strong> (NFT)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  111
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={5} display="flex" justifyContent="flex-end" alignItems="center">
            <Box maxWidth="100%" columnGap={2}>
              <Box>
                <Typography variant="body1" fontWeight="bold" textAlign="end">
                  $199.00
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold" textAlign="end">
                  $111
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={10} sm={3}>
            <Box width="90%" margin="10px auto">
              <Button
                fullWidth
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  backgroundColor: '#00509D',
                  padding: '1em 2em',
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
                <Typography variant="body1" sx={{ color: 'white !important' }}>
                  Buy Now
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
