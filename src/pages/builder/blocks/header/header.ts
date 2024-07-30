import { createHorizontalContainer } from 'libraries/power-apps/horizontal-container';
import { createLabel } from 'libraries/power-apps/label';
import { HeaderContainer } from './header-container';
import { HeaderLeft } from './header-left';
import { HeaderLabel } from './header-label';
import { HeaderRight } from './header-right';

export function createHeader() {
  // Header Container
  const headerContainer = createHorizontalContainer('Header_Container');
  headerContainer.setProperty('DropShadow', 'DropShadow.None');
  headerContainer.setProperty('FillPortions', '0');
  headerContainer.setProperty('Height', '60');
  headerContainer.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
  headerContainer.setProperty('LayoutGap', '10');
  headerContainer.setProperty('LayoutMode', 'LayoutMode.Auto');
  headerContainer.setProperty('PaddingLeft', '10');
  headerContainer.setProperty('RadiusBottomLeft', '0');
  headerContainer.setProperty('RadiusBottomRight', '0');
  headerContainer.setProperty('RadiusTopLeft', '0');
  headerContainer.setProperty('RadiusTopRight', '0');

  headerContainer.setComponentView(HeaderContainer);

  // Header Left
  const headerLeft = createHorizontalContainer('Header_Left');
  headerLeft.setProperty('FillPortions', '1');
  headerLeft.setProperty('AlignInContainer', 'AlignInContainer.SetByContainer');
  headerLeft.setProperty('DropShadow', 'DropShadow.None');
  headerLeft.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
  headerLeft.setProperty('LayoutGap', '10');
  headerLeft.setProperty('LayoutJustifyContent', 'LayoutJustifyContent.Start');
  headerLeft.setProperty('LayoutMinHeight', '0');
  headerLeft.setProperty('LayoutMinWidth', '100');
  headerLeft.setProperty('LayoutMode', 'LayoutMode.Auto');
  headerLeft.setProperty('PaddingRight', '5');
  headerLeft.setProperty('RadiusBottomLeft', '0');
  headerLeft.setProperty('RadiusBottomRight', '0');
  headerLeft.setProperty('RadiusTopLeft', '0');
  headerLeft.setProperty('RadiusTopRight', '0');
  headerLeft.setComponentView(HeaderLeft);

  const headerLabel = createLabel('HeaderLabel');
  headerLabel.setProperty('Text', '"Header Label"');
  headerLabel.setProperty('Color', 'Color.Black');
  headerLabel.setComponentView(HeaderLabel);

  headerLeft.prependChild(headerLabel);

  // Header Right
  const headerRight = createHorizontalContainer('Header_Right');
  headerRight.setProperty('FillPortions', '1');
  headerRight.setProperty(
    'AlignInContainer',
    'AlignInContainer.SetByContainer'
  );
  headerRight.setProperty('DropShadow', 'DropShadow.None');
  headerRight.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
  headerRight.setProperty('LayoutGap', '10');
  headerRight.setProperty('LayoutJustifyContent', 'LayoutJustifyContent.End');
  headerRight.setProperty('LayoutMinHeight', '0');
  headerRight.setProperty('LayoutMinWidth', '100');
  headerRight.setProperty('LayoutMode', 'LayoutMode.Auto');
  headerRight.setProperty('PaddingRight', '5');
  headerRight.setProperty('RadiusBottomLeft', '0');
  headerRight.setProperty('RadiusBottomRight', '0');
  headerRight.setProperty('RadiusTopLeft', '0');
  headerRight.setProperty('RadiusTopRight', '0');
  headerRight.setComponentView(HeaderRight);

  headerContainer.appendChild(headerLeft);
  headerContainer.appendChild(headerRight);

  return headerContainer;
}
