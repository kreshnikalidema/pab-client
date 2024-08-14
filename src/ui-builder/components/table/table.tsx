import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Component } from '../../helpers/component';
import { Placeholder } from './Placeholder';

interface Props {
  container: Component;
}

export const Table: React.FC<Props> = observer((props) => {
  const { container } = props;

  if (container.children.length === 0) {
    return <Placeholder />;
  }

  return null;
});
