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

enum DropShadow {
  None,
  Small,
  Medium,
  Large,
}

enum LayoutAlignItems {
  Center,
  Stretch,
  FlexStart,
  FlexEnd,
  Baseline,
}

enum LayoutJustifyContent {
  Start,
  End,
  Center,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly,
}

enum LayoutMode {
  Auto,
  Fixed,
  Stretch,
}

enum Font {
  LatoBlack,
  Arial,
  Helvetica,
  TimesNewRoman,
  Verdana,
}

enum FontWeight {
  Light,
  Regular,
  Semibold,
  Bold,
}

export function createContainer() {
  const component = new Component<any>({
    Fill: 'red',
    FillPortions: 1,
  });

  component.children = [];

  return component;
}

export enum LayoutDirection {
  ROW = 'row',
  COLUMN = 'column',
}

export function createContainer2() {
  const leftComponent = new Component({
    // DropShadow: DropShadow.None,
    LayoutAlignItems: LayoutAlignItems.Stretch,
    LayoutGap: 10,
    LayoutJustifyContent: LayoutJustifyContent.Start,
    LayoutMode: LayoutMode.Auto,
    RadiusBottomLeft: 0,
    RadiusBottomRight: 0,
    RadiusTopLeft: 0,
    RadiusTopRight: 0,
    FillPortions: 1,
    Fill: "blue",
  });

  const rightComponent = new Component({
    // DropShadow: DropShadow.None,
    LayoutAlignItems: LayoutAlignItems.Stretch,
    LayoutGap: 10,
    LayoutJustifyContent: LayoutJustifyContent.End,
    // LayoutMinHeight: 0,
    // LayoutMinWidth: 0,
    LayoutMode: LayoutMode.Auto,
    RadiusBottomLeft: 0,
    RadiusBottomRight: 0,
    RadiusTopLeft: 0,
    RadiusTopRight: 0,
    FillPortions: 1,
    Fill: "red",
  });

  const mainComponent = new Component<any>({
    // DropShadow: DropShadow.None,
    FillPortions: 1,
    // Height: 60,
    LayoutAlignItems: LayoutAlignItems.Center,
    // LayoutMinWidth: 0,
    LayoutMode: LayoutMode.Auto,
    RadiusBottomLeft: 0,
    RadiusBottomRight: 0,
    RadiusTopLeft: 0,
    RadiusTopRight: 0,
    Fill: "green",
  });

  mainComponent.children = [leftComponent, rightComponent];

  return mainComponent;
}
