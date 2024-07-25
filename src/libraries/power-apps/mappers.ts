import { CSSProperties } from 'react';
import { StyleMapper } from './types';

export const layoutJustifyContentMapper: {
  [key: string]: CSSProperties['justifyContent'];
} = {
  'LayoutJustifyContent.Start': 'flex-start',
  'LayoutJustifyContent.End': 'flex-end',
  'LayoutJustifyContent.Center': 'center',
  'LayoutJustifyContent.SpaceBetween': 'space-between',
  'LayoutJustifyContent.SpaceAround': 'space-around',
};

export const layoutAlignItemsMapper: {
  [key: string]: CSSProperties['alignItems'];
} = {
  'LayoutAlignItems.Start': 'flex-start',
  'LayoutAlignItems.Center': 'center',
  'LayoutAlignItems.End': 'flex-end',
  'LayoutAlignItems.Stretch': 'stretch',
};

export const layoutDirectionMapper: {
  [key: string]: CSSProperties['flexDirection'];
} = {
  'LayoutDirection.Horizontal': 'row',
  'LayoutDirection.Vertical': 'column',
};

export const dropShadowMapper: {
  [key: string]: CSSProperties['boxShadow'];
} = {
  'DropShadow.None': 'none',
  'DropShadow.Light': '1px 1px 3px rgba(0,0,0,0.1)',
  'DropShadow.SemiLight': '1px 1px 5px rgba(0,0,0,0.2)',
  'DropShadow.Regular': '2px 2px 6px rgba(0,0,0,0.3)',
  'DropShadow.SemiBold': '2px 2px 8px rgba(0,0,0,0.4)',
  'DropShadow.Bold': '3px 3px 10px rgba(0,0,0,0.5)',
  'DropShadow.ExtraBold': '4px 4px 12px rgba(0,0,0,0.6)',
};

export const layoutOverflowMapper: {
  [key: string]: CSSProperties['overflowX'] & CSSProperties['overflowY'];
} = {
  'LayoutOverflow.Hidden': 'hidden',
  'LayoutOverflow.Scroll': 'scroll',
};

export const layoutWrapMapper: {
  [key: string]: CSSProperties['flexWrap'];
} = {
  'LayoutWrap.Wrap': 'wrap',
  'LayoutWrap.NoWrap': 'nowrap',
};

export const styleMapper: StyleMapper<{}> = {
  BorderColor: (value: string) => ({
    borderColor: value,
  }),
  BorderStyle: (value: string) => ({
    borderStyle: value.toLowerCase(),
  }),
  BorderThickness: (value: number) => ({
    borderWidth: `${value}px`,
  }),
  DropShadow: (value: string) => ({
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
  LayoutAlignItems: (value: string) => ({
    alignItems: layoutAlignItemsMapper[value],
    display: 'flex',
  }),
  LayoutDirection: (value: string) => ({
    flexDirection: layoutDirectionMapper[value],
    display: 'flex',
  }),
  LayoutGap: (value: number) => ({
    gap: `${value}px`,
    display: 'flex',
  }),
  LayoutJustifyContent: (value: string) => ({
    justifyContent: layoutJustifyContentMapper[value],
    display: 'flex',
  }),
  LayoutOverflowX: (value: string) => ({
    overflowX: layoutOverflowMapper[value],
  }),
  LayoutOverflowY: (value: string) => ({
    overflowY: layoutOverflowMapper[value],
  }),
  LayoutWrap: (value: string) => ({
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
