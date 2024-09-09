import { Component } from '@/shared/store/component';
import { Image } from './image';
import * as Types from './types';

export function createImage<
  V extends Types.Variables = Types.Variables,
  P extends Types.Properties = Types.Properties,
  S extends Types.Styles = Types.Styles,
  M extends Types.Metadata = Types.Metadata,
>(componentName: string) {
  const component = new Component<V, P, S, M>({
    name: componentName,
    view: Image,
    control: 'Image',
  });

  component.setVariable('size', 10);

  component.setStyle('color', '{{ Theme.size }}px');

  return component;
}
