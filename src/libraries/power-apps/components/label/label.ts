import { Component } from 'libraries/power-apps';
import { ILabelProperties } from './types';

export function createLabel() {
  const component = new Component<ILabelProperties>();

  return component;
}
