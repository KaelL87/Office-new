import React, { useEffect } from 'react';

import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import useSafeState from '@/hooks/useSafeState';

const BreadCrumb: React.FC = () => {
  const location = useLocation();
  const [paths, setPaths] = useSafeState<string[]>([]);

  useEffect(() => {
    setPaths(location.pathname.split('/'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {paths.map(
          (item: string, index: number) =>
            index > 0 &&
            index < paths.length - 1 && (
              <Link underline="hover" color="inherit" href={`/${item}`} key={index}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ),
        )}

        <Typography color="text.primary">
          {paths.length > 0 ? paths[paths.length - 1].toUpperCase() : ''}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumb;
