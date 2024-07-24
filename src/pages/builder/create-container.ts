import { Component } from 'helpers/component';
import {
  BorderStyle,
  DropShadow,
  LayoutAlignItems,
  LayoutJustifyContent,
  LayoutOverflow,
  LayoutWrap,
} from 'helpers/component/types';

export interface IVerticalContainerProperties {
  BorderColor: string;
  BorderStyle: BorderStyle;
  BorderThickness: number;
  DropShadow: DropShadow;
  Fill: string;
  Height: number;
  Width: number;
  LayoutAlignItems: LayoutAlignItems;
  LayoutDirection: LayoutDirection;
  LayoutGap: number;
  LayoutJustifyContent: LayoutJustifyContent;
  LayoutOverflowX: LayoutOverflow;
  LayoutOverflowY: LayoutOverflow;
  LayoutWrap: LayoutWrap;
  PaddingBottom: number;
  PaddingLeft: number;
  PaddingRight: number;
  PaddingTop: number;
  RadiusBottomLeft: number;
  RadiusBottomRight: number;
  RadiusTopLeft: number;
  RadiusTopRight: number;
  Visible: boolean;
  X: number;
  Y: number;
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
  const leftComponent = new Component<IVerticalContainerProperties>({
    // DropShadow: DropShadow.None,
    LayoutAlignItems: LayoutAlignItems.Stretch,
    LayoutGap: 10,
    LayoutJustifyContent: LayoutJustifyContent.Start,
    RadiusBottomLeft: 0,
    RadiusBottomRight: 0,
    RadiusTopLeft: 0,
    RadiusTopRight: 0,
    // FillPortions: 1,
    Fill: 'blue',
  });

  const rightComponent = new Component({
    // DropShadow: DropShadow.None,
    LayoutAlignItems: LayoutAlignItems.Stretch,
    LayoutGap: 10,
    LayoutJustifyContent: LayoutJustifyContent.End,
    // LayoutMinHeight: 0,
    // LayoutMinWidth: 0,
    RadiusBottomLeft: 0,
    RadiusBottomRight: 0,
    RadiusTopLeft: 0,
    RadiusTopRight: 0,
    FillPortions: 1,
    Fill: 'red',
  });

  const mainComponent = new Component<any>({
    // DropShadow: DropShadow.None,
    FillPortions: 1,
    // Height: 60,
    LayoutAlignItems: LayoutAlignItems.Center,
    // LayoutMinWidth: 0,
    RadiusBottomLeft: 0,
    RadiusBottomRight: 0,
    RadiusTopLeft: 0,
    RadiusTopRight: 0,
    Fill: 'green',
  });

  mainComponent.children = [leftComponent, rightComponent];

  return mainComponent;
}

export function createContainer3() {
  // Column 1
  const titleComponent = new Component({
    Color: '#fff',
    FontSize: 24,
    Text: 'Title',
  });

  const columnComponent1 = new Component<any>({
    Padding: 10,
    FillPortions: 1,
  });

  columnComponent1.children.push(titleComponent);

  // Column 2
  //  const contentComponent = new Component({
  //   Color: '#fff',
  //   FontSize: 16,
  //   Text: 'More content...',
  // });

  const columnComponent2 = new Component<any>({
    LayoutJustifyContent: LayoutJustifyContent.End,
    LayoutAlignItems: LayoutAlignItems.Center,
    Padding: 10,
    FillPortions: 1,
  });

  columnComponent2.children.push();

  // Main
  const mainComponent = new Component({
    LayoutDirection: 'row',
    LayoutAlignItems: LayoutAlignItems.Center,
    Height: 60,
    PaddingTop: 10,
    PaddingBottom: 10,
    PaddingLeft: 10,
    PaddingRight: 10,
    BorderColor: '#ccc',
    BorderThickness: 1,
    BorderStyle: 'solid',
  });

  mainComponent.children.push(columnComponent1);
  mainComponent.children.push(columnComponent2);

  return mainComponent;
}

export function createContainer4() {
  const buttonComponent = new Component({
    Text: 'Click Me', // Assuming you want to include text as part of the properties
    Color: 'white', // Text color
    Fill: 'blue', // Background color
    FontSize: 16,
    Padding: 12,
    BorderColor: 'black',
    BorderThickness: 2,
    BorderStyle: 'solid',
    Cursor: 'pointer', // Typically, buttons have a pointer cursor
    Display: 'inline-flex', // Flex to center content, inline-flex to fit content
    AlignItems: 'center', // Center content vertically
    JustifyContent: 'center', // Center content horizontally
  });

  return buttonComponent;
}
