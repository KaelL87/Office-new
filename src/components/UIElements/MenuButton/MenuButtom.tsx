/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { MenuButtonContainer } from './MenuButton.styles';

const MenuButtom: React.FC<{
  children?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  isActive?: boolean;
}> = ({ children, onMouseEnter, onMouseLeave, isActive = false }) => {
  const dammyHandler = () => {};

  return (
    <MenuButtonContainer
      isActive={isActive}
      onMouseEnter={onMouseEnter || dammyHandler}
      onMouseLeave={onMouseLeave || dammyHandler}
    >
      {children}
    </MenuButtonContainer>
  );
};

export default MenuButtom;
