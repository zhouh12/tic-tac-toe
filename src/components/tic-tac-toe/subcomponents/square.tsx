import React from 'react';
import { observer } from 'mobx-react';
import { SquareValue } from '../../../types/square-value-config';

export interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

// TODO: in real project, we can create a help function such as bemClassBuilder
// in order to name block or element, right now just hard-coded
const b = 'square';

/**
 * A component fills 'X' or 'O' when clicking it.
 */
export const Square: React.FC<SquareProps> = observer((props) => {
  return (
    <button className={b} onClick={props.onClick}>
      {props.value}
    </button>
  );
});
