import { createHorizontalContainer } from 'libraries/power-apps/horizontal-container';
import { createLabel } from 'libraries/power-apps/label';

export function createHeader() {
  // Container
  const container = createHorizontalContainer('Header_Container');
  container.setProperty(
    'LayoutJustifyContent',
    'LayoutJustifyContent.SpaceBetween'
  );

  // Column 1
  const column1 = createHorizontalContainer('Header_Column1');
  column1.setProperty('FillPortions', '1');
  column1.setProperty('LayoutAlignItems', 'LayoutAlignItems.Center');
  column1.setProperty('LayoutJustifyContent', 'LayoutJustifyContent.Start');

  const label1 = createLabel('Header_Label1');
  label1.setProperty('Text', 'Label 1');
  label1.setProperty('Color', 'Red');

  column1.prependChild(label1);

  // Column 2
  const column2 = createHorizontalContainer('Header_Column2');
  column2.setProperty('FillPortions', '1');
  column2.setProperty('LayoutAlignItems', 'LayoutAlignItems.Center');
  column2.setProperty('LayoutJustifyContent', 'LayoutJustifyContent.End');

  const label2 = createLabel('Header_Label2');
  label2.setProperty('Text', 'Label 2');
  label2.setProperty('Color', 'Red');

  column2.prependChild(label2);

  container.appendChild(column1);
  container.appendChild(column2);

  return container;
}
