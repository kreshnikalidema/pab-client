import { makeAutoObservable } from 'mobx';
import { transformToStyles } from './helpers';

type Properties<T> = {
  [K in keyof T]?: T[K];
};

export class Component<T = {}> {
  namespace?: string;

  control?: string;

  variant?: string;

  properties: Properties<T>;

  children: Component<T>[];

  constructor(control?: string, variant?: string) {
    this.control = control;

    this.variant = variant;

    this.properties = {};

    this.children = [];

    makeAutoObservable(this);
  }

  setNamespace(namespace: string) {
    this.namespace = namespace;
  }

  setProperty<K extends keyof T>(key: K, value: string) {
    this.properties[key as keyof T] = `=${value}` as unknown as T[keyof T];
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
    return transformToStyles(this.properties);
  }

  get yaml(): {} {
    if (this.namespace) {
      return {
        [this.namespace]: {
          Control: this.control,

          Variant: this.variant,

          Properties: this.properties,

          Children: this.children.map((child) => child.yaml),
        },
      };
    } else {
      return {};
    }
  }
}
