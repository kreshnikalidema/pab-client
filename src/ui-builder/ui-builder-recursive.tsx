import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Component } from '@/shared/store/component';

interface Props {
  container: Component;
}

export const UIBuilderRecursive: React.FC<Props> = observer((props) => {
  const { container } = props;

  const renderChildren = React.useCallback(
    (childContainer: Component) => (
      <UIBuilderRecursive
        container={childContainer}
        key={childContainer.name}
      />
    ),
    []
  );

  return (
    <container.view container={container}>
      {container.children.map(renderChildren)}
    </container.view>
  );
});
