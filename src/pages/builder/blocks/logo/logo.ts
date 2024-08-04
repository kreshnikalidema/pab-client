import { createImage } from 'libraries/power-apps/image';
import { LogoImage } from './logo-image';

interface LogoVariables {
  logoHeight: number;
  logoPaddingX: number;
  logoPaddingY: number;
}

export function createLogo() {
  const logo = createImage<LogoVariables>('Logo');

  logo.setVariable('logoHeight', 30);
  logo.setVariable('logoPaddingX', 0);
  logo.setVariable('logoPaddingY', 0);

  logo.setProperty('AlignInContainer', 'AlignInContainer.Stretch');
  logo.setProperty('Height', '30');
  logo.setProperty('LayoutMinWidth', '0');
  logo.setProperty('PaddingBottom', '0');
  logo.setProperty('PaddingTop', '0');

  logo.setComponentView('div');

  logo.setStyle('height', '30px');
  logo.setStyle('width', 'auto');
  logo.setStyle('alignSelf', 'center');

  return logo;
}
