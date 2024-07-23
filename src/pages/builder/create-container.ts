import { Component } from 'helpers/component';

export interface IVerticalContainer {
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
  FillPortions?: number;
}

export function createContainer() {
  const component = new Component<IVerticalContainer>({
    Fill: 'red',
    FillPortions: 1,
  });

  return component;
}

export function createContainer2() {
  const component = new Component<IVerticalContainer>({
    Fill: 'red',
    FillPortions: 1,
  });

  component.children = [
    new Component<IVerticalContainer>({
      Fill: 'blue',
      FillPortions: 1,
    }),
    new Component<IVerticalContainer>({
      Fill: 'green',
      FillPortions: 1,
    }),
    new Component<IVerticalContainer>({
      Fill: 'pink',
      FillPortions: 1,
    }),
  ];

  return component
}
