import { Component } from 'libraries/power-apps';
import { IContainerProperties } from './types';

export function createContainer(componentName: string) {
  return new Component<IContainerProperties>({
    componentName: componentName,
    control: 'GroupContainer',
    variant: 'manualLayoutContainer',
  });
}
