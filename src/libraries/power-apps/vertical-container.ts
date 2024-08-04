import { Component } from './component';

interface VerticalContainerProperties {
  AlignInContainer: string;
  BorderColor: string;
  BorderStyle: string;
  BorderThickness: string;
  ContentLanguage: string;
  DropShadow: string;
  EnableChildFocus: string;
  Fill: string;
  Height: string;
  LayoutAlignItems: string;
  LayoutDirection: string;
  LayoutGap: string;
  LayoutJustifyContent: string;
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

export function createVerticalContainer<P>(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'div',
    control: 'GroupContainer',
    variant: 'verticalAutoLayoutContainer',
  });
}
