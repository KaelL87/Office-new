/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { Fade, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

import MenuButtom from '../UIElements/MenuButton/MenuButtom';
import Categories from './Categories/Categories';

const LeftTooltipWithStyle = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    minWidth: 630,
    color: theme.palette.grey[900],
    borderRadius: 0,
    padding: 0,
  },
}));

/* const RightTooltipWithStyle = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    // minWidth: 250,
    color: theme.palette.grey[900],
    borderRadius: 0,
    padding: 0,
  },
})); */

const Navigation: React.FC = () => {
  return (
    <MenuButtom>
      <LeftTooltipWithStyle title={<Categories />} placement="bottom-start">
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
      </LeftTooltipWithStyle>
    </MenuButtom>
  );
};
export default Navigation;
