import React from 'react';

export enum LayoutDirection {
  ROW = 'row',
  COLUMN = 'column',
}

export enum LayoutJustify {
  FLEX_START = 'flex-start',
  CENTER = 'center',
  FLEX_END = 'flex-end',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
}

export enum LayoutAlignItems {
  FLEX_START = 'flex-start',
  CENTER = 'center',
  FLEX_END = 'flex-end',
  BASELINE = 'baseline',
  STRETCH = 'stretch',
}

export enum LayoutOverflow {
  VISIBLE = 'visible',
  HIDDEN = 'hidden',
  SCROLL = 'scroll',
  AUTO = 'auto',
}

export enum LayoutWrap {
  NOWRAP = 'nowrap',
  WRAP = 'wrap',
  WRAP_REVERSE = 'wrap-reverse',
}

export interface StyleProps {
  BorderColor?: string;
  BorderStyle?: string;
  BorderThickness?: number;
  Color?: string;
  Fill?: string;
  FocusedBorderColor?: string;
  Height?: number;
  PaddingBottom?: number;
  PaddingLeft?: number;
  PaddingRight?: number;
  PaddingTop?: number;
  PressedBorderColor?: string;
  PressedColor?: string;
  PressedFill?: string;
  Visible?: boolean;
  Width?: number;
  X?: number;
  Y?: number;
  LayoutDirection?: LayoutDirection;
  LayoutJustify?: LayoutJustify;
  LayoutAlignItems?: LayoutAlignItems;
  LayoutGap?: number;
  LayoutOverflowX?: LayoutOverflow;
  LayoutOverflowY?: LayoutOverflow;
  LayoutWrap?: LayoutWrap;
  LayoutMinHeight?: number;
  LayoutMinWidth?: number;
  LayoutMaxHeight?: number;
  LayoutMaxWidth?: number;
  FillPortions?: number;

  DropShadow?: string;
  RadiusTopLeft?: number;
  RadiusTopRight?: number;
  RadiusBottomLeft?: number;
  RadiusBottomRight?: number;
}

export type StyleMapper = {
  [K in keyof StyleProps]?: (value: StyleProps[K]) => React.CSSProperties;
};
