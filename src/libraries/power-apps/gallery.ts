import { Component } from './component';

interface GalleryProperties {
  AccessibleLabel: string;
  BorderColor: string;
  BorderStyle: string;
  BorderThickness: string;
  ContentLanguage: string;
  Default: string;
  DelayItemLoading: string;
  DisplayMode: string;
  Fill: string;
  FocusedBorderColor: string;
  FocusedBorderThickness: string;
  Height: string;
  ItemAccessibleLabel: string;
  Items: string;
  Layout: string;
  LayoutMinHeight: string;
  LayoutMinWidth: string;
  LoadingSpinner: string;
  LoadingSpinnerColor: string;
  MaxTemplateSize: string;
  NavigationStep: string;
  OnSelect: string;
  Selectable: string;
  ShowNavigation: string;
  ShowScrollbar: string;
  TabIndex: string;
  TemplateFill: string;
  TemplatePadding: string;
  TemplateSize: string;
  Transition: string;
  Visible: string;
  Width: string;
  X: string;
  Y: string;
}

export function createGallery(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'div',
    control: 'Gallery',
    variant: 'variableTemplateHeightGallery',
  });
}
