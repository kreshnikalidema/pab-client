import { Component } from './component';

interface HorizontalContainerProperties {
  BorderColor: string;
  BorderStyle: string;
  BorderThickness: string;
  ContentLanguage: string;
  DropShadow: string;
  EnableChildFocus: string;
  Fill: string;
  FillPortions: string;
  Height: string;
  LayoutAlignItems: string;
  LayoutDirection: string;
  LayoutGap: string;
  LayoutJustifyContent: string;
  LayoutMinWidth: string;
  LayoutMode: string;
  LayoutOverflowX: string;
  LayoutOverflowY: string;
  LayoutWrap: string;
  PaddingBottom: string;
  PaddingLeft: string;
  PaddingRight: string;
  PaddingTop: string;
  RadiusBottomLeft: string;
  RadiusBottomRight: string;
  RadiusTopLeft: string;
  RadiusTopRight: string;
  Visible: string;
  Width: string;
  X: string;
  Y: string;
}

export function createHorizontalContainer(componentName: string) {
  return new Component<HorizontalContainerProperties>({
    componentName: componentName,
    control: 'GroupContainer',
    variant: 'horizontalAutoLayoutContainer',
  });
}
