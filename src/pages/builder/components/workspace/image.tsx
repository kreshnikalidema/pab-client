import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from 'libraries/power-apps';
import { useDrop } from 'react-dnd';

interface Props {
  container: Component;
}

interface DroppedItem {
  fn: () => Component;
}

export const Image: React.FC<Props> = observer((props) => {
  const { container } = props;

  return (
    <img src="https://placehold.co/300x100" style={toJS(container.styles)} />
  );
});
