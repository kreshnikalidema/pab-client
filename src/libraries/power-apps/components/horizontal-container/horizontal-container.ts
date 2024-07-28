import { Component } from 'libraries/power-apps';
import { IHorizontalContainerProperties } from './types';

export function createHorizontalContainer(componentName: string) {
  return new Component<IHorizontalContainerProperties>({
    componentName: componentName,
    control: 'GroupContainer',
    variant: 'horizontalAutoLayoutContainer',
  });
}
