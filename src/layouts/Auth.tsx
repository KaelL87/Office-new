import React, { useEffect } from 'react';

import { isExpired } from 'react-jwt';

import { getToken } from '@/helpers/local-storage';
import { useAppDispatch, useAppSelector } from '@/helpers/ndex';
import { goURL } from '@/helpers/router';
import useSafeState from '@/hooks/useSafeState';
import { isAuthenticated, logOut, setAuthenticated, setToken } from '@/store/slices/authSlice';
import { ILayout, selectDisplayLayout } from '@/store/slices/layoutSlice';

interface IProps {
  children: React.ReactElement;
}

const Auth: React.FC<IProps> = ({ children }) => {
  const [renderRoute, setRenderRoute] = useSafeState(false);
  const dispatch = useAppDispatch();
  const isAuth: boolean = useAppSelector(isAuthenticated);
  const layout: ILayout = useAppSelector(selectDisplayLayout);

  useEffect(() => {
    const token = getToken();
    const isExpiredToken = isExpired(token);
    dispatch(setAuthenticated(!isExpiredToken));
    if (isExpiredToken && !isAuth && layout.privacy === 'protected') {
      console.log(1);
      dispatch(logOut());
      goURL('/');
    } else if (isAuth || !isExpiredToken) {
      console.log(2);
      dispatch(setToken(token));
    } else {
      if (layout.privacy === 'protected') {
        console.log(3);
        goURL('/');
      }
    }
    setRenderRoute(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return renderRoute ? children : null;
};

export default Auth;
