import { Component } from 'libraries/power-apps';
import { IImageProperties } from './types';

export function createImage(componentName: string) {
  const component = new Component<IImageProperties>({
    componentName: componentName,
    control: 'Image',
  });

  return component;
}
