import { createHorizontalContainer } from '../helpers/component';
import { createContainer } from '../helpers/component';
import { createLabel } from '../helpers/component';

export function createHeader() {
  const component = createHorizontalContainer('Header');

  component.setProperty('DropShadow', 'DropShadow.None');
  component.setProperty('FillPortions', '0');
  component.setProperty('Height', '60');
  component.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
  component.setProperty('LayoutGap', '10');
  component.setProperty('LayoutMode', 'LayoutMode.Auto');
  component.setProperty('PaddingLeft', '10');
  component.setProperty('RadiusBottomLeft', '0');
  component.setProperty('RadiusBottomRight', '0');
  component.setProperty('RadiusTopLeft', '0');
  component.setProperty('RadiusTopRight', '0');

  component.setStyle('display', 'flex');
  component.setStyle('height', '60px');

  function createHeaderLabel() {
    const component = createLabel('HeaderLabel');

    component.setProperty('Text', 'Header Label');
    component.setProperty('Color', 'Color.Black');

    component.setStyle('fontSize', '12px');
    component.setStyle('color', '#333');
    component.setStyle('marginLeft', '10px');

    component.setMetadata('label', 'Header Title');

    return component;
  }

  function createHeaderLeft() {
    const component = createContainer('Header_Left');

    component.setProperty('FillPortions', '1');
    component.setProperty(
      'AlignInContainer',
      'AlignInContainer.SetByContainer'
    );
    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
    component.setProperty('LayoutGap', '10');
    component.setProperty('LayoutJustifyContent', 'LayoutJustifyContent.Start');
    component.setProperty('LayoutMinHeight', '0');
    component.setProperty('LayoutMinWidth', '100');
    component.setProperty('LayoutMode', 'LayoutMode.Auto');
    component.setProperty('PaddingRight', '5');
    component.setProperty('RadiusBottomLeft', '0');
    component.setProperty('RadiusBottomRight', '0');
    component.setProperty('RadiusTopLeft', '0');
    component.setProperty('RadiusTopRight', '0');

    component.setStyle('flex', '1');
    component.setStyle('display', 'flex');
    component.setStyle('alignItems', 'center');
    component.setStyle('padding', '0 20px');
    component.setStyle('justifyContent', 'flex-start');

    component.appendChild(createHeaderLabel());

    return component;
  }

  function createHeaderRight() {
    const component = createContainer('Header_Right');

    component.setProperty('FillPortions', '1');
    component.setProperty(
      'AlignInContainer',
      'AlignInContainer.SetByContainer'
    );
    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
    component.setProperty('LayoutGap', '10');
    component.setProperty('LayoutJustifyContent', 'LayoutJustifyContent.End');
    component.setProperty('LayoutMinHeight', '0');
    component.setProperty('LayoutMinWidth', '100');
    component.setProperty('LayoutMode', 'LayoutMode.Auto');
    component.setProperty('PaddingRight', '5');
    component.setProperty('RadiusBottomLeft', '0');
    component.setProperty('RadiusBottomRight', '0');
    component.setProperty('RadiusTopLeft', '0');
    component.setProperty('RadiusTopRight', '0');

    component.setStyle('flex', '1');
    component.setStyle('display', 'flex');
    component.setStyle('alignItems', 'center');
    component.setStyle('padding', '0 20px');
    component.setStyle('justifyContent', 'flex-end');

    return component;
  }

  component.appendChild(createHeaderLeft());
  component.appendChild(createHeaderRight());

  return component;
}
