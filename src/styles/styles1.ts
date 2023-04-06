import styledSystemPropTypesOrg from '@styled-system/prop-types';
import { css } from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';
import { StyledSystemProps } from './Styles';

import { makeStyles } from '@mui/styles';

export const styledSystem = css`
  ${compose(flexbox, background, border, color, layout, position, shadow, space, typography, grid)}
`;

export const styledSystemPropTypes = {
  ...styledSystemPropTypesOrg.space,
  ...styledSystemPropTypesOrg.color,
  ...styledSystemPropTypesOrg.background,
  ...styledSystemPropTypesOrg.border,
  ...styledSystemPropTypesOrg.flexbox,
  ...styledSystemPropTypesOrg.grid,
  ...styledSystemPropTypesOrg.layout,
  ...styledSystemPropTypesOrg.position,
  ...styledSystemPropTypesOrg.shadow,
  ...styledSystemPropTypesOrg.typography,
};

/**
 * Separate the props of styles of the component native props
 */

interface StylesProps extends StyledSystemProps {
  className?: string;
}

type NoStylesProps<P> = Omit<P, keyof StylesProps>;

export const getStylesProps = <P = Record<string, unknown>>(
  allProps: P,
): [StylesProps, NoStylesProps<P>] => {
  return Object.entries(allProps || {}).reduce(
    (acc, [key, value]) => {
      const index = !!styledSystemPropTypes[key] || key === 'className' ? 0 : 1;

      acc[index] = {
        ...acc[index],
        [key]: value,
      };

      return acc;
    },
    [{}, {}],
  ) as [StylesProps, NoStylesProps<P>];
};

export const getFormDynamicWidth = (length = 0): string => {
  if (length < 5) {
    return '20rem';
  }

  if (length < 10) {
    return '35rem';
  }

  return '50rem';
};

export const disabledStyles = css`
  color: ${({ theme }) => theme.colors.dropdownDisabled};
  border-color: ${({ theme }) => theme.colors.dropdownDisabled};
  cursor: not-allowed;
`;

export const useGenericStyles = makeStyles({
  formItemToTable: {
    margin: '0px',
    '& [data-testid="ErrorMessage"]': {
      display: 'none',
    },
  },
});
