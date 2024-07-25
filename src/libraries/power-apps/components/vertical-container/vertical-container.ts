import { Component } from 'libraries/power-apps';
import { LayoutDirection } from 'libraries/power-apps';
import { IVerticalContainerProperties } from './types';

export function createVerticalContainer() {
  const component = new Component<IVerticalContainerProperties>();

  component.setProperty('LayoutDirection', LayoutDirection.Vertical);

  return component;
}
