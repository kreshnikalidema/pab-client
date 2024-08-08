import { createContainer } from 'helpers/component';
import { createGallery } from 'helpers/component';
import { createLabel } from 'helpers/component';
import { createRectangle } from 'helpers/component';
import { createButton } from 'helpers/component';
import { createImage } from 'helpers/component';

export function createMenu() {
  const component = createGallery('Menu');

  component.setProperty(
    'Items',
    'Table({MenuName: "Products", MenuIcon: SampleImage, MenuIconSelected: SampleImage, Screen: App.ActiveScreen, Submenu: Table({MenuName: "Active", Screen: App.ActiveScreen})})'
  );
  component.setProperty('Layout', 'Layout.Vertical');
  component.setProperty('LayoutMinHeight', '0');
  component.setProperty('LayoutMinWidth', '0');
  component.setProperty('LoadingSpinner', 'LoadingSpinner.Data');
  component.setProperty('TemplatePadding', '0');
  component.setProperty('TemplateSize', '150');

  function createSubmenuItemLabel() {
    const component = createLabel('Submenu_Item_Label');

    component.setProperty('Text', 'ThisItem.MenuName');
    component.setProperty('Color', 'RGBA(0, 0, 0, 1)');
    component.setProperty('Font', 'Font.Lato');
    component.setProperty('FontWeight', 'FontWeight.Semibold');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('PaddingLeft', '0');
    component.setProperty('Size', '8');
    component.setProperty('Width', 'Parent.Width - Self.X');
    component.setProperty('X', '35');

    return component;
  }

  function createSubmenuItemRectangle() {
    const component = createRectangle('Submenu_Item_Rectangle');

    component.setProperty('Fill', 'RGBA(255, 0, 0, 1)');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('Width', '1');
    component.setProperty('X', 'Submenu_Item_Label.X / 2');

    return component;
  }

  function createSubmenuItemButton() {
    const component = createButton('Submenu_Item_Button');

    component.setProperty('OnSelect', 'Navigate(ThisItem.Screen)');
    component.setProperty('Text', '');
    component.setProperty('BorderStyle', 'BorderStyle.None');
    component.setProperty('Fill', 'RGBA(0, 0, 0, 0)');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('HoverFill', 'RGBA(0, 0, 0, 0)');
    component.setProperty('PressedFill', 'RGBA(0, 0, 0, 0)');
    component.setProperty('Width', 'Parent.Width');

    return component;
  }

  function createSubmenuItemInner() {
    const component = createContainer('Submenu_Item_Inner');

    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty(
      'Fill',
      'If(App.ActiveScreen = ThisItem.Screen, RGBA(255, 0, 0, 1), RGBA(0, 0, 0, 0))'
    );
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('RadiusBottomLeft', '10');
    component.setProperty('RadiusBottomRight', '10');
    component.setProperty('RadiusTopLeft', '10');
    component.setProperty('RadiusTopRight', '10');
    component.setProperty('Width', 'Parent.Width');
    component.setProperty('X', '(Parent.Width - Self.Width)/2');
    component.setProperty('Y', '(Parent.Height - Self.Height)/2');

    component.appendChild(createSubmenuItemLabel());
    component.appendChild(createSubmenuItemRectangle());
    component.appendChild(createSubmenuItemButton());

    return component;
  }

  function createSubmenuItemOuter() {
    const component = createContainer('Submenu_Item_Outer');

    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty('Height', '50');
    component.setProperty('RadiusBottomLeft', '0');
    component.setProperty('RadiusBottomRight', '0');
    component.setProperty('RadiusTopLeft', '0');
    component.setProperty('RadiusTopRight', '0');
    component.setProperty('Width', 'Parent.TemplateWidth');

    component.appendChild(createSubmenuItemInner());

    return component;
  }

  function createSubmenu() {
    const component = createGallery('Submenu');

    component.setProperty('Items', 'ThisItem.Submenu');
    component.setProperty(
      'Height',
      'Self.AllItemsCount * (Self.TemplateHeight + Self.TemplatePadding)'
    );
    component.setProperty('Layout', 'Layout.Vertical');
    component.setProperty('LoadingSpinner', 'LoadingSpinner.Data');
    component.setProperty('TemplatePadding', '0');
    component.setProperty('TemplateSize', '35');
    component.setProperty('Width', 'Parent.TemplateWidth');
    component.setProperty('Y', 'Menu_Item_Outer.Height');

    component.appendChild(createSubmenuItemOuter());

    return component;
  }

  function createMenuItemImage() {
    const component = createImage('Menu_Item_Image');

    component.setProperty('Image', 'ThisItem.MenuIcon');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('PaddingBottom', '8');
    component.setProperty('PaddingTop', '8');
    component.setProperty('Width', 'Self.Height');

    return component;
  }

  function createMenuItemLabel() {
    const component = createLabel('Menu_Item_Label');

    component.setProperty('Text', 'ThisItem.MenuName');
    component.setProperty('Color', 'RGBA(0, 0, 0, 1)');
    component.setProperty('Font', 'Font.Lato');
    component.setProperty('FontWeight', 'FontWeight.Semibold');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('PaddingLeft', '0');
    component.setProperty('Size', '8');
    component.setProperty('Width', 'Parent.Width - Self.X');
    component.setProperty('X', 'Menu_Item_Image.Width');

    return component;
  }

  function createMenuItemButton() {
    const component = createButton('Menu_Item_Button');

    component.setProperty('OnSelect', 'Navigate(ThisItem.Screen)');
    component.setProperty('Text', '');
    component.setProperty('BorderStyle', 'BorderStyle.None');
    component.setProperty('Fill', 'RGBA(0, 0, 0, 0)');
    component.setProperty('Height', 'Parent.Height');
    component.setProperty('HoverFill', 'RGBA(0, 0, 0, 0)');
    component.setProperty('PressedFill', 'RGBA(0, 0, 0, 0)');
    component.setProperty('Width', 'Parent.Width');

    return component;
  }

  function createMenuItemInner() {
    const component = createContainer('Menu_Item_Inner');

    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty(
      'Fill',
      'If(App.ActiveScreen = ThisItem.Screen, RGBA(255, 0, 0, 1), RGBA(0, 0, 0, 0))'
    );
    component.setProperty('Height', 'Parent.Height * 70%');
    component.setProperty('RadiusBottomLeft', '10');
    component.setProperty('RadiusBottomRight', '10');
    component.setProperty('RadiusTopLeft', '10');
    component.setProperty('RadiusTopRight', '10');
    component.setProperty('Width', 'Parent.Width');
    component.setProperty('X', '(Parent.Width - Self.Width)/2');
    component.setProperty('Y', '(Parent.Height - Self.Height)/2');

    component.appendChild(createMenuItemImage());
    component.appendChild(createMenuItemLabel());
    component.appendChild(createMenuItemButton());

    return component;
  }

  function createMenuItemOuter() {
    const component = createContainer('Menu_Item_Outer');

    component.setProperty('DropShadow', 'DropShadow.None');
    component.setProperty('Height', '50');
    component.setProperty('RadiusBottomLeft', '0');
    component.setProperty('RadiusBottomRight', '0');
    component.setProperty('RadiusTopLeft', '0');
    component.setProperty('RadiusTopRight', '0');
    component.setProperty('Width', 'Parent.TemplateWidth');

    component.appendChild(createMenuItemInner());

    return component;
  }

  component.appendChild(createSubmenu());
  component.appendChild(createMenuItemOuter());

  return component;
}
