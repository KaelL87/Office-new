/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { categories } from '@/data/navigation/nav-categories';
import useNavCategory from '@/hooks/useNavCategory';

import CategoriesPopularTopicItem from '../CategoriesPopularTopicItem/CategoriesPopularTopicItem';
import CategoryItem from '../CategoryItem/CategoryItem';
import TooltipCard from '../TooltipCard/TooltipCard';
import { MenuCard, MenuContainer, SubTitleContext } from './Categories.styles';

const Categories: React.FC = () => {
  const { state } = useNavCategory();
  const subCategoryList = state.subCategoryList;
  const subSubCategoryList = state.subSubCategoryList;
  return (
    <TooltipCard withoutPadding={true}>
      <MenuContainer>
        <MenuCard>
          {categories.map(category => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </MenuCard>
        {subCategoryList && (
          <MenuCard>
            {subCategoryList.map(subCategory => (
              <CategoryItem key={subCategory.id} category={subCategory} />
            ))}
          </MenuCard>
        )}
        {subSubCategoryList && (
          <MenuCard>
            <SubTitleContext>Popular topics</SubTitleContext>
            {subSubCategoryList.map(subSubCategory => (
              <CategoriesPopularTopicItem key={subSubCategory} category={subSubCategory} />
            ))}
          </MenuCard>
        )}
      </MenuContainer>
    </TooltipCard>
  );
};

export default Categories;
