/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button, Divider, IconButton, InputBase, styled, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link as NavLink } from 'react-router-dom';

import logo from '@/assets/logo_text_blue.png';
import Navigation from '@/components/Navigation/Navigation';
import { useAppDispatch, useAppSelector } from '@/helpers/ndex';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import { useModalBetter } from '@/hooks/useModal';
import { RootState } from '@/store';
import { setOpenMenu } from '@/store/slices/appSlice';
import { isAuthenticated } from '@/store/slices/authSlice';
import { ILayout, selectDisplayLayout } from '@/store/slices/layoutSlice';

import AccountMenu from './components/accountMenu/AccountMenu';
import NotificationList from './components/notification';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'whitesmoke',
  '&:hover': {
    backgroundColor: 'whitesmoke',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: '0',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    backgroundColor: 'white',
    borderRadius: '5px',
    filter: 'drop-shadow(0 0 0.15rem lightgray)',
    color: 'black',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
}));

const Header: React.FC<{
  visible?: boolean;
  setVisible?: any;
  visibleAf2a: boolean;
  setVisibleAf2a: any;
}> = ({ visible, setVisible, visibleAf2a, setVisibleAf2a }) => {
  const dispatch = useAppDispatch();
  const layout: ILayout = useAppSelector(selectDisplayLayout);
  const { openMenu } = useAppSelector((state: RootState) => state.app);
  const isAuth: boolean = useAppSelector(isAuthenticated);
  const { pushModal, onIsOpen } = useModalBetter();
  const handleChange = () => {
    dispatch(setOpenMenu(!openMenu));
  };

  const handler = () => {
    pushModal('Login');
  };
  const handler1 = () => {
    pushModal('Register');
  };

  useDidMountEffect(() => {
    console.log(onIsOpen('Login'));
  }, [onIsOpen]);

  if (!layout.header) {
    return null;
  }
  return (
    <Box sx={{ height: '65px' }}>
      <AppBar
        position={!layout.menu ? 'fixed' : 'relative'}
        sx={{ backgroundColor: '#FFFFFF' }}
        elevation={!layout.menu ? 4 : 0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: 'black', display: { sm: 'block', md: 'none' } }}
            onClick={handleChange}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              display: !layout.menu ? 'flex' : 'none',
              maxWidth: '200px',
              maxHeight: '60px',
              margin: { xs: '0 auto', md: '0' },
            }}
          >
            <img src={logo} alt="" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: 'none', md: !layout.menu ? 'block' : 'none' },
              margin: '15px 25px',
              borderColor: '#00000099',
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: 'pointer', display: { xs: 'none', md: 'flex' } }}
            position="relative"
          >
            <AppsRoundedIcon sx={{ color: 'black', width: '30px', height: '30px' }} />
            <Navigation />
          </Box>
          <Box
            mr={2}
            width="100%"
            sx={{ display: { xs: 'none', md: !layout.menu ? 'block' : 'none' } }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    fill: 'black',
                    zIndex: 1,
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#00509D',
                    borderRadius: '5px',
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Box>
          <Box sx={{ display: !layout.menu ? 'block' : 'none' }}>
            <Badge
              badgeContent={2}
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  right: 5,
                  top: 5,
                  padding: '0 4px',
                  height: '14px',
                  minWidth: '13px',
                },
              }}
            >
              <NavLink to="/shopping">
                <IconButton sx={{ color: 'black' }}>
                  <AddShoppingCartIcon fontSize="large" />
                </IconButton>
              </NavLink>
            </Badge>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: 'none', md: !layout.menu ? 'block' : 'none' },
              margin: '15px 25px',
              borderColor: '#00000099',
            }}
          />
          {!isAuth ? (
            <>
              <Box
                sx={{ display: { xs: 'none', md: 'flex', marginRight: '15px', minWidth: '70px' } }}
              >
                <Button variant="outlined" sx={{ color: '#00509D' }} onClick={handler}>
                  LOG IN
                </Button>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                  variant="contained"
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
                  onClick={handler1}
                >
                  Register
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: { xs: 'none', sm: !layout.menu ? 'flex' : 'none' } }}>
                <Typography variant="body1" fontSize={14} fontWeight={400} color="black" noWrap>
                  My learning
                </Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: !layout.menu ? 'flex' : 'none' } }}>
                <IconButton sx={{ color: 'black' }}>
                  <FavoriteBorderIcon fontSize="large" />
                </IconButton>
              </Box>
              <Box sx={{ display: { sm: 'flex' } }}>
                <NotificationList />
              </Box>
              <Box sx={{ display: { sm: 'flex' } }}>
                <AccountMenu
                  visible={visible}
                  visibleAf2a={visibleAf2a}
                  setVisible={setVisible}
                  setVisibleAf2a={setVisibleAf2a}
                />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
