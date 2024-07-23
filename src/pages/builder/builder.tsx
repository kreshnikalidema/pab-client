import React from 'react';
import * as Icon from '@mui/icons-material';
import { Layout } from '../../components/layout';
import { DraggableGrid } from '../../components/draggable-grid';
import { Workspace } from './components/workspace';
import { items } from './sidebar';

export const Builder: React.FC = () => {
  return (
    <Layout sidebar={<DraggableGrid items={items} />}>
      <Workspace />
    </Layout>
  );
};
