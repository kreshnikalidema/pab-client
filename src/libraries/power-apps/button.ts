import { Component } from './component';

interface ButtonProperties {
  Align: string;
  AutoDisableOnSelect: string;
  BorderColor: string;
  BorderStyle: string;
  BorderThickness: string;
  Color: string;
  ContentLanguage: string;
  DisabledBorderColor: string;
  DisabledColor: string;
  DisabledFill: string;
  DisplayMode: string;
  Fill: string;
  FocusedBorderColor: string;
  FocusedBorderThickness: string;
  Font: string;
  FontWeight: string;
  Height: string;
  HoverBorderColor: string;
  HoverColor: string;
  HoverFill: string;
  Italic: string;
  OnSelect: string;
  PaddingBottom: string;
  PaddingLeft: string;
  PaddingRight: string;
  PaddingTop: string;
  PressedBorderColor: string;
  PressedColor: string;
  PressedFill: string;
  RadiusBottomLeft: string;
  RadiusBottomRight: string;
  RadiusTopLeft: string;
  RadiusTopRight: string;
  Size: string;
  Strikethrough: string;
  TabIndex: string;
  Text: string;
  Tooltip: string;
  Underline: string;
  VerticalAlign: string;
  Visible: string;
  Width: string;
  X: string;
  Y: string;
}

export function createButton(componentName: string) {
  const component = new Component<ButtonProperties>({
    componentName: componentName,
    control: 'Classic/Button',
  });

  return component;
}
