import { Component } from './component';

interface TextInputProperties {
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

  AlignInContainer: string;
  LayoutMinHeight: string;
  Default: string;
  HintText: string;
  Color: string;
  DisabledBorderColor: string;
  Font: string;
  HoverBorderColor: string;
  HoverFill: string;
  PressedBorderColor: string;
  PressedColor: string;
  PressedFill: string;
  Size: string;
}

export function createTextInput<P>(componentName: string) {
  return new Component<TextInputProperties, P>({
    componentName: componentName,
    control: 'Classic/TextInput',
  });
}
