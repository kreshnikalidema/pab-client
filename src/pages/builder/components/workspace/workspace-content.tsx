import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Component } from 'libraries/power-apps';
import { Image } from './image';
import { View } from './view';
import { Label } from './label';
import {Region} from "./region"

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
