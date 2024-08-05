// ScreenStore.ts
import { makeAutoObservable, flow } from 'mobx';
import { Component } from 'helpers/component';
import { createComponent } from './helpers';
import * as Icon from '@mui/icons-material';

interface BlockData {
  componentName: string;
  componentView: string;
  variables: Record<string, any>;
  properties: Record<string, any>;
  styles: Record<string, any>;
}

export class ScreenStore {
  component: Component;
  blocks: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  componentRef: Component | null = null;

  constructor(RootStore: any) {
    makeAutoObservable(this);

    this.component = new Component({
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
  }

  fetchBlocks = flow(function* (this: ScreenStore) {
    this.loading = true;
    this.error = null;

    try {
      const response = yield fetch('http://localhost:3000/blocks');

      const data: BlockData[] = yield response.json();

      this.blocks = data.map((params) => {
        return {
          params,
          label: params.componentName,
          icon: Icon.ViewColumn,
          createComponent,
        };
      });
      this.loading = false;
    } catch (error: any) {
      this.error = error.message;
      this.loading = false;
    }
  });

  setComponentRef(componentRef: Component | null) {
    this.componentRef = componentRef;
  }
}
