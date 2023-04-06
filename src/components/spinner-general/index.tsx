import React from 'react';

export const Spinner: React.FC = () => {
  return (
    <div className="loading">
      <span className="loader" />
    </div>
  );
};

export const Spinner1: React.FC = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
