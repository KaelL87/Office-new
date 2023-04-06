/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@/helpers/ndex';
import { RootState } from '@/store';
import { setOpenMenu } from '@/store/slices/appSlice';
import { ILayout, selectDisplayLayout } from '@/store/slices/layoutSlice';

import LeftNav from './LeftNav';

const BurgerL: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openMenu } = useAppSelector((state: RootState) => state.app);
  const layout: ILayout = useAppSelector(selectDisplayLayout);
  const handleChange = () => {
    dispatch(setOpenMenu(!openMenu));
  };

  /* if (!layout.menu) {
    return null;
  } */

  return (
    <>
      {layout.menu ? (
        <Box component="div">
          <Box sx={{ width: { sm: '0px', md: '280px' } }}>
            {openMenu ? (
              <div role="button" className="back-drop" onClick={() => handleChange()} />
            ) : null}
            <LeftNav />
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default BurgerL;
