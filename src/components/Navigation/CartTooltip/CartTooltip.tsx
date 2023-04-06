/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import TooltipCard from '../TooltipCard/TooltipCard';
import { LinkContainer, TextContainer } from './CartTooltip.styles';

const CartTooltip: React.FC = () => {
  return (
    <TooltipCard marginTop="3rem">
      <TextContainer>Your cart is empty.</TextContainer>
      <LinkContainer>Keep shopping</LinkContainer>
    </TooltipCard>
  );
};

export default CartTooltip;
