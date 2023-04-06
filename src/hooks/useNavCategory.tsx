/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext } from 'react';

import { NavCategoryContext } from '@/context/navCategoryContext';

const useNavCategory = () => {
  const context = useContext(NavCategoryContext);
  if (context === undefined) {
    throw new Error('useNavCategory must be used within a NavCategoryProvider');
  }
  return context;
};
export default useNavCategory;
