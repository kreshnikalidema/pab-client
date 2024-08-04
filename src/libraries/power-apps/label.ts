import { Component } from './component';

interface LabelProperties {
  Align: string;
  AlignInContainer: string;
  AutoHeight: string;
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
  FillPortions: string;
  FocusedBorderColor: string;
  FocusedBorderThickness: string;
  Font: string;
  FontWeight: string;
  Height: string;
  HoverBorderColor: string;
  HoverColor: string;
  HoverFill: string;
  Italic: string;
  LayoutMinHeight: string;
  LayoutMinWidth: string;
  LineHeight: string;
  Live: string;
  OnSelect: string;
  Overflow: string;
  PaddingBottom: string;
  PaddingLeft: string;
  PaddingRight: string;
  PaddingTop: string;
  PressedBorderColor: string;
  PressedColor: string;
  PressedFill: string;
  Role: string;
  Size: string;
  Strikethrough: string;
  TabIndex: string;
  Text: string;
  Tooltip: string;
  Underline: string;
  VerticalAlign: string;
  Visible: string;
  Width: string;
  Wrap: string;
  X: string;
  Y: string;
}

export function createLabel(componentName: string) {
  const component = new Component({
    componentName: componentName,
    componentView: 'div',
    control: 'Label',
  });

  return component;
}
