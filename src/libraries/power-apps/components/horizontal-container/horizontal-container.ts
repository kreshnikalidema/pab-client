import { Component } from 'libraries/power-apps';
import { LayoutDirection } from 'libraries/power-apps';
import { IHorizontalContainerProperties } from './types';

export function createHorizontalContainer() {
  const component = new Component<IHorizontalContainerProperties>();

  component.setProperty('LayoutDirection', LayoutDirection.Horizontal);

  return component;
}
