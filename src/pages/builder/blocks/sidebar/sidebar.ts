import { createVerticalContainer } from 'libraries/power-apps/components/vertical-container';
import { createLogo } from '../logo';
import { createProfileCard } from '../profile-card';
import { createMenu } from '../menu';

export function createSidebar() {
  const container = createVerticalContainer('Sidebar');

  container.setProperty('DropShadow', 'DropShadow.None');
  container.setProperty('Fill', 'RGBA(244,244,244,1)');
  container.setProperty('Height', 'Parent.Height');
  container.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
  container.setProperty('LayoutGap', '10');
  container.setProperty('LayoutMode', 'LayoutMode.Auto');
  container.setProperty('PaddingBottom', '20');
  container.setProperty('PaddingLeft', '10');
  container.setProperty('PaddingRight', '10');
  container.setProperty('PaddingTop', '20');
  container.setProperty('RadiusBottomLeft', '0');
  container.setProperty('RadiusBottomRight', '0');
  container.setProperty('RadiusTopLeft', '0');
  container.setProperty('RadiusTopRight', '0');
  container.setProperty('Width', 'Parent.Width');
  container.setProperty('X', '0');
  container.setProperty('Y', '0');

  container.setCssProperty('display', 'flex');
  container.setCssProperty('flexDirection', 'column');
  container.setCssProperty('height', '100%');

  // @ts-ignore
  container.appendChild(createLogo());

  // @ts-ignore
  container.appendChild(createMenu());
  // @ts-ignore
  container.appendChild(createProfileCard());

  return container;
}
