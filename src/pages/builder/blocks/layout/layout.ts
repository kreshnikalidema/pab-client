import { createHorizontalContainer } from 'libraries/power-apps/components/horizontal-container';
import { createVerticalContainer } from 'libraries/power-apps/components/vertical-container';
import { createContainer } from 'libraries/power-apps/components/container';

export function createLayout() {
  // Container
  const container = createHorizontalContainer('Layout_Container');

  container.setProperty('BorderStyle', 'BorderStyle.None');
  container.setProperty('DropShadow', 'DropShadow.None');
  container.setProperty('Height', 'Parent.Height');
  container.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
  container.setProperty('LayoutMode', 'LayoutMode.Auto');
  container.setProperty('RadiusBottomLeft', '0');
  container.setProperty('RadiusBottomRight', '0');
  container.setProperty('RadiusTopLeft', '0');
  container.setProperty('RadiusTopRight', '0');
  container.setProperty('Width', 'Parent.Width');

  // TO FIX
  container.setCssProperty('display', 'flex');
  container.setCssProperty('height', '100%');
  container.setCssProperty('flexDirection', 'row');

  // Sidebar
  const left = createContainer('Layout_Left');

  left.setProperty('AlignInContainer', 'AlignInContainer.SetByContainer');
  left.setProperty('BorderStyle', 'BorderStyle.None');
  left.setProperty('DropShadow', 'DropShadow.None');
  left.setProperty('FillPortions', '0');
  left.setProperty('RadiusBottomLeft', '0');
  left.setProperty('RadiusBottomRight', '0');
  left.setProperty('RadiusTopLeft', '0');
  left.setProperty('RadiusTopRight', '0');
  left.setProperty('Width', '150');

  // TO FIX
  left.setCssProperty('backgroundColor', 'red');
  left.setCssProperty('borderRadius', '0px');
  left.setCssProperty('color', 'white');
  left.setCssProperty('display', 'flex');
  left.setCssProperty('padding', '20px');
  left.setCssProperty('width', '300px');
  left.setCssProperty('flexDirection', 'column');

  // Content
  const body = createVerticalContainer('Layout_Body');

  body.setProperty('AlignInContainer', 'AlignInContainer.SetByContainer');
  body.setProperty('BorderStyle', 'BorderStyle.None');
  body.setProperty('DropShadow', 'DropShadow.None');
  body.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
  body.setProperty('LayoutGap', '10');
  body.setProperty('LayoutMode', 'LayoutMode.Auto');
  body.setProperty('PaddingBottom', '20');
  body.setProperty('PaddingLeft', '20');
  body.setProperty('PaddingRight', '20');
  body.setProperty('PaddingTop', '20');
  body.setProperty('RadiusBottomLeft', '0');
  body.setProperty('RadiusBottomRight', '0');
  body.setProperty('RadiusTopLeft', '0');
  body.setProperty('RadiusTopRight', '0');

  // TO FIX
  body.setCssProperty('backgroundColor', 'green');
  body.setCssProperty('borderRadius', '0px');
  body.setCssProperty('color', 'white');
  body.setCssProperty('display', 'flex');
  body.setCssProperty('flex', '1');
  body.setCssProperty('flexDirection', 'column');
  body.setCssProperty('padding', '20px');

  container.appendChild(left);
  // @ts-ignore
  container.appendChild(body);

  return container;
}
