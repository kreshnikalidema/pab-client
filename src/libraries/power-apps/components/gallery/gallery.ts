import { Component } from 'libraries/power-apps';
import { IGalleryProperties } from './types';

export function createGallery(componentName: string) {
  return new Component<IGalleryProperties>({
    componentName: componentName,
    control: 'Gallery',
    variant: 'variableTemplateHeightGallery',
  });
}
