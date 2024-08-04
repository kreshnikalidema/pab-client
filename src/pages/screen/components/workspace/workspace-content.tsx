import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Component } from '@app/helpers/component';
import { Image } from './image';
import { View } from './view';
import { Label } from './label';
import { Region } from './region';
import { TextInput } from './textinput'

interface WorkspaceContentProps {
  container: Component;
}

interface DroppedItem {
  fn: () => Component;
}

const elements = {
  region: Region,
  div: View,
  image: Image,
  label: Label,
  textinput: TextInput
};

export const WorkspaceContent: React.FC<WorkspaceContentProps> = observer(
  (props) => {
    const { container } = props;

    const renderChildren = React.useCallback(
      (childContainer: Component) => (
        <WorkspaceContent
          container={childContainer}
          key={childContainer.componentName}
        />
      ),
      []
    );

    // @ts-ignore
    const TmpComponent = elements[container.componentView];

    return (
      <TmpComponent container={container}>
        {container.children.map(renderChildren)}
      </TmpComponent>
    );
  }
);
