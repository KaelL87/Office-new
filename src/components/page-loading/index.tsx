import React from 'react';

import { useSelector } from 'react-redux';

import { stateApp } from '@/store/slices/appSlice';

import Spinner from '../spinner-general';

interface IProps {
  show?: boolean;
}

const PageLoading: React.FC<IProps> = ({ show }) => {
  const { loading } = useSelector(stateApp);
  const showLoading = typeof show === 'boolean' ? show : loading;

  return (
    <>
      {showLoading ? (
        <div className="page-loading" style={{ display: showLoading ? '' : 'none' }}>
          <div className="loading-content">
            <Spinner />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PageLoading;
