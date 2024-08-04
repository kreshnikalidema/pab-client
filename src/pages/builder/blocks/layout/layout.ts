import { createHorizontalContainer } from 'libraries/power-apps/horizontal-container';
import { createVerticalContainer } from 'libraries/power-apps/vertical-container';
import { createContainer } from 'libraries/power-apps/container';
import { LayoutContainer } from './layout-container';
import { LayoutLeft, LayoutLeftVariables } from './layout-left';
import { LayoutBody, LayoutBodyVariables } from './layout-body';

export function createLayout() {
  // Layout Container
  const layoutContainer = createHorizontalContainer('Layout_Container');
  layoutContainer.setProperty('BorderStyle', 'BorderStyle.None');
  layoutContainer.setProperty('DropShadow', 'DropShadow.None');
  layoutContainer.setProperty('Height', 'Parent.Height');
  layoutContainer.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
  layoutContainer.setProperty('LayoutMode', 'LayoutMode.Auto');
  layoutContainer.setProperty('RadiusBottomLeft', '0');
  layoutContainer.setProperty('RadiusBottomRight', '0');
  layoutContainer.setProperty('RadiusTopLeft', '0');
  layoutContainer.setProperty('RadiusTopRight', '0');
  layoutContainer.setProperty('Width', 'Parent.Width');
  layoutContainer.setComponentView('div');
  layoutContainer.setStyle('display', 'flex');
  layoutContainer.setStyle('height', '100%');
  layoutContainer.setStyle('width', '100%');

  // Layout Left
  const layoutLeft = createContainer<LayoutLeftVariables>('Layout_Left');
  layoutLeft.setVariable('layoutLeftWidth', 150);
  layoutLeft.setVariable('layoutLeftFill', 'RGBA(0, 0, 0, 1)');
  layoutLeft.setProperty('AlignInContainer', 'AlignInContainer.SetByContainer');
  layoutLeft.setProperty('BorderStyle', 'BorderStyle.None');
  layoutLeft.setProperty('DropShadow', 'DropShadow.None');
  layoutLeft.setProperty('FillPortions', '0');
  layoutLeft.setProperty('RadiusBottomLeft', '0');
  layoutLeft.setProperty('RadiusBottomRight', '0');
  layoutLeft.setProperty('RadiusTopLeft', '0');
  layoutLeft.setProperty('RadiusTopRight', '0');
  layoutLeft.setProperty('Width', '150');
  layoutLeft.setComponentView('div');
  layoutLeft.setStyle('backgroundColor', 'white');
  layoutLeft.setStyle('width', '150px');

  // Layout Body
  const layoutBody =
    createVerticalContainer<LayoutBodyVariables>('Layout_Body');
  layoutBody.setVariable('layoutBodyFill', 'RGBA(255, 255, 255, 1)');

  layoutBody.setProperty('AlignInContainer', 'AlignInContainer.SetByContainer');
  layoutBody.setProperty('BorderStyle', 'BorderStyle.None');
  layoutBody.setProperty('DropShadow', 'DropShadow.None');
  layoutBody.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
  layoutBody.setProperty('LayoutGap', '10');
  layoutBody.setProperty('LayoutMode', 'LayoutMode.Auto');
  layoutBody.setProperty('PaddingBottom', '20');
  layoutBody.setProperty('PaddingLeft', '20');
  layoutBody.setProperty('PaddingRight', '20');
  layoutBody.setProperty('PaddingTop', '20');
  layoutBody.setProperty('RadiusBottomLeft', '0');
  layoutBody.setProperty('RadiusBottomRight', '0');
  layoutBody.setProperty('RadiusTopLeft', '0');
  layoutBody.setProperty('RadiusTopRight', '0');
  layoutBody.setComponentView('div');
  layoutBody.setStyle('backgroundColor', 'white');
  layoutBody.setStyle('flexGrow', '1');

  layoutContainer.appendChild(layoutLeft);
  layoutContainer.appendChild(layoutBody);

  return layoutContainer;
}
