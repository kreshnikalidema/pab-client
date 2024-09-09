import { toJS } from 'mobx';
import { IComponent, Variables, Yaml, YamlCode } from './types';

export class Helpers {
  static toTheme<T extends IComponent>(component: T): Variables {
    return component.children.reduce<Variables>(
      (acc, child) => {
        const childVariables = Helpers.toTheme(child);
        return {
          ...acc,
          ...toJS(child.variables as Variables),
          ...childVariables,
        };
      },
      toJS(component.variables as Variables)
    );
  }

  static toYaml<T extends IComponent>(component: T): Yaml {
    const yamlCode: YamlCode = {
      Control: component.control,
      Variant: component.variant,
      Properties: component.properties,
      Children: component.children.map((child) => Helpers.toYaml(child)),
    };

    return {
      [component.name]: yamlCode,
    };
  }
}
