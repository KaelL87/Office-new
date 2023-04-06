/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import LinkButton from '../../UIElements/LinkButton/LinkButton';
import TooltipCard from '../TooltipCard/TooltipCard';
import { CardContainer, TextContainer } from './RightTooltip.styles';

const RightTooltip: React.FC<{ text?: string; buttonMessage?: any }> = ({
  text,
  buttonMessage,
}) => {
  return (
    <TooltipCard>
      <CardContainer>
        <TextContainer>{text}</TextContainer>
        <LinkButton fontSize="0.6rem" height="3rem" width="100%">
          {buttonMessage}
        </LinkButton>
      </CardContainer>
    </TooltipCard>
  );
};

export default RightTooltip;
