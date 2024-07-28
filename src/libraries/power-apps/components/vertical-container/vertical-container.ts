import { Component } from 'libraries/power-apps';
import { IVerticalContainerProperties } from './types';

export function createVerticalContainer(componentName: string) {
  return new Component<IVerticalContainerProperties>({
    componentName: componentName,
    control: 'GroupContainer',
    variant: 'verticalAutoLayoutContainer',
  });
}
