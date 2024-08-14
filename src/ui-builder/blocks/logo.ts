import { createImage } from '../helpers/component';

export function createLogo() {
  const component = createImage('Logo');

  component.setProperty('AlignInContainer', 'AlignInContainer.Stretch');
  component.setProperty('Height', '30');
  component.setProperty('LayoutMinWidth', '0');
  component.setProperty('PaddingBottom', '0');
  component.setProperty('PaddingTop', '0');

  component.setStyle('height', '30px');
  component.setStyle('width', 'auto');
  component.setStyle('alignSelf', 'center');

  component.setMetadata('src', 'https://placehold.co/300x100');

  return component;
}
