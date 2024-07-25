import { Component } from 'libraries/power-apps';
import { IHorizontalContainerProperties } from './types';

export function createManualContainer() {
  const component = new Component<IHorizontalContainerProperties>(
    'GroupContainer',
    'manualLayoutContainer'
  );

  component.setProperty('AlignInContainer', 'AlignInContainer.SetByContainer');

  return component;
}
