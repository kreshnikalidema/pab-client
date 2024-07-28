import { Component } from './component';

interface ContainerProperties {
  AlignInContainer: string;
  BorderColor: string;
  BorderStyle: string;
  BorderThickness: string;
  ChildTabPriority: string;
  ContentLanguage: string;
  DropShadow: string;
  EnableChildFocus: string;
  Fill: string;
  FillPortions: string;
  Height: string;
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

export function createContainer(componentName: string) {
  return new Component<ContainerProperties>({
    componentName: componentName,
    control: 'GroupContainer',
    variant: 'manualLayoutContainer',
  });
}
