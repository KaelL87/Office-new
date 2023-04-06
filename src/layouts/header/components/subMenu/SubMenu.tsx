/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';

import useSafeState from '@/hooks/useSafeState';

const SubMenu: React.FC = () => {
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
        <AppsRoundedIcon sx={{ color: 'black', width: '30px', height: '30px' }} />
        <Typography
          variant="body1"
          fontSize={14}
          fontWeight={400}
          color="black"
          aria-controls={open ? 'categories-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{ userSelect: 'none' }}
        >
          Categories
        </Typography>
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
            width: '250px',
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
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
        <Stack
          direction="row"
          height="200px"
          width="600px"
          divider={<Divider orientation="horizontal" flexItem />}
        >
          {[1, 2, 3].map(value => (
            <Box width="100%" key={value} padding="10px 15px">
              {value}
            </Box>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export default SubMenu;
