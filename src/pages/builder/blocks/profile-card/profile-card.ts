import { createHorizontalContainer } from 'libraries/power-apps/components/horizontal-container';
import { createManualContainer } from 'libraries/power-apps/components/manual-container';
import { createImage } from 'libraries/power-apps/components/image';
import { createLabel } from 'libraries/power-apps/components/label';

export function createProfileCard() {
  // Card
  const card = createHorizontalContainer('Profile_Card');
  card.setProperty('DropShadow', 'DropShadow.None');
  card.setProperty('FillPortions', '0');
  card.setProperty('Height', '40');
  card.setProperty('LayoutAlignItems', 'LayoutAlignItems.Center');
  card.setProperty('LayoutJustifyContent', 'LayoutJustifyContent.Center');
  card.setProperty('LayoutMinWidth', '40');
  card.setProperty('LayoutMode', 'LayoutMode.Auto');
  card.setProperty('PaddingLeft', '5');
  card.setProperty('PaddingRight', '5');
  card.setProperty('RadiusBottomLeft', '0');
  card.setProperty('RadiusBottomRight', '0');
  card.setProperty('RadiusTopLeft', '0');
  card.setProperty('RadiusTopRight', '0');

  card.setCssProperty('display', 'flex');
  card.setCssProperty('alignItems', 'center');

  // Avatar
  const avatar = createManualContainer('Profile_Avatar');
  avatar.setProperty('AlignInContainer', 'AlignInContainer.Center');
  avatar.setProperty('BorderColor', 'RGBA(115,131,176,1)');
  avatar.setProperty('BorderThickness', '2');
  avatar.setProperty('DropShadow', 'DropShadow.None');
  avatar.setProperty('FillPortions', '0');
  avatar.setProperty('Height', 'Self.Width');
  avatar.setProperty('RadiusBottomLeft', '35');
  avatar.setProperty('RadiusBottomRight', '35');
  avatar.setProperty('RadiusTopLeft', '35');
  avatar.setProperty('RadiusTopRight', '35');
  avatar.setProperty('Width', '35');

  avatar.setCssProperty('marginRight', '10px');

  // Image
  const image = createImage('Profile_Image');
  image.setProperty('Image', 'User().Image');
  image.setProperty('Height', 'Parent.Height');
  image.setProperty('Width', 'Parent.Width');

  image.setCssProperty('width', '35px');
  image.setCssProperty('height', '35px');
  image.setCssProperty('borderRadius', '50%');
  image.setCssProperty('objectFit', 'cover');

  avatar.appendChild(image);

  // Label
  const label = createLabel('Profile_Label');

  label.setProperty('Text', 'User().FullName');
  label.setProperty('AlignInContainer', 'AlignInContainer.Stretch');
  label.setProperty('Color', 'RGBA(37,52,100,1)');
  label.setProperty('FillPortions', '1');
  label.setProperty('Font', 'Font.Lato');
  label.setProperty('FontWeight', 'FontWeight.Semibold');
  label.setProperty('Height', 'Parent.Height');
  label.setProperty('LayoutMinHeight', '0');
  label.setProperty('LayoutMinWidth', '0');
  label.setProperty('PaddingRight', '0');
  label.setProperty('Size', '8');
  label.setProperty('Width', 'Parent.Width - Self.X');

  label.setCssProperty('fontSize', '8px');

  // @ts-ignore
  card.appendChild(avatar);
  // @ts-ignore
  card.appendChild(label);

  return card;
}
