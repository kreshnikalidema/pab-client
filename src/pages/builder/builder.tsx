import React from 'react';
import useSWR from 'swr';
import { Layout } from '../../components/layout';
import { DraggableGrid } from '../../components/draggable-grid';
import { Workspace } from './components/workspace';
// import { items } from './sidebar';
import { Instructions } from './components/instructions';
import { createVerticalContainer } from 'libraries/power-apps/vertical-container';
import { createComponent } from './helpers';
import * as Icon from '@mui/icons-material';

const container = createVerticalContainer('Test');

container.setComponentView('region');

container.setStyle('height', '100%');
container.setStyle('margin', '0');
container.setStyle('display', 'flex');
container.setStyle('flexDirection', 'column');
container.setStyle('backgroundColor', 'red');

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) =>
      data.map((params: any) => ({
        params,
        label: 'Layout',
        icon: Icon.ViewColumn,
        createComponent,
      }))
    );

export const Builder: React.FC = () => {
  const { data, error, isLoading } = useSWR(
    'http://localhost:3000/blocks',
    fetcher
  );

  // Handle loading state
  if (!data) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Failed to load</div>;

  return (
    <Layout sidebar={<DraggableGrid items={data} />}>
      <Instructions container={container} />
      <Workspace container={container} />
    </Layout>
  );
};
