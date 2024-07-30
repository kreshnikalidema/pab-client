import { createHorizontalContainer } from 'libraries/power-apps/horizontal-container';
import { createContainer } from 'libraries/power-apps/container';
import { createImage } from 'libraries/power-apps/image';
import { createLabel } from 'libraries/power-apps/label';
import { ProfileContainer } from './profile-container';
import { ProfileAvatar } from './profile-avatar';
import { ProfileImage } from './profile-image';
import { ProfileLabel } from './profile-label';

export function createProfileCard() {
  // Profile Container
  const profileContainer = createHorizontalContainer('ProfileContainer');
  profileContainer.setProperty('DropShadow', 'DropShadow.None');
  profileContainer.setProperty('FillPortions', '0');
  profileContainer.setProperty('Height', '40');
  profileContainer.setProperty('LayoutAlignItems', 'LayoutAlignItems.Center');
  profileContainer.setProperty(
    'LayoutJustifyContent',
    'LayoutJustifyContent.Center'
  );
  profileContainer.setProperty('LayoutMinWidth', '40');
  profileContainer.setProperty('LayoutMode', 'LayoutMode.Auto');
  profileContainer.setProperty('PaddingLeft', '5');
  profileContainer.setProperty('PaddingRight', '5');
  profileContainer.setProperty('RadiusBottomLeft', '0');
  profileContainer.setProperty('RadiusBottomRight', '0');
  profileContainer.setProperty('RadiusTopLeft', '0');
  profileContainer.setProperty('RadiusTopRight', '0');
  profileContainer.setComponentView(ProfileContainer);

  // Profile Avatar
  const profileAvatar = createContainer('Profile_Avatar');
  profileAvatar.setProperty('AlignInContainer', 'AlignInContainer.Center');
  profileAvatar.setProperty('BorderColor', 'RGBA(115,131,176,1)');
  profileAvatar.setProperty('BorderThickness', '2');
  profileAvatar.setProperty('DropShadow', 'DropShadow.None');
  profileAvatar.setProperty('FillPortions', '0');
  profileAvatar.setProperty('Height', 'Self.Width');
  profileAvatar.setProperty('RadiusBottomLeft', '35');
  profileAvatar.setProperty('RadiusBottomRight', '35');
  profileAvatar.setProperty('RadiusTopLeft', '35');
  profileAvatar.setProperty('RadiusTopRight', '35');
  profileAvatar.setProperty('Width', '35');
  profileAvatar.setComponentView(ProfileAvatar);

  const profileImage = createImage('Profile_Image');
  profileImage.setProperty('Image', 'User().Image');
  profileImage.setProperty('Height', 'Parent.Height');
  profileImage.setProperty('Width', 'Parent.Width');
  profileImage.setComponentView(ProfileImage);
  profileAvatar.appendChild(profileImage);

  // Profile Label
  const profileLabel = createLabel('Profile_Label');
  profileLabel.setProperty('Text', 'User().FullName');
  profileLabel.setProperty('AlignInContainer', 'AlignInContainer.Stretch');
  profileLabel.setProperty('Color', 'RGBA(37,52,100,1)');
  profileLabel.setProperty('FillPortions', '1');
  profileLabel.setProperty('Font', 'Font.Lato');
  profileLabel.setProperty('FontWeight', 'FontWeight.Semibold');
  profileLabel.setProperty('Height', 'Parent.Height');
  profileLabel.setProperty('LayoutMinHeight', '0');
  profileLabel.setProperty('LayoutMinWidth', '0');
  profileLabel.setProperty('PaddingRight', '0');
  profileLabel.setProperty('Size', '8');
  profileLabel.setProperty('Width', 'Parent.Width - Self.X');
  profileLabel.setComponentView(ProfileLabel);

  profileContainer.appendChild(profileAvatar);
  profileContainer.appendChild(profileLabel);

  return profileContainer;
}
