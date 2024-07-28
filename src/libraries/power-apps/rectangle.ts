import { Component } from './component';

interface RectangleProperties {
  AccessibleLabel: string;
  BorderColor: string;
  BorderStyle: string;
  BorderThickness: string;
  ContentLanguage: string;
  DisabledFill: string;
  DisplayMode: string;
  Fill: string;
  FocusedBorderColor: string;
  FocusedBorderThickness: string;
  Height: string;
  HoverFill: string;
  OnSelect: string;
  PressedFill: string;
  TabIndex: string;
  Tooltip: string;
  Visible: string;
  Width: string;
  X: string;
  Y: string;
}

export function createRectangle(componentName: string) {
  return new Component<RectangleProperties>({
    componentName: componentName,
    control: 'Rectangle',
  });
}
