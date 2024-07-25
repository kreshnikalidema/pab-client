import { CSSProperties } from 'react';

export type Properties<T> = {
  [K in keyof T]?: T[K];
};

export type StyleMapper<T> = {
  [K in keyof T]: (value: T[K]) => CSSProperties;
};

export enum BorderStyle {
  None = 'None',
  Solid = 'Solid',
  Dashed = 'Dashed',
  Dotted = 'Dotted',
}

export enum LayoutDirection {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}

export enum LayoutJustifyContent {
  Start = 'Start',
  End = 'End',
  Center = 'Center',
  SpaceBetween = 'Space Between',
  SpaceAround = 'Space Around',
}

export enum LayoutAlignItems {
  Start = 'Start',
  Center = 'Center',
  End = 'End',
  Stretch = 'Stretch',
}

export enum LayoutOverflow {
  Hidden = 'Hidden',
  Scroll = 'Scroll',
}

export enum LayoutWrap {
  Wrap = 'Wrap',
  NoWrap = 'NoWrap',
}

export enum DropShadow {
  None = 'None',
  Light = 'Light',
  SemiLight = 'SemiLight',
  Regular = 'Regular',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
  ExtraBold = 'ExtraBold',
}

export interface StyleProps {
  BorderColor: string;
  BorderStyle: BorderStyle;
  BorderThickness: number;
  ContentLanguage: string;
  DropShadow: DropShadow;
  EnableChildFocus: boolean;
  Fill: string;
  Height: number;
  LayoutAlignItems: LayoutAlignItems;
  LayoutDirection: LayoutDirection;
  LayoutGap: number;
  LayoutJustifyContent: LayoutJustifyContent;
  LayoutOverflowX: LayoutOverflow;
  LayoutOverflowY: LayoutOverflow;
  LayoutWrap: LayoutWrap;
  PaddingBottom: number;
  PaddingLeft: number;
  PaddingRight: number;
  PaddingTop: number;
  RadiusBottomLeft: number;
  RadiusBottomRight: number;
  RadiusTopLeft: number;
  RadiusTopRight: number;
  Visible: boolean;
  Width: number;
  X: number;
  Y: number;
  FillPortions: number;
}
