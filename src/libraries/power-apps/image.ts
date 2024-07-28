import { Component } from './component';

interface ImageProperties {
  AccessibleLabel: string;
  AlignInContainer: string;
  ApplyEXIFOrientation: string;
  AutoDisableOnSelect: string;
  BorderColor: string;
  BorderStyle: string;
  BorderThickness: string;
  CalculateOriginalDimensions: string;
  ContentLanguage: string;
  DisabledBorderColor: string;
  DisabledFill: string;
  DisplayMode: string;
  Fill: string;
  FlipHorizontal: string;
  FlipVertical: string;
  FocusedBorderColor: string;
  FocusedBorderThickness: string;
  Height: string;
  HoverBorderColor: string;
  HoverFill: string;
  Image: string;
  ImagePosition: string;
  ImageRotation: string;
  LayoutMinWidth: string;
  OnSelect: string;
  PaddingBottom: string;
  PaddingLeft: string;
  PaddingRight: string;
  PaddingTop: string;
  PressedBorderColor: string;
  PressedFill: string;
  RadiusBottomLeft: string;
  RadiusBottomRight: string;
  RadiusTopLeft: string;
  RadiusTopRight: string;
  TabIndex: string;
  Tooltip: string;
  Transparency: string;
  Visible: string;
  Width: string;
  X: string;
  Y: string;
}

export function createImage(componentName: string) {
  const component = new Component<ImageProperties>({
    componentName: componentName,
    control: 'Image',
  });

  return component;
}
