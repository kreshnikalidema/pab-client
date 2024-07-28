import { Component } from 'libraries/power-apps';
import { IRectangleProperties } from './types';

export function createRectangle(componentName: string) {
  return new Component<IRectangleProperties>({
    componentName: componentName,
    control: 'Rectangle',
  });
}
