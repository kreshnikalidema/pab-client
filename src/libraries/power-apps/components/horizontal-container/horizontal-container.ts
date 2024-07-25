import { Component } from 'libraries/power-apps';
import { IHorizontalContainerProperties } from './types';

export function createHorizontalContainer() {
  const component = new Component<IHorizontalContainerProperties>(
    'GroupContainer',
    'horizontalAutoLayoutContainer'
  );

  // component.setProperty('LayoutDirection', 'LayoutDirection.Horizontal');
  component.setProperty('LayoutMode', 'LayoutMode.Auto');

  return component;
}