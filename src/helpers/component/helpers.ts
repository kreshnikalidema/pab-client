import { toJS } from 'mobx';
import { IComponent, Variables, YamlCode, Yaml } from './types';

export function toTheme(component: IComponent): Variables {
  return component.children.reduce((acc, child) => {
    const childVariables = toTheme(child);
    return { ...acc, ...toJS(child.variables), ...childVariables };
  }, toJS(component.variables));
}

export function toYaml(component: IComponent): Yaml {
  const yamlCode: YamlCode = {
    Control: component.control,
    Variant: component.variant,
    Properties: component.properties,
    Children: component.children.map((child) => toYaml(child)),
  };

  if (yamlCode.Children?.length === 0) {
    delete yamlCode.Children;
  }

  return toJS({
    [component.componentName]: yamlCode,
  });
}
