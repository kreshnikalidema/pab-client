import { CSSProperties } from 'react';

export type Properties<T> = {
  [K in keyof T]?: T[K];
};

export type StyleMapper<T> = {
  [K in keyof T]: (value: T[K]) => CSSProperties;
};

export interface StyleProps {
  BorderColor: string;
  BorderStyle: string;
  BorderThickness: number;
  ContentLanguage: string;
  DropShadow: string;
  EnableChildFocus: boolean;
  Fill: string;
  Height: number;
  LayoutAlignItems: string;
  LayoutDirection: string;
  LayoutGap: number;
  LayoutJustifyContent: string;
  LayoutOverflowX: string;
  LayoutOverflowY: string;
  LayoutWrap: string;
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
