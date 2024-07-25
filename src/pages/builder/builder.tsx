import React from 'react';
import { Layout } from '../../components/layout';
import { DraggableGrid } from '../../components/draggable-grid';
import { Workspace } from './components/workspace';
import { items } from './sidebar';
import{Instructions} from "./components/instructions"

export const Builder: React.FC = () => {
  return (
    <Layout sidebar={<DraggableGrid items={items} />}>
      <Instructions />
      <Workspace />
    </Layout>
  );
};
