import { createHorizontalContainer } from 'libraries/power-apps/components/horizontal-container';
import { createVerticalContainer } from 'libraries/power-apps/components/vertical-container';
import { createManualContainer } from 'libraries/power-apps/components/manual-container';

export function createLayout() {
  // Container
  const container = createHorizontalContainer();
  container.setNamespace('Layout_Container');
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

  // Sidebar
  const sidebar = createManualContainer();
  sidebar.setNamespace('Layout_Sidebar');
  sidebar.setProperty('BorderStyle', 'BorderStyle.None');
  sidebar.setProperty('DropShadow', 'DropShadow.None');
  sidebar.setProperty('Fill', 'Color.Red');
  sidebar.setProperty('FillPortions', '0');
  sidebar.setProperty('PaddingBottom', '20');
  sidebar.setProperty('PaddingLeft', '20');
  sidebar.setProperty('PaddingRight', '20');
  sidebar.setProperty('PaddingTop', '20');
  sidebar.setProperty('RadiusBottomLeft', '0');
  sidebar.setProperty('RadiusBottomRight', '0');
  sidebar.setProperty('RadiusTopLeft', '0');
  sidebar.setProperty('RadiusTopRight', '0');
  sidebar.setProperty('Width', '300');

  // Content
  const content = createVerticalContainer();
  content.setNamespace('Layout_Content');
  content.setProperty('AlignInContainer', 'AlignInContainer.SetByContainer');
  content.setProperty('BorderStyle', 'BorderStyle.None');
  content.setProperty('DropShadow', 'DropShadow.None');
  content.setProperty('Fill', 'Color.Green');
  content.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
  content.setProperty('LayoutGap', '10');
  content.setProperty('LayoutMode', 'LayoutMode.Auto');
  content.setProperty('PaddingBottom', '20');
  content.setProperty('PaddingLeft', '20');
  content.setProperty('PaddingRight', '20');
  content.setProperty('PaddingTop', '20');
  content.setProperty('RadiusBottomLeft', '0');
  content.setProperty('RadiusBottomRight', '0');
  content.setProperty('RadiusTopLeft', '0');
  content.setProperty('RadiusTopRight', '0');

  container.appendChild(sidebar);
  container.appendChild(content);

  return container;
}
