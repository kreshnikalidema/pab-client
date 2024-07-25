import {
  BorderStyle,
  DropShadow,
  LayoutAlignItems,
  LayoutDirection,
  LayoutJustifyContent,
  LayoutOverflow,
  LayoutWrap,
} from 'libraries/power-apps';

export interface IHorizontalContainerProperties {
  BorderColor: string;
  BorderStyle: BorderStyle;
  BorderThickness: number;
  DropShadow: DropShadow;
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
