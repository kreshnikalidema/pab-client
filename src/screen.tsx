import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Layout } from './components/layout';
import { DraggableGrid } from './components/draggable-grid';
import { Workspace } from 'components/workspace';
import { Instructions } from 'components/instructions';
import { Component } from 'helpers/component';
import * as Icon from '@mui/icons-material';

import {createLayout} from "blocks/layout"
import {createSidebar} from "blocks/sidebar"

interface Item {
  label: string;
  icon: React.ElementType;
  createComponent: () => Component
}

const items: Item[] = [{
  label: 'createLayout',
  icon: Icon.ViewColumn,
  createComponent: createLayout,
}, {
  label: 'createSidebar',
  icon: Icon.ViewColumn,
  createComponent: createSidebar,
}]

interface Props {}

const component = new Component({
  componentName: 'Test',
  componentView: 'region',
  variables: {},
  properties: {},
  styles: {
    backgroundColor: '#393939',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0',
  },
});

export const Screen = observer<Props>(() => {
  return (
    <Layout sidebar={<DraggableGrid items={items} />}>
      <Instructions component={component} />
      <Workspace component={component} />
    </Layout>
  );
});
