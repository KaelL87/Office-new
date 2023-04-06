/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import MenuButtom from '../../UIElements/MenuButton/MenuButtom';
import { TextContainer } from './CategoriesPopularTopicItem.styles';

const CategoriesPopularTopicItem = ({ category }) => {
  return (
    <MenuButtom>
      <TextContainer>{category}</TextContainer>
    </MenuButtom>
  );
};

export default CategoriesPopularTopicItem;
