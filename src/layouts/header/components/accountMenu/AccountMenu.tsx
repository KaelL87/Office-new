import * as React from 'react';

import Logout from '@mui/icons-material/Logout';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/helpers/ndex';
import { goURL } from '@/helpers/router';
import { callSuccessToast } from '@/helpers/toast';
import useSafeState from '@/hooks/useSafeState';
import { logOut } from '@/store/slices/authSlice';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  const result = name.split(' ');
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: result.length > 1 ? `${result[0][0]}${result[1][0]}` : `${result[0][0]}`,
  };
}

const AccountMenu: React.FC<{
  visible?: boolean;
  setVisible?: any;
  visibleAf2a: boolean;
  setVisibleAf2a: any;
}> = ({ visible, setVisible, visibleAf2a, setVisibleAf2a }) => {
  const [anchorEl, setAnchorEl] = useSafeState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutSystem = () => {
    dispatch(logOut());
    goURL('/login');
  };
  const handler = () => {
    setVisible(!visible);
  };
  const handlerA2fa = () => {
    setVisibleAf2a(!visibleAf2a);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title={'prueba'}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} {...stringAvatar('Orlando Hernandez')} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            bgcolor: 'white',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'white',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handlerA2fa}>
          <ListItemIcon sx={{ color: 'initial' }}>{'✅'}</ListItemIcon>
          2FA
        </MenuItem>
        <MenuItem onClick={handler}>
          <ListItemIcon sx={{ color: 'initial' }}>{'✅'}</ListItemIcon>
          KYC
        </MenuItem>
        <MenuItem>
          <ListItemIcon sx={{ color: 'initial' }}>{'✅'}</ListItemIcon>
          <Link target="_blank" rel="noreferrer" underline="none" color="inherit" href={'#'}>
            {t('sidebar.telegram_bot')}
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigator.clipboard.writeText(
              `https://web.roimaster.academy/register?refid=${121254564}`,
            );
            callSuccessToast(t('sidebar.link_copied'));
          }}
        >
          <ListItemIcon>
            <ShareIcon fontSize="small" color="primary" />
          </ListItemIcon>
          {t('sidebar.referral_link')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={logoutSystem}>
          <ListItemIcon>
            <Logout fontSize="small" color="error" />
          </ListItemIcon>
          {t('sidebar.logout')}
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
