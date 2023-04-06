import React from 'react';

import styled from '@emotion/styled';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonIcon from '@mui/icons-material/Person';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import { Box, Divider, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { Link as NavLink, useLocation } from 'react-router-dom';

import logo from '@/assets/logo_text_blue.png';
import { useAppSelector } from '@/helpers/ndex';
import { RootState } from '@/store';

const Ul = styled.ul`
  list-style: none;
  width: -webkit-fill-available;
  min-width: 225px;
  max-width: 280px;
  background-color: white;
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: -8px 0px 54px -13px rgba(0, 0, 0, 0.25);
  border-right: 1px whitesmoke solid;
  position: fixed;
  z-index: 4;
  .nextui-avatar-bg {
    background: gray !important;
  }
  li {
    background: transparent;
    border-radius: 5px;
    width: 100%;
    max-width: 230px;
    height: 45px;
    margin: 10px auto;
    cursor: pointer;
    padding: 5px 10px;
    color: white;
    display: flex;
    justify-content: center;
    -webkit-transition: background-color 0.5s ease-in;
    -moz-transition: background-color 0.5s ease-in;
    -o-transition: background-color 0.5s ease-in;
    transition: background-color 0.5s ease-in;
    svg {
      width: 25px;
      height: 25px;
    }
    &:hover {
      background: #00296b;
      span {
        color: white !important;
      }
      svg {
        color: white !important;
      }
    }
  }
  .scroll {
    width: 100%;
    height: calc(100vh - 67px);
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 40px #1879f883;
      box-shadow: inset 0 0 40px #1879f883;
    }
    .activeli {
      background: #00509d;
      span {
        color: white !important;
      }
    }
  }
  @media (max-width: 960px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ defaultChecked }) => (defaultChecked ? 'translateX(0%)' : 'translateX(-110%)')};
    left: 0px;
    height: 100%;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const LeftNav: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { openMenu } = useAppSelector((state: RootState) => state.app);
  const navLinks = [
    {
      path: '/dashboard',
      name: t('sidebar.dashboard'),
      icon: <DashboardIcon fontSize="large" sx={{ color: '#00509d' }} />,
      icon1: <DashboardIcon fontSize="large" color="inherit" />,
    },
    {
      path: '/profile',
      name: 'Profile',
      icon: <PersonIcon fontSize="large" sx={{ color: '#00509d' }} />,
      icon1: <PersonIcon fontSize="large" color="inherit" />,
    },
    {
      path: '/enrolled',
      name: 'Enrolled Course',
      icon: <FaBook fontSize="large" color="#00509d" />,
      icon1: <FaBook fontSize="large" color="inherit" />,
    },
    {
      path: '/whislist',
      name: 'Whistlist',
      icon: <FavoriteIcon fontSize="large" sx={{ color: '#00509d' }} />,
      icon1: <FavoriteIcon fontSize="large" color="inherit" />,
    },
    {
      path: '/reviews',
      name: 'Reviews',
      icon: <ReviewsOutlinedIcon fontSize="large" sx={{ color: '#00509d' }} />,
      icon1: <ReviewsOutlinedIcon fontSize="large" color="inherit" />,
    },
    {
      path: '/pucharse',
      name: 'Pucharse History',
      icon: <BsFillCartCheckFill fontSize="large" color="#00509d" />,
      icon1: <BsFillCartCheckFill fontSize="large" color="inherit" />,
    },
    {
      path: '/learning',
      name: 'My Learning',
      icon: <ImportContactsIcon fontSize="large" sx={{ color: '#00509d' }} />,
      icon1: <ImportContactsIcon fontSize="large" color="inherit" />,
    },
  ];
  return (
    <Box sx={{ position: 'fixed', zIndex: 5 }}>
      <Paper>
        <Ul defaultChecked={openMenu}>
          <Box sx={{ padding: '2px 10px' }} display="flex" justifyContent="center">
            <Grid item xs={3}>
              <img src={logo} width={200} height={60} />
            </Grid>
          </Box>
          <Divider orientation="horizontal" flexItem sx={{ borderColor: 'whitesmoke' }} />
          <Box flexDirection="column" mt={3}>
            <Box className="scroll">
              {navLinks.map((x, i) => (
                <NavLink to={x.path} key={i}>
                  <li className={location.pathname.split(':')[0] === x.path ? 'activeli' : ''}>
                    <Grid container display={'flex'} alignItems="center" justifyContent="center">
                      <Grid item xs={3}>
                        {location.pathname.split(':')[0] === x.path ? x.icon1 : x.icon}
                      </Grid>
                      <Grid item xs={9}>
                        <span style={{ color: 'black', fontWeight: 600, fontSize: '14px' }}>
                          {x.name}
                        </span>
                      </Grid>
                    </Grid>
                  </li>
                </NavLink>
              ))}
            </Box>
          </Box>
        </Ul>
      </Paper>
    </Box>
  );
};

export default LeftNav;
