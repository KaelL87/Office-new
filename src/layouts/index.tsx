/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Box } from '@mui/material';

import { useAppSelector } from '@/helpers/ndex';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import useSafeState from '@/hooks/useSafeState';
import { RootState } from '@/store';
import { selectDisplayLayout } from '@/store/slices/layoutSlice';

import Footer from './footer';
import Header from './header';
import Main from './main';
import BurgerL from './nav/BurgerL';

const Layout: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const { privacy, menu } = useAppSelector(selectDisplayLayout);
  const [visible, setVisible] = useSafeState(false);
  const [visibleAf2a, setVisibleAf2a] = useSafeState(false);

  useDidMountEffect(() => {
    console.log('1');
  }, [isAuthenticated]);

  return (
    <>
      <Box
        sx={{ maxWidth: '100vw', padding: '0' }}
        display="flex"
        flexDirection={isAuthenticated && privacy === 'protected' ? 'row' : 'column'}
      >
        <BurgerL />
        <Box
          display="flex"
          flexDirection="column"
          width={'100%'}
          height={isAuthenticated && privacy === 'protected' ? '100vh' : 'initial'}
          sx={{ backgroundColor: menu ? '#EEF0F4' : 'white' }}
        >
          <Header
            visibleAf2a={visibleAf2a}
            setVisibleAf2a={setVisibleAf2a}
            visible={visible}
            setVisible={setVisible}
          />
          <Main />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
