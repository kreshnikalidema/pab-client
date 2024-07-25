import { CSSProperties } from 'react';
import {
  BorderStyle,
  DropShadow,
  LayoutAlignItems,
  LayoutDirection,
  LayoutJustifyContent,
  LayoutOverflow,
  LayoutWrap,
  StyleMapper,
} from './types';

// Drop Shadow Mapper
const dropShadowMapper: {
  [key in DropShadow]: CSSProperties['boxShadow'];
} = {
  [DropShadow.None]: 'none',
  [DropShadow.Light]: '1px 1px 3px rgba(0,0,0,0.1)',
  [DropShadow.SemiLight]: '1px 1px 5px rgba(0,0,0,0.2)',
  [DropShadow.Regular]: '2px 2px 6px rgba(0,0,0,0.3)',
  [DropShadow.SemiBold]: '2px 2px 8px rgba(0,0,0,0.4)',
  [DropShadow.Bold]: '3px 3px 10px rgba(0,0,0,0.5)',
  [DropShadow.ExtraBold]: '4px 4px 12px rgba(0,0,0,0.6)',
};

// Layout Align Items Mapper
const layoutAlignItemsMapper: {
  [key in LayoutAlignItems]: CSSProperties['alignItems'];
} = {
  [LayoutAlignItems.Start]: 'flex-start',
  [LayoutAlignItems.Center]: 'center',
  [LayoutAlignItems.End]: 'flex-end',
  [LayoutAlignItems.Stretch]: 'stretch',
};

// Layout Direction Mapper
export const layoutDirectionMapper: {
  [key in LayoutDirection]: CSSProperties['flexDirection'];
} = {
  [LayoutDirection.Horizontal]: 'row',
  [LayoutDirection.Vertical]: 'column',
};

// Layout Justify Content Mapper
export const layoutJustifyContentMapper: {
  [key in LayoutJustifyContent]: CSSProperties['justifyContent'];
} = {
  [LayoutJustifyContent.Start]: 'flex-start',
  [LayoutJustifyContent.End]: 'flex-end',
  [LayoutJustifyContent.Center]: 'center',
  [LayoutJustifyContent.SpaceBetween]: 'space-between',
  [LayoutJustifyContent.SpaceAround]: 'space-around',
};

// Layout Overflow Mapper
export const layoutOverflowMapper: {
  [key in LayoutOverflow]: CSSProperties['overflowX'] &
    CSSProperties['overflowY'];
} = {
  [LayoutOverflow.Hidden]: 'hidden',
  [LayoutOverflow.Scroll]: 'scroll',
};

// Layout Wrap Mapper
export const layoutWrapMapper: {
  [key in LayoutWrap]: CSSProperties['flexWrap'];
} = {
  [LayoutWrap.Wrap]: 'wrap',
  [LayoutWrap.NoWrap]: 'nowrap',
};

// Style Mapper
export const styleMapper: StyleMapper<{}> = {
  BorderColor: (value: string) => ({
    borderColor: value,
  }),
  BorderStyle: (value: BorderStyle) => ({
    borderStyle: value.toLowerCase(),
  }),
  BorderThickness: (value: number) => ({
    borderWidth: `${value}px`,
  }),
  DropShadow: (value: DropShadow) => ({
    boxShadow: dropShadowMapper[value],
  }),
  Fill: (value: string) => ({
    backgroundColor: value,
  }),
  Height: (value: number) => ({
    height: `${value}px`,
  }),
  Width: (value: number) => ({
    width: `${value}px`,
  }),
  LayoutAlignItems: (value: LayoutAlignItems) => ({
    alignItems: layoutAlignItemsMapper[value],
    display: 'flex',
  }),
  LayoutDirection: (value: LayoutDirection) => ({
    flexDirection: layoutDirectionMapper[value],
    display: 'flex',
  }),
  LayoutGap: (value: number) => ({
    gap: `${value}px`,
    display: 'flex',
  }),
  LayoutJustifyContent: (value: LayoutJustifyContent) => ({
    justifyContent: layoutJustifyContentMapper[value],
    display: 'flex',
  }),
  LayoutOverflowX: (value: LayoutOverflow) => ({
    overflowX: layoutOverflowMapper[value],
  }),
  LayoutOverflowY: (value: LayoutOverflow) => ({
    overflowY: layoutOverflowMapper[value],
  }),
  LayoutWrap: (value: LayoutWrap) => ({
    flexWrap: layoutWrapMapper[value],
  }),
  PaddingBottom: (value: number) => ({
    paddingBottom: `${value}px`,
  }),
  PaddingLeft: (value: number) => ({
    paddingLeft: `${value}px`,
  }),
  PaddingRight: (value: number) => ({
    paddingRight: `${value}px`,
  }),
  PaddingTop: (value: number) => ({
    paddingTop: `${value}px`,
  }),
  RadiusBottomLeft: (value: number) => ({
    borderBottomLeftRadius: `${value}px`,
  }),
  RadiusBottomRight: (value: number) => ({
    borderBottomRightRadius: `${value}px`,
  }),
  RadiusTopLeft: (value: number) => ({
    borderTopLeftRadius: `${value}px`,
  }),
  RadiusTopRight: (value: number) => ({
    borderTopRightRadius: `${value}px`,
  }),
  Visible: (value: boolean) => ({
    display: value ? 'block' : 'none',
  }),
  EnableChildFocus: (value: boolean) => ({
    pointerEvents: value ? 'auto' : 'none',
  }),
  FillPortions: (value: number) => ({
    flex: value,
  }),
  Color: (value: string) => ({
    color: value,
  }),
  X: (value: number) => ({
    left: `${value}px`,
  }),
  Y: (value: number) => ({
    top: `${value}px`,
  }),
};
