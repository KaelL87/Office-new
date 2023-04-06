/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { CardContainer } from './TooltipCard.styles';

const TooltipCard = ({ children, marginTop = '1.3rem', withoutPadding = false }) => {
  return (
    <CardContainer marginTop={marginTop} withoutPadding={withoutPadding}>
      {children}
    </CardContainer>
  );
};

export default TooltipCard;
