import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from '@app/helpers/component';

interface Props {
  container: Component;
}

interface DroppedItem {
  fn: () => Component;
}

export const Image: React.FC<Props> = observer((props) => {
  const { container } = props;

  const src = container.metadata.src ?? 'https://placehold.co/300x100';

  return <img src={src} style={toJS(container.styles)} />;
});
