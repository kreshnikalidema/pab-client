import React from 'react';
import { Layout } from '../../components/layout';
import { DraggableGrid } from '../../components/draggable-grid';
import { Workspace } from './components/workspace';
import { items } from './sidebar';
import { Instructions } from './components/instructions';
import { createVerticalContainer } from 'libraries/power-apps/vertical-container';

const container = createVerticalContainer('Test');

// container.setCssProperty('height', '100%');
// container.setCssProperty('margin', '0');
// container.setCssProperty('display', 'flex');
// container.setCssProperty('flexDirection', 'column');

export const Builder: React.FC = () => {
  return (
    <Layout sidebar={<DraggableGrid items={items} />}>
      <Instructions container={container} />
      <Workspace container={container} />
    </Layout>
  );
};
