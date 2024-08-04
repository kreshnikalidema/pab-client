import React, { ReactNode, useContext } from 'react';
import { Provider, MobXProviderContext } from 'mobx-react';
import { ScreenStore } from './pages/screen/screen-store';

export class Store {
  screenStore: ScreenStore;

  constructor() {
    this.screenStore = new ScreenStore(this);
  }
}

interface StoreProviderProps {
  children: ReactNode;
}

const store = new Store();

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const useStore = () => {
  return useContext(MobXProviderContext).store as typeof store;
};
