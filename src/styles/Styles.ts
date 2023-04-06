import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface StyledSystemProps
  extends PositionProps,
    SpaceProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    FlexboxProps,
    BackgroundProps,
    ShadowProps,
    TypographyProps,
    GridProps {
  inset?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  size?: string;
  marginRight?: string;
  margin?: string;
  position?: string;
  /**
   * fixing styled-system typing bug
   * (we can not use responsive color type )
   */
  color?: string;
}
