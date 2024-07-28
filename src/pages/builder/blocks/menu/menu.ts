import { createGallery } from 'libraries/power-apps/components/gallery';
import { createContainer } from 'libraries/power-apps/components/container';
import { createImage } from 'libraries/power-apps/components/image';
import { createLabel } from 'libraries/power-apps/components/label';
import { createButton } from 'libraries/power-apps/components/button';
import { createRectangle } from 'libraries/power-apps//components/rectangle';

export function createMenu() {
  // Menu
  const menu = createGallery('Menu');

  menu.setProperty(
    'Items',
    'Table({MenuName: "Products", MenuIcon: SampleImage, MenuIconSelected: SampleImage, Screen: App.ActiveScreen, Submenu: Table({MenuName: "Active", Screen: App.ActiveScreen})})'
  );
  menu.setProperty('Layout', 'Layout.Vertical');
  menu.setProperty('LayoutMinHeight', '0');
  menu.setProperty('LayoutMinWidth', '0');
  menu.setProperty('LoadingSpinner', 'LoadingSpinner.Data');
  menu.setProperty('TemplatePadding', '0');
  menu.setProperty('TemplateSize', '150');

  menu.setCssProperty('display', 'flex');
  menu.setCssProperty('justifyContent', 'center');
  menu.setCssProperty('alignItems', 'center');
  menu.setCssProperty('width', '100%');
  menu.setCssProperty('height', '100%');

  // Submenu
  const submenu = createGallery('Submenu');
  submenu.setProperty('Items', 'ThisItem.Submenu');
  submenu.setProperty(
    'Height',
    'Self.AllItemsCount * (Self.TemplateHeight + Self.TemplatePadding)'
  );
  submenu.setProperty('Layout', 'Layout.Vertical');
  submenu.setProperty('LoadingSpinner', 'LoadingSpinner.Data');
  submenu.setProperty('TemplatePadding', '0');
  submenu.setProperty('TemplateSize', '35');
  submenu.setProperty('Width', 'Parent.TemplateWidth');
  submenu.setProperty('Y', 'Menu_Item_Outer.Height');

  submenu.setCssProperty('display', 'none');

  const submenuItemOuter = createContainer('Submenu_Item_Outer');
  submenuItemOuter.setProperty('DropShadow', 'DropShadow.None');
  submenuItemOuter.setProperty('Height', '50');
  submenuItemOuter.setProperty('RadiusBottomLeft', '0');
  submenuItemOuter.setProperty('RadiusBottomRight', '0');
  submenuItemOuter.setProperty('RadiusTopLeft', '0');
  submenuItemOuter.setProperty('RadiusTopRight', '0');
  submenuItemOuter.setProperty('Width', 'Parent.TemplateWidth');

  const submenuItemInner = createContainer('Submenu_Item_Inner');
  submenuItemInner.setProperty('DropShadow', 'DropShadow.None');
  submenuItemInner.setProperty(
    'Fill',
    'If(App.ActiveScreen = ThisItem.Screen, RGBA(255, 0, 0, 1), RGBA(0, 0, 0, 0))'
  );
  submenuItemInner.setProperty('Height', 'Parent.Height');
  submenuItemInner.setProperty('RadiusBottomLeft', '10');
  submenuItemInner.setProperty('RadiusBottomRight', '10');
  submenuItemInner.setProperty('RadiusTopLeft', '10');
  submenuItemInner.setProperty('RadiusTopRight', '10');
  submenuItemInner.setProperty('Width', 'Parent.Width');
  submenuItemInner.setProperty('X', '(Parent.Width - Self.Width)/2');
  submenuItemInner.setProperty('Y', '(Parent.Height - Self.Height)/2');

  const submenuItemLabel = createLabel('Submenu_Item_Label');
  submenuItemLabel.setProperty('Text', 'ThisItem.MenuName');
  submenuItemLabel.setProperty('Color', 'RGBA(0, 0, 0, 1)');
  submenuItemLabel.setProperty('Font', 'Font.Lato');
  submenuItemLabel.setProperty('FontWeight', 'FontWeight.Semibold');
  submenuItemLabel.setProperty('Height', 'Parent.Height');
  submenuItemLabel.setProperty('PaddingLeft', '0');
  submenuItemLabel.setProperty('Size', '8');
  submenuItemLabel.setProperty('Width', 'Parent.Width - Self.X');
  submenuItemLabel.setProperty('X', '35');

  const submenuItemRectangle = createRectangle('Submenu_Item_Rectangle');

  submenuItemRectangle.setProperty('Fill', 'RGBA(255, 0, 0, 1)');
  submenuItemRectangle.setProperty('Height', 'Parent.Height');
  submenuItemRectangle.setProperty('Width', '1');
  submenuItemRectangle.setProperty('X', 'Submenu_Item_Label.X / 2');

  const submenuItemButton = createButton('Submenu_Item_Button');

  submenuItemButton.setProperty('OnSelect', 'Navigate(ThisItem.Screen)');
  submenuItemButton.setProperty('Text', '');
  submenuItemButton.setProperty('BorderStyle', 'BorderStyle.None');
  submenuItemButton.setProperty('Fill', 'RGBA(0, 0, 0, 0)');
  submenuItemButton.setProperty('Height', 'Parent.Height');
  submenuItemButton.setProperty('HoverFill', 'RGBA(0, 0, 0, 0)');
  submenuItemButton.setProperty('PressedFill', 'RGBA(0, 0, 0, 0)');
  submenuItemButton.setProperty('Width', 'Parent.Width');

  submenuItemInner.appendChild(submenuItemLabel);
  submenuItemInner.appendChild(submenuItemRectangle);
  submenuItemInner.appendChild(submenuItemButton);
  submenuItemOuter.appendChild(submenuItemInner);
  submenu.appendChild(submenuItemOuter);

  //
  //
  //
  //

  // Menu_Item_Outer
  const menuItemOuter = createContainer('Menu_Item_Outer');

  menuItemOuter.setProperty('DropShadow', 'DropShadow.None');
  menuItemOuter.setProperty('Height', '50');
  menuItemOuter.setProperty('RadiusBottomLeft', '0');
  menuItemOuter.setProperty('RadiusBottomRight', '0');
  menuItemOuter.setProperty('RadiusTopLeft', '0');
  menuItemOuter.setProperty('RadiusTopRight', '0');
  menuItemOuter.setProperty('Width', 'Parent.TemplateWidth');

  menuItemOuter.setCssProperty('display', 'flex');
  menuItemOuter.setCssProperty('justifyContent', 'center');
  menuItemOuter.setCssProperty('alignItems', 'center');

  // Menu_Item_Inner
  const menuItemInner = createContainer('Menu_Item_Inner');

  menuItemInner.setProperty('DropShadow', 'DropShadow.None');
  menuItemInner.setProperty(
    'Fill',
    'If(App.ActiveScreen = ThisItem.Screen, RGBA(255, 0, 0, 1), RGBA(0, 0, 0, 0))'
  );
  menuItemInner.setProperty('Height', 'Parent.Height * 70%');
  menuItemInner.setProperty('RadiusBottomLeft', '10');
  menuItemInner.setProperty('RadiusBottomRight', '10');
  menuItemInner.setProperty('RadiusTopLeft', '10');
  menuItemInner.setProperty('RadiusTopRight', '10');
  menuItemInner.setProperty('Width', 'Parent.Width');
  menuItemInner.setProperty('X', '(Parent.Width - Self.Width)/2');
  menuItemInner.setProperty('Y', '(Parent.Height - Self.Height)/2');

  menuItemInner.setCssProperty('display', 'flex');
  menuItemInner.setCssProperty('alignItems', 'center');

  // Menu_Item_Image
  const menuItemImage = createImage('Menu_Item_Image');

  menuItemImage.setProperty('Image', 'ThisItem.MenuIcon');
  menuItemImage.setProperty('Height', 'Parent.Height');
  menuItemImage.setProperty('PaddingBottom', '8');
  menuItemImage.setProperty('PaddingTop', '8');
  menuItemImage.setProperty('Width', 'Self.Height');

  menuItemImage.setCssProperty('width', '30px');
  menuItemImage.setCssProperty('height', '30px');
  menuItemImage.setCssProperty('marginRight', '10px');

  // Menu Item Label
  const menuItemLabel = createLabel('Menu_Item_Label');

  menuItemLabel.setProperty('Text', 'ThisItem.MenuName');
  menuItemLabel.setProperty('Color', 'RGBA(0, 0, 0, 1)');
  menuItemLabel.setProperty('Font', 'Font.Lato');
  menuItemLabel.setProperty('FontWeight', 'FontWeight.Semibold');
  menuItemLabel.setProperty('Height', 'Parent.Height');
  menuItemLabel.setProperty('PaddingLeft', '0');
  menuItemLabel.setProperty('Size', '8');
  menuItemLabel.setProperty('Width', 'Parent.Width - Self.X');
  menuItemLabel.setProperty('X', 'Menu_Item_Image.Width');

  menuItemLabel.setCssProperty('fontSize', '16px');

  // Menu Item Button
  const menuItemButton = createButton('Menu_Item_Button');

  menuItemButton.setProperty('OnSelect', 'Navigate(ThisItem.Screen)');
  menuItemButton.setProperty('Text', '');
  menuItemButton.setProperty('BorderStyle', 'BorderStyle.None');
  menuItemButton.setProperty('Fill', 'RGBA(0, 0, 0, 0)');
  menuItemButton.setProperty('Height', 'Parent.Height');
  menuItemButton.setProperty('HoverFill', 'RGBA(0, 0, 0, 0)');
  menuItemButton.setProperty('PressedFill', 'RGBA(0, 0, 0, 0)');
  menuItemButton.setProperty('Width', 'Parent.Width');

  menuItemInner.appendChild(menuItemImage);
  menuItemInner.appendChild(menuItemLabel);
  menuItemInner.appendChild(menuItemButton);

  menuItemOuter.appendChild(menuItemInner);

  menu.appendChild(submenu);
  menu.appendChild(menuItemOuter);

  return menu;
}
