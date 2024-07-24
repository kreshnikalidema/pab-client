import { makeAutoObservable } from 'mobx';
import { transformToStyles } from './helpers';

type Properties<T> = {
  [K in keyof T]?: T[K];
};

export class Component<T = {}> {
  properties: Properties<T>;

  children: Component<T>[];

  constructor(properties: Properties<T> = {}) {
    this.properties = properties || {};

    this.children = [];

    makeAutoObservable(this);
  }

  setProperty<K extends keyof T>(key: K, value: T[K]) {
    this.properties[key] = value;
  }
  appendChild(child: Component<T>) {
    this.children.push(child);
  }

  prependChild(child: Component<T>) {
    this.children.unshift(child);
  }

  removeChild(child: Component<T>) {
    this.children = this.children.filter((c) => c !== child);
  }

  get styles() {
    return transformToStyles(this.properties as never);
  }
}
