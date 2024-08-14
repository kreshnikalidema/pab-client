import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Layout } from 'core/components/layout';
import { DraggableGrid } from 'core/components/draggable-grid';
import { UIBuilderInstructions } from './ui-builder-instructions';
import { UIBuilderWorkspace } from './ui-builder-workspace';
import { blocks, component } from './constants';

interface Props {}

export const UIBuilderPage = observer<Props>(() => {
  return (
    <Layout sidebar={<DraggableGrid items={blocks} />}>
      <UIBuilderInstructions component={component} />
      <UIBuilderWorkspace component={component} />
    </Layout>
  );
});
