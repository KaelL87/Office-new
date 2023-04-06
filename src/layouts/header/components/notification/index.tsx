/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Box, Button, Divider, IconButton, Link, Stack } from '@mui/material';
import Menu from '@mui/material/Menu';

import useSafeState from '@/hooks/useSafeState';

const NotificationList: React.FC = () => {
  const [anchorEl, setAnchorEl] = useSafeState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={handleClick}
      >
        <Badge
          badgeContent={2}
          color="warning"
          sx={{
            '& .MuiBadge-badge': {
              right: 10,
              top: 10,
              padding: '0 4px',
              height: '14px',
              minWidth: '13px',
            },
          }}
        >
          <IconButton sx={{ color: 'black' }}>
            <NotificationsIcon fontSize="large" />
          </IconButton>
        </Badge>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ padding: 0, '.MuiMenu-list': { p: 0 } }}
        PaperProps={{
          elevation: 3,
          sx: {
            bgcolor: 'white',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 3,
            height: '350px',
            width: '350px',
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
        <Box height="85%">
          <Stack
            direction="column"
            width="100%"
            divider={<Divider orientation="horizontal" flexItem />}
            sx={{ maxHeight: '100%', overflow: 'auto' }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
              <Box width="100%" key={value} padding="20px 20px">
                <Box>Title</Box>
                <Box>Information</Box>
              </Box>
            ))}
          </Stack>
        </Box>
        <Divider orientation="horizontal" flexItem />
        <Box display="flex" height="15%" padding="5px" justifyContent="center" alignItems="center">
          <Button component={Link}>View All</Button>
        </Box>
      </Menu>
    </>
  );
};

export default NotificationList;
