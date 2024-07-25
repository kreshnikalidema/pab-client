import { Component } from 'libraries/power-apps';
import { IVerticalContainerProperties } from './types';

export function createVerticalContainer() {
  const component = new Component<IVerticalContainerProperties>(
    'GroupContainer',
    'verticalAutoLayoutContainer'
  );

  // component.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
  component.setProperty('LayoutMode', 'LayoutMode.Auto');

  return component;
}
