import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Layout } from '../../components/layout';
import { DraggableGrid } from '../../components/draggable-grid';
import { Workspace } from './components/workspace';
import { Instructions } from './components/instructions';
import { useStore } from '../../store';

interface Props {}

export const Screen = observer<Props>((props) => {
  const { screenStore } = useStore();

  useEffect(() => {
    screenStore.fetchBlocks();
  }, [screenStore]);

  if (screenStore.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout sidebar={<DraggableGrid items={screenStore.blocks} />}>
      <Instructions screenStore={screenStore} />
      <Workspace screenStore={screenStore} />
    </Layout>
  );
});
