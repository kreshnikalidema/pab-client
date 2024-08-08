import { createHorizontalContainer } from 'helpers/component';
import { createContainer } from 'helpers/component';

export function createLayout() {
  const component = createHorizontalContainer('Layout_Container');

  component.setComponentView('div')

  component.setProperty('DropShadow', 'DropShadow.None');
  component.setProperty('BorderStyle', 'BorderStyle.None');
  component.setProperty('DropShadow', 'DropShadow.None');
  component.setProperty('Height', 'Parent.Height');
  component.setProperty('LayoutAlignItems', 'LayoutAlignItems.Stretch');
  component.setProperty('LayoutMode', 'LayoutMode.Auto');
  component.setProperty('RadiusBottomLeft', '0');
  component.setProperty('RadiusBottomRight', '0');
  component.setProperty('RadiusTopLeft', '0');
  component.setProperty('RadiusTopRight', '0');
  component.setProperty('Width', 'Parent.Width');

  component.setStyle('display', 'flex');
  component.setStyle('height', '100%');
  component.setStyle('width', '100%');

  function createLayoutLeft() {
    const component = createContainer('Layout_Left');

    component.setComponentView('region')

    component.setProperty(
      'AlignInContainer',
      'AlignInContainer.SetByContainer'
    );
    component.setProperty('BorderStyle', 'BorderStyle.None');
    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty('FillPortions', '0');
    component.setProperty('RadiusBottomLeft', '0');
    component.setProperty('RadiusBottomRight', '0');
    component.setProperty('RadiusTopLeft', '0');
    component.setProperty('RadiusTopRight', '0');
    component.setProperty('Width', '150');

    component.setStyle('backgroundColor', 'white');
    component.setStyle('width', '150px');

    return component;
  }

  function createLayoutBody() {
    const component = createContainer('Layout_Body');

    component.setComponentView('region')

    component.setProperty(
      'AlignInContainer',
      'AlignInContainer.SetByContainer'
    );
    component.setProperty('BorderStyle', 'BorderStyle.None');
    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty('LayoutDirection', 'LayoutDirection.Vertical');
    component.setProperty('LayoutGap', '10');
    component.setProperty('LayoutMode', 'LayoutMode.Auto');
    component.setProperty('PaddingBottom', '20');
    component.setProperty('PaddingLeft', '20');
    component.setProperty('PaddingRight', '20');
    component.setProperty('PaddingTop', '20');
    component.setProperty('RadiusBottomLeft', '0');
    component.setProperty('RadiusBottomRight', '0');
    component.setProperty('RadiusTopLeft', '0');
    component.setProperty('RadiusTopRight', '0');

    component.setStyle('backgroundColor', 'white');
    component.setStyle('flexGrow', '1');

    return component;
  }

  component.appendChild(createLayoutLeft());
  component.appendChild(createLayoutBody());

  return component;
}
