import React, { useEffect } from 'react';

import { Box } from '@mui/material';

import { useVerifyUserMutation } from '@/store/apis/authApiSlice';

import Jumbotron from './components/Jumbotron';
import Started from './components/started';
import ViewCourses from './components/viewCourses';
import ViewGuides from './components/viewGuides';
import Views from './components/views';

const Home: React.FC = () => {
  const [verifyUser] = useVerifyUserMutation();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const queryParams = new URLSearchParams(location.search);
      const singleValue = queryParams.get('verify');
      if (singleValue !== null) {
        verifyUser({ code: singleValue as string });
      }
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  return (
    <Box
      flexDirection="column"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Jumbotron />
      <Views />
      <ViewCourses />
      <ViewGuides />
      <Started />
    </Box>
  );
};

export default Home;
