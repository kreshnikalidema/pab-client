import { styled } from 'helpers/styled';

export interface SidebarContainerVariables {
  sidebarContainerFill: string;
}

export interface SidebarContainerProps {
  variables: SidebarContainerVariables;
}

// sidebarContainer.setProperty('DropShadow', 'DropShadow.None');
// sidebarContainer.setProperty('Fill', 'RGBA(244,244,244,1)');
// sidebarContainer.setProperty('Height', 'Parent.Height');
// sidebarContainer.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
// sidebarContainer.setProperty('LayoutGap', '10');
// sidebarContainer.setProperty('LayoutMode', 'LayoutMode.Auto');
// sidebarContainer.setProperty('PaddingBottom', '20');
// sidebarContainer.setProperty('PaddingLeft', '10');
// sidebarContainer.setProperty('PaddingRight', '10');
// sidebarContainer.setProperty('PaddingTop', '20');
// sidebarContainer.setProperty('RadiusBottomLeft', '0');
// sidebarContainer.setProperty('RadiusBottomRight', '0');
// sidebarContainer.setProperty('RadiusTopLeft', '0');
// sidebarContainer.setProperty('RadiusTopRight', '0');
// sidebarContainer.setProperty('Width', 'Parent.Width');
// sidebarContainer.setProperty('X', '0');
// sidebarContainer.setProperty('Y', '0');

export const SidebarContainer = styled.div<SidebarContainerProps>(() => ({
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  width: '100%',
  justifyContent: 'space-between',
}));
