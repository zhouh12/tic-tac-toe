import React, { ReactNode } from 'react';
import { observer } from 'mobx-react';
import { SquareValue } from '../../../types/square-value-config';
import { Square } from './square';

export interface BoardProps {
  squares: SquareValue[];
  onClick: (index: number) => void;
}

// TODO: in real project, we can create a help function such as bemClassBuilder
// in order to name block or element, right now just hard-coded
const b = 'board__row';

/**
 * A component renders 9 squares.
 */
export const Board: React.FC<BoardProps> = observer((props) => {
  const renderSquare = (i: number): ReactNode => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <div>
      <div className={b}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={b}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={b}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
});
