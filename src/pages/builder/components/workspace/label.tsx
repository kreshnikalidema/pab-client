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

export const Label: React.FC<Props> = observer((props) => {
  const { container } = props;

  return <span style={toJS(container.styles)}>Label</span>;
});
