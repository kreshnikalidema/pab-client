import { createContainer } from '../helpers/component';
import { createImage } from '../helpers/component';
import { createLabel } from '../helpers/component';

export function createProfile() {
  const component = createContainer('Profile');

  component.setComponentView('div');

  component.setProperty('DropShadow', 'DropShadow.None');
  component.setProperty('FillPortions', '0');
  component.setProperty('Height', '40');
  component.setProperty('LayoutAlignItems', 'LayoutAlignItems.Center');
  component.setProperty('LayoutJustifyContent', 'LayoutJustifyContent.Center');
  component.setProperty('LayoutMinWidth', '40');
  component.setProperty('LayoutMode', 'LayoutMode.Auto');
  component.setProperty('PaddingLeft', '5');
  component.setProperty('PaddingRight', '5');
  component.setProperty('RadiusBottomLeft', '0');
  component.setProperty('RadiusBottomRight', '0');
  component.setProperty('RadiusTopLeft', '0');
  component.setProperty('RadiusTopRight', '0');

  component.setStyle('display', 'flex');
  component.setStyle('alignItems', 'center');

  function createProfileImage() {
    const component = createImage('Profile_Image');

    component.setProperty('Image', 'User().Image');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('Width', 'Parent.Width');

    component.setStyle('width', '100%');
    component.setStyle('height', '100%');
    component.setStyle('borderRadius', '50%');

    component.setMetadata('src', 'https://i.pravatar.cc/300');

    return component;
  }

  function createProfileAvatar() {
    const component = createContainer('Profile_Avatar');

    component.setComponentView('div');

    component.setProperty('AlignInContainer', 'AlignInContainer.Center');
    component.setProperty('BorderColor', 'RGBA(115,131,176,1)');
    component.setProperty('BorderThickness', '2');
    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty('FillPortions', '0');
    component.setProperty('Height', 'Self.Width');
    component.setProperty('RadiusBottomLeft', '35');
    component.setProperty('RadiusBottomRight', '35');
    component.setProperty('RadiusTopLeft', '35');
    component.setProperty('RadiusTopRight', '35');
    component.setProperty('Width', '35');

    component.setStyle('width', '35px');
    component.setStyle('height', '35px');
    component.setStyle('border', '2px solid black');
    component.setStyle('borderRadius', '50%');
    component.setStyle('display', 'flex');
    component.setStyle('justifyContent', 'center');
    component.setStyle('alignItems', 'center');

    component.appendChild(createProfileImage());

    return component;
  }

  function createProfileLabel() {
    const component = createLabel('Profile_Label');

    component.setProperty('Text', 'User().FullName');
    component.setProperty('AlignInContainer', 'AlignInContainer.Stretch');
    component.setProperty('Color', 'RGBA(37,52,100,1)');
    component.setProperty('FillPortions', '1');
    component.setProperty('Font', 'Font.Lato');
    component.setProperty('FontWeight', 'FontWeight.Semibold');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('LayoutMinHeight', '0');
    component.setProperty('LayoutMinWidth', '0');
    component.setProperty('PaddingRight', '0');
    component.setProperty('Size', '8');
    component.setProperty('Width', 'Parent.Width - Self.X');

    component.setStyle('fontSize', '12px');
    component.setStyle('color', '#333');
    component.setStyle('marginLeft', '10px');

    component.setMetadata('label', 'John Doe');

    return component;
  }

  component.appendChild(createProfileAvatar());
  component.appendChild(createProfileLabel());

  return component;
}
