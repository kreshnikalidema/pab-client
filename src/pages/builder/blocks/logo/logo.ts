import { createImage } from 'libraries/power-apps/image';

export function createLogo() {
  const image = createImage('Logo');

  // @ts-ignore
  image.setVariable('logoHeight', '30')

  image.setProperty('AlignInContainer', 'AlignInContainer.Stretch');
  image.setProperty('Height', '30');
  image.setProperty('LayoutMinWidth', '0');
  image.setProperty('PaddingBottom', '0');
  image.setProperty('PaddingTop', '0');

  return image;
}
