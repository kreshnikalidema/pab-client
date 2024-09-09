import { createVerticalContainer } from '../helpers/component';
import { createLogo } from './logo';
import { createMenu } from './menu';
import { createProfile } from './profile';

export function createSidebar() {
  const component = createVerticalContainer('Sidebar_Container');

  component.setProperty('DropShadow', 'DropShadow.None');
  component.setProperty('Fill', 'RGBA(244,244,244,1)');
  component.setProperty('Height', 'Parent.Height');
  component.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
  component.setProperty('LayoutGap', '10');
  component.setProperty(
    'LayoutJustifyContent',
    'LayoutJustifyContent.SpaceBetween'
  );
  component.setProperty('LayoutMode', 'LayoutMode.Auto');
  component.setProperty('PaddingBottom', '20');
  component.setProperty('PaddingLeft', '10');
  component.setProperty('PaddingRight', '10');
  component.setProperty('PaddingTop', '20');
  component.setProperty('RadiusBottomLeft', '0');
  component.setProperty('RadiusBottomRight', '0');
  component.setProperty('RadiusTopLeft', '0');
  component.setProperty('RadiusTopRight', '0');
  component.setProperty('Width', 'Parent.Width');
  component.setProperty('X', '0');
  component.setProperty('Y', '0');

  component.setStyle('alignItems', 'center');
  component.setStyle('backgroundColor', '#f0f0f0');
  component.setStyle('display', 'flex');
  component.setStyle('flexDirection', 'column');
  component.setStyle('height', '100%');
  component.setStyle('paddingBottom', '10px');
  component.setStyle('paddingLeft', '10px');
  component.setStyle('paddingRight', '10px');
  component.setStyle('paddingTop', '10px');
  component.setStyle('width', '100%');
  component.setStyle('justifyContent', 'space-between');

  component.appendChild(createLogo());
  component.appendChild(createMenu());
  component.appendChild(createProfile());

  return component;
}
