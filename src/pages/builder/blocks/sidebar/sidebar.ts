import { createVerticalContainer } from 'libraries/power-apps/vertical-container';
import { createLogo } from '../logo';
import { createProfileCard } from '../profile-card';
import {
  SidebarContainer,
  SidebarContainerVariables,
} from './sidebar-container';

export function createSidebar() {
  const sidebarContainer =
    createVerticalContainer<SidebarContainerVariables>('Sidebar_Container');
  sidebarContainer.setVariable(
    'sidebarContainerFill',
    'RGBA(244, 244, 244, 1)'
  );

  sidebarContainer.setProperty('DropShadow', 'DropShadow.None');
  sidebarContainer.setProperty('Fill', 'RGBA(244,244,244,1)');
  sidebarContainer.setProperty('Height', 'Parent.Height');
  sidebarContainer.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
  sidebarContainer.setProperty('LayoutGap', '10');
  sidebarContainer.setProperty(
    'LayoutJustifyContent',
    'LayoutJustifyContent.SpaceBetween'
  );
  sidebarContainer.setProperty('LayoutMode', 'LayoutMode.Auto');
  sidebarContainer.setProperty('PaddingBottom', '20');
  sidebarContainer.setProperty('PaddingLeft', '10');
  sidebarContainer.setProperty('PaddingRight', '10');
  sidebarContainer.setProperty('PaddingTop', '20');
  sidebarContainer.setProperty('RadiusBottomLeft', '0');
  sidebarContainer.setProperty('RadiusBottomRight', '0');
  sidebarContainer.setProperty('RadiusTopLeft', '0');
  sidebarContainer.setProperty('RadiusTopRight', '0');
  sidebarContainer.setProperty('Width', 'Parent.Width');
  sidebarContainer.setProperty('X', '0');
  sidebarContainer.setProperty('Y', '0');

  sidebarContainer.setComponentView(SidebarContainer);

  sidebarContainer.appendChild(createLogo());
  // container.appendChild(createMenu());
  sidebarContainer.appendChild(createProfileCard());

  return sidebarContainer;
}
