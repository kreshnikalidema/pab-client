import { dropShadowMapper } from './drop-shadow-mapper';
import { layoutAlignItemsMapper } from './layout-align-items-mapper';
import { layoutDirectionMapper } from './layout-direction-mapper';
import { layoutJustifyContentMapper } from './layout-justify-content-mapper';
import { layoutOverflowMapper } from './overflow-mapper';
import { layoutWrapMapper } from './layout-wrap-mapper';
import {
  BorderStyle,
  DropShadow,
  LayoutAlignItems,
  LayoutDirection,
  LayoutJustifyContent,
  LayoutOverflow,
  LayoutWrap,
  StyleMapper,
} from '../types';

export const styleMapper: StyleMapper = {
  BorderColor: (value: string) => ({ borderColor: value }),
  BorderStyle: (value: BorderStyle) => ({ borderStyle: value.toLowerCase() }),
  BorderThickness: (value: number) => ({ borderWidth: `${value}px` }),
  DropShadow: (value: DropShadow) => ({ boxShadow: dropShadowMapper[value] }),
  Fill: (value: string) => ({ backgroundColor: value }),
  Height: (value: number) => ({ height: `${value}px` }),
  Width: (value: number) => ({ width: `${value}px` }),
  LayoutAlignItems: (value: LayoutAlignItems) => ({
    alignItems: layoutAlignItemsMapper[value],
    display: 'flex',
  }),
  LayoutDirection: (value: LayoutDirection) => ({
    flexDirection: layoutDirectionMapper[value],
    display: 'flex',
  }),
  LayoutGap: (value: number) => ({ gap: `${value}px`, display: 'flex' }),
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
  LayoutWrap: (value: LayoutWrap) => ({ flexWrap: layoutWrapMapper[value] }),
  PaddingBottom: (value: number) => ({ paddingBottom: `${value}px` }),
  PaddingLeft: (value: number) => ({ paddingLeft: `${value}px` }),
  PaddingRight: (value: number) => ({ paddingRight: `${value}px` }),
  PaddingTop: (value: number) => ({ paddingTop: `${value}px` }),
  RadiusBottomLeft: (value: number) => ({
    borderBottomLeftRadius: `${value}px`,
  }),
  RadiusBottomRight: (value: number) => ({
    borderBottomRightRadius: `${value}px`,
  }),
  RadiusTopLeft: (value: number) => ({ borderTopLeftRadius: `${value}px` }),
  RadiusTopRight: (value: number) => ({ borderTopRightRadius: `${value}px` }),
  Visible: (value: boolean) => ({ display: value ? 'block' : 'none' }),
  X: (value: number) => ({ left: `${value}px` }),
  Y: (value: number) => ({ top: `${value}px` }),
  ContentLanguage: (value: string) => ({}),
  EnableChildFocus: (value: boolean) => ({
    pointerEvents: value ? 'auto' : 'none',
  }),
};
