import { createContainer } from '../helpers/component';
import { createImage } from '../helpers/component';
import { createRectangle } from '../helpers/component';
import { createTextInput } from '../helpers/component';

export function createSearchbox() {
  const component = createContainer('Searchbox');

  component.setProperty('AlignInContainer', 'AlignInContainer.Center');
  component.setProperty('BorderColor', 'HighlightColor');
  component.setProperty('BorderThickness', '3');
  component.setProperty('DropShadow', 'DropShadow.None');
  component.setProperty('FillPortions', '0');
  component.setProperty('Height', '35');
  component.setProperty('LayoutMinHeight', '35');
  component.setProperty('LayoutMinWidth', '200');
  component.setProperty('RadiusBottomLeft', '10');
  component.setProperty('RadiusBottomRight', '10');
  component.setProperty('RadiusTopLeft', '10');
  component.setProperty('RadiusTopRight', '10');
  component.setProperty('Width', '250');
  component.setProperty('X', '40');
  component.setProperty('Y', '(Parent.Height - Self.Height)/2');

  component.setStyle('display', 'flex');
  component.setStyle('alignItems', 'center');
  component.setStyle('border', '1px solid rgba(32, 54, 71, 1)');
  component.setStyle('borderRadius', '4px');
  component.setStyle('padding', '5px');
  component.setStyle('backgroundColor', 'white');

  function createSearchboxImage() {
    const component = createImage('Searchbox_Image');

    component.setProperty('BorderColor', 'RGBA(32, 54, 71, 1)');
    component.setProperty('BorderStyle', 'BorderStyle.Solid');
    component.setProperty('BorderThickness', '0');
    component.setProperty('DisabledBorderColor', 'RGBA(166, 166, 166, 1)');
    component.setProperty('DisabledFill', 'RGBA(244, 244, 244, 1)');
    component.setProperty('FocusedBorderThickness', '2');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty(
      'HoverBorderColor',
      'ColorFade(Self.BorderColor, 20%)'
    );
    component.setProperty('HoverFill', 'ColorFade(Self.Fill, 20%)');
    component.setProperty('PaddingBottom', '10');
    component.setProperty('PaddingLeft', '5');
    component.setProperty('PaddingRight', '5');
    component.setProperty('PaddingTop', '10');
    component.setProperty(
      'PressedBorderColor',
      'ColorFade(Self.BorderColor, -20%)'
    );
    component.setProperty('PressedFill', 'ColorFade(Self.Fill, -20%)');
    component.setProperty('Width', '30');
    component.setProperty('X', '10');
    component.setProperty('Y', '(Parent.Height - Self.Height)/2');

    component.setStyle('width', '20px');
    component.setStyle('height', '20px');
    component.setStyle('marginRight', '10px');

    component.setMetadata('src', 'https://placehold.co/100x100');

    return component;
  }

  function createSearchboxRectangle() {
    const component = createRectangle('Searchbox_Rectangle');

    component.setProperty('BorderColor', 'RGBA(32, 54, 71, 1)');
    component.setProperty('BorderStyle', 'BorderStyle.Solid');
    component.setProperty('BorderThickness', '0');
    component.setProperty('DisabledFill', 'Self.Fill');
    component.setProperty('Fill', 'RGBA(116, 116, 116, 1)');
    component.setProperty('FocusedBorderThickness', '2');
    component.setProperty('Height', '1');
    component.setProperty('HoverFill', 'Self.Fill');
    component.setProperty('PressedFill', 'Self.Fill');
    component.setProperty('Visible', 'false');
    component.setProperty('Width', 'Parent.Width');
    component.setProperty('Y', 'Parent.Height - Self.Height');

    return component;
  }

  function createSearchboxTextInput() {
    const component = createTextInput('Searchbox_TextInput');

    component.setProperty('Default', '""');
    component.setProperty('HintText', '"Search..."');
    component.setProperty('BorderColor', 'RGBA(32, 54, 71, 1)');
    component.setProperty('BorderStyle', 'BorderStyle.None');
    component.setProperty('Color', 'PrimaryTextColor');
    component.setProperty('DisabledBorderColor', 'RGBA(166, 166, 166, 1)');
    component.setProperty('Fill', 'RGBA(0, 0, 0, 0)');
    component.setProperty('Font', "Font.'Open Sans'");
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('HoverBorderColor', 'RGBA(32, 54, 71, 1)');
    component.setProperty('HoverFill', 'RGBA(255, 255, 255, 0.1)');
    component.setProperty('PaddingLeft', '50');
    component.setProperty('PressedBorderColor', 'Self.HoverBorderColor');
    component.setProperty('PressedColor', 'Self.Color');
    component.setProperty('PressedFill', 'Self.Fill');
    component.setProperty('Size', '9');
    component.setProperty('Width', 'Parent.Width');
    component.setProperty('X', '0');
    component.setProperty('Y', '0');

    component.setStyle('border', 'none');
    component.setStyle('outline', 'none');
    component.setStyle('flex', '1');
    component.setStyle('padding', '5px');
    component.setStyle('fontSize', '16px');
    component.setStyle('color', '#203647');
    component.setStyle('backgroundColor', 'transparent');

    component.setMetadata('placeholder', 'Search...');

    return component;
  }

  component.appendChild(createSearchboxImage());
  component.appendChild(createSearchboxRectangle());
  component.appendChild(createSearchboxTextInput());

  return component;
}
