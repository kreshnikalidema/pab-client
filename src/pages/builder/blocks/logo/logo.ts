import { createImage } from 'libraries/power-apps/components/image';

export function createLogo() {
  const image = createImage('Logo');

  image.setProperty('AlignInContainer', 'AlignInContainer.Stretch');
  image.setProperty('Height', '30');
  image.setProperty('LayoutMinWidth', '0');
  image.setProperty('PaddingBottom', '0');
  image.setProperty('PaddingTop', '0');

  image.setCssProperty('maxWidth', '30px');
  image.setCssProperty('maxHeight', '30px');
  image.setCssProperty('width', '100%');
  image.setCssProperty('height', 'auto');
  image.setCssProperty('objectFit', 'contain');

  return image;
}
