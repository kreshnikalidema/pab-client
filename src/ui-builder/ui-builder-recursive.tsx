import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Component } from './helpers/component';
import { View } from './components/view/view';
import { Region } from './components/region/region';
import { Image } from './components/image';
import { Label } from './components/label';
import { TextInput } from './components/textinput/textinput';

interface Props {
  container: Component;
}

const elements: any = {
  div: View,
  region: Region,
  image: Image,
  label: Label,
  textinput: TextInput,
};

export const UIBuilderRecursive: React.FC<Props> = observer((props) => {
  const { container } = props;

  const renderChildren = React.useCallback(
    (childContainer: Component) => (
      <UIBuilderRecursive
        container={childContainer}
        key={childContainer.componentName}
      />
    ),
    []
  );

  if (container.componentView && elements[container.componentView]) {
    const Component = elements[container.componentView];

    return (
      <Component container={container}>
        {container.children.map(renderChildren)}
      </Component>
    );
  }

  return null;
});
