import { createContainer } from 'libraries/power-apps/container';
import { createImage } from 'libraries/power-apps/image';
import { createTextInput } from 'libraries/power-apps/text-input';
import { createRectangle } from 'libraries/power-apps/rectangle';
import { SearchboxContainer } from './searchbox-container';
import { SearchboxImage } from './searchbox-image';
import { SearchboxRectangle } from './searchbox-rectangle';
import { SearchboxTextinput } from './searchbox-textinput';

export function createSearchbox() {
  // Searchbox Container
  const searchboxContainer = createContainer('Searchbox_Container');
  searchboxContainer.setProperty('AlignInContainer', 'AlignInContainer.Center');
  searchboxContainer.setProperty('BorderColor', 'HighlightColor');
  searchboxContainer.setProperty('BorderThickness', '3');
  searchboxContainer.setProperty('DropShadow', 'DropShadow.None');
  searchboxContainer.setProperty('FillPortions', '0');
  searchboxContainer.setProperty('Height', '35');
  searchboxContainer.setProperty('LayoutMinHeight', '35');
  searchboxContainer.setProperty('LayoutMinWidth', '200');
  searchboxContainer.setProperty('RadiusBottomLeft', '10');
  searchboxContainer.setProperty('RadiusBottomRight', '10');
  searchboxContainer.setProperty('RadiusTopLeft', '10');
  searchboxContainer.setProperty('RadiusTopRight', '10');
  searchboxContainer.setProperty('Width', '250');
  searchboxContainer.setProperty('X', '40');
  searchboxContainer.setProperty('Y', '(Parent.Height - Self.Height)/2');

  searchboxContainer.setComponentView(SearchboxContainer);

  // Searchbox Image
  const searchboxImage = createImage('Searchbox_Image');
  searchboxImage.setProperty('BorderColor', 'RGBA(32, 54, 71, 1)');
  searchboxImage.setProperty('BorderStyle', 'BorderStyle.Solid');
  searchboxImage.setProperty('BorderThickness', '0');
  searchboxImage.setProperty('DisabledBorderColor', 'RGBA(166, 166, 166, 1)');
  searchboxImage.setProperty('DisabledFill', 'RGBA(244, 244, 244, 1)');
  searchboxImage.setProperty('FocusedBorderThickness', '2');
  searchboxImage.setProperty('Height', 'Parent.Height');
  searchboxImage.setProperty(
    'HoverBorderColor',
    'ColorFade(Self.BorderColor, 20%)'
  );
  searchboxImage.setProperty('HoverFill', 'ColorFade(Self.Fill, 20%)');
  searchboxImage.setProperty('PaddingBottom', '10');
  searchboxImage.setProperty('PaddingLeft', '5');
  searchboxImage.setProperty('PaddingRight', '5');
  searchboxImage.setProperty('PaddingTop', '10');
  searchboxImage.setProperty(
    'PressedBorderColor',
    'ColorFade(Self.BorderColor, -20%)'
  );
  searchboxImage.setProperty('PressedFill', 'ColorFade(Self.Fill, -20%)');
  searchboxImage.setProperty('Width', '30');
  searchboxImage.setProperty('X', '10');
  searchboxImage.setProperty('Y', '(Parent.Height - Self.Height)/2');

  searchboxImage.setComponentView(SearchboxImage);

  // Searchbox Rectangle
  const searchboxRectangle = createRectangle('Searchbox_Rectangle');
  searchboxRectangle.setProperty('BorderColor', 'RGBA(32, 54, 71, 1)');
  searchboxRectangle.setProperty('BorderStyle', 'BorderStyle.Solid');
  searchboxRectangle.setProperty('BorderThickness', '0');
  searchboxRectangle.setProperty('DisabledFill', 'Self.Fill');
  searchboxRectangle.setProperty('Fill', 'RGBA(116, 116, 116, 1)');
  searchboxRectangle.setProperty('FocusedBorderThickness', '2');
  searchboxRectangle.setProperty('Height', '1');
  searchboxRectangle.setProperty('HoverFill', 'Self.Fill');
  searchboxRectangle.setProperty('PressedFill', 'Self.Fill');
  searchboxRectangle.setProperty('Visible', 'false');
  searchboxRectangle.setProperty('Width', 'Parent.Width');
  searchboxRectangle.setProperty('Y', 'Parent.Height - Self.Height');

  searchboxRectangle.setComponentView(SearchboxRectangle);

  // Searchbox TextInput
  const searchboxTextInput = createTextInput('Searchbox_TextInput');
  searchboxTextInput.setProperty('Default', '');
  searchboxTextInput.setProperty('HintText', '"Search..."');
  searchboxTextInput.setProperty('BorderColor', 'RGBA(32, 54, 71, 1)');
  searchboxTextInput.setProperty('BorderStyle', 'BorderStyle.None');
  searchboxTextInput.setProperty('Color', 'PrimaryTextColor');
  searchboxTextInput.setProperty(
    'DisabledBorderColor',
    'RGBA(166, 166, 166, 1)'
  );
  searchboxTextInput.setProperty('Fill', 'RGBA(0, 0, 0, 0)');
  searchboxTextInput.setProperty('Font', "Font.'Open Sans'");
  searchboxTextInput.setProperty('Height', 'Parent.Height');
  searchboxTextInput.setProperty('HoverBorderColor', 'RGBA(32, 54, 71, 1)');
  searchboxTextInput.setProperty('HoverFill', 'RGBA(255, 255, 255, 0.1)');
  searchboxTextInput.setProperty('PaddingLeft', '50');
  searchboxTextInput.setProperty('PressedBorderColor', 'Self.HoverBorderColor');
  searchboxTextInput.setProperty('PressedColor', 'Self.Color');
  searchboxTextInput.setProperty('PressedFill', 'Self.Fill');
  searchboxTextInput.setProperty('Size', '9');
  searchboxTextInput.setProperty('Width', 'Parent.Width');
  searchboxTextInput.setProperty('X', '0');
  searchboxTextInput.setProperty('Y', '0');

  searchboxTextInput.setComponentView(SearchboxTextinput);

  searchboxContainer.appendChild(searchboxImage);
  searchboxContainer.appendChild(searchboxRectangle);
  searchboxContainer.appendChild(searchboxTextInput);

  return searchboxContainer;
}
