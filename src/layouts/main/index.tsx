import React, { Suspense } from 'react';

import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import PageLoading from '@/components/page-loading';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';
import routes from '@/router';
import { ILayout, selectDisplayLayout, setDisplayLayout } from '@/store/slices/layoutSlice';
import { compareTwoObject } from '@/utils';

import Auth from '../Auth';

const Main: React.FC = () => {
  const layout: ILayout = useShallowEqualSelector(selectDisplayLayout);
  const dispatch = useDispatch();
  const location = useLocation();

  const updateDisplayLayout = (currentLayout: ILayout, layout: ILayout) => {
    const layoutUpdated = currentLayout
      ? {
          header: !!currentLayout.header,
          footer: !!currentLayout.footer,
          menu: !!currentLayout.menu,
          navigation: !!currentLayout.navigation,
          privacy: currentLayout.privacy,
        }
      : { header: true, footer: true, menu: true, navigation: false, privacy: 'public' };

    if (!compareTwoObject(layoutUpdated, layout)) {
      dispatch(setDisplayLayout(layoutUpdated));
    }
  };

  return (
    <Box
      width="100%"
      bgcolor={layout.privacy === 'protected' ? '#EEF0F4' : '#ffffff'}
      sx={
        layout.footer && !layout.header
          ? { transform: 'translateY(-50%)', position: 'absolute', top: '50%' }
          : layout.menu
          ? { padding: '10px 20px' }
          : {}
      }
    >
      <Suspense fallback={<PageLoading show />}>
        <Switch location={location}>
          {routes.map(
            ({
              component: Component,
              path,
              layout: currentLayout,
              ...rest
            }: {
              component: any;
              privacy: string;
              path: string;
              layout: object;
            }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  render={props => {
                    updateDisplayLayout(currentLayout, layout);
                    if (layout.privacy !== 'public') {
                      return (
                        <Auth>
                          <Component {...props} />
                        </Auth>
                      );
                    } else {
                      return <Component {...props} />;
                    }
                  }}
                  {...rest}
                />
              );
            },
          )}
        </Switch>
        <PageLoading />
      </Suspense>
    </Box>
  );
};

export default Main;
