import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '@/helpers/ndex';
import { setAuthenticated } from '@/store/slices/authSlice';

const NotFound: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    localStorage.clear();
    dispatch(setAuthenticated(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="page_404">
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <Link className="button" to="/">
        <i className="icon-home"></i> Go back in initial page, is better.
      </Link>
    </section>
  );
};

export default NotFound;
