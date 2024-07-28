import { Component } from 'libraries/power-apps';
import { IManualContainerProperties } from './types';

export function createManualContainer(componentName: string) {
  return new Component<IManualContainerProperties>({
    componentName: componentName,
    control: 'GroupContainer',
    variant: 'manualLayoutContainer',
  });
}
