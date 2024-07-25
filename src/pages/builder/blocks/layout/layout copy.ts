import { createHorizontalContainer } from 'libraries/power-apps/components/horizontal-container';
import { createVerticalContainer } from 'libraries/power-apps/components/vertical-container';

export function createLayout() {
  // Container
  const container = createHorizontalContainer();
  container.setNamespace('Layout_Container');
  container.setProperty('FillPortions', '1');

  // Sidebar
  const sidebar = createVerticalContainer();

  sidebar.setNamespace('Layout_Sidebar');
  sidebar.setProperty('Fill', '#333333');
  sidebar.setProperty('PaddingBottom', '20');
  sidebar.setProperty('PaddingLeft', '20');
  sidebar.setProperty('PaddingRight', '20');
  sidebar.setProperty('PaddingTop', '20');
  sidebar.setProperty('Width', '300');

  // Content
  const content = createVerticalContainer();

  content.setNamespace('Layout_Content');
  content.setProperty('Fill', '#f4f4f4');
  content.setProperty('FillPortions', '1');
  content.setProperty('PaddingBottom', '20');
  content.setProperty('PaddingLeft', '20');
  content.setProperty('PaddingRight', '20');
  content.setProperty('PaddingTop', '20');
  content.setProperty('Width', '300');

  container.appendChild(sidebar);
  container.appendChild(content);

  return container;
}
