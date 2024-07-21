import { makeAutoObservable } from 'mobx';
import { withSet, withToStyles } from '../utils';
import {
  LayoutDirection,
  LayoutJustify,
  LayoutAlignItems,
  LayoutOverflow,
  LayoutWrap,
} from '../types';

export class VerticalContainer {
  AccessibleLabel?: string;
  BorderColor?: string;
  BorderStyle?: string;
  BorderThickness?: number;
  Color?: string;
  DisplayMode?: string;
  DisabledBorderColor?: string;
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
  Children?: VerticalContainer[];

  constructor(options: Partial<VerticalContainer> = {}) {
    Object.assign(this, options);

    withSet(this);

    withToStyles(this);

    makeAutoObservable(this);
  }
}
