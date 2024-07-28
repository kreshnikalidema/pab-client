import { Component } from 'libraries/power-apps';
import { ILabelProperties } from './types';

export function createLabel(componentName: string) {
  const component = new Component<ILabelProperties>({
    componentName: componentName,
    control: 'Label',
  });

  return component;
}
