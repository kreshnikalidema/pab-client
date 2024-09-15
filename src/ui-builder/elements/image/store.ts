import { Component } from '@/shared/store/component';
import { Image } from './image';
import * as Types from './types';

export function createImage(name: string) {
  return new Component<
    Types.Variables,
    Types.Properties,
    Types.Styles,
    Types.Metadata
  >({
    name: name,
    view: Image,
    control: 'Image',
  });
}
