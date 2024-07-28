import { Component } from 'libraries/power-apps';
import { IButtonProperties } from './types';

export function createButton(componentName: string) {
  const component = new Component<IButtonProperties>({
    componentName: componentName,
    control: 'Classic/Button',
  });

  return component;
}
