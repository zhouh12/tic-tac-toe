import React, { useState } from 'react';
import { SquareValue } from '../../types/square-value-config';
import { calculateWinner } from './utilities/calculate-winner';
import { Board } from './subcomponents/board';
import { TicTacToeProps } from './types/props';
import { observer } from 'mobx-react';

// TODO: in real project, we can create a help function such as bemClassBuilder
// in order to name block or element, right now just hard-coded
const b = 'tic-tac-toe';
const bBoard = 'tic-tac-toe__board';
const bInfo = 'tic-tac-toe__info';
const bButton = 'tic-tac-toe__button';
/**
 * A top-level component displays the game.
 */
export const TicTacToeComponent: React.FC<TicTacToeProps> = observer(
  (props) => {
    const [isNext, setIsNext] = useState<boolean>(true);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [history, setHistory] = useState<{ squares: SquareValue[] }[]>([
      {
        squares: Array(9).fill(null),
      },
    ]);

    const handleClick = (index: number) => {
      const newHistory = history.slice(0, stepNumber + 1);
      const current = newHistory[newHistory.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[index]) {
        return;
      }
      squares[index] = isNext ? 'X' : 'O';
      setHistory(
        newHistory.concat([
          {
            squares: squares,
          },
        ])
      );
      setStepNumber(newHistory.length);
      setIsNext(!isNext);
    };

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (isNext ? 'X' : 'O');
    }

    return (
      <div className={b}>
        <div className={bBoard}>
          <div>
            <Board squares={current.squares} onClick={(i) => handleClick(i)} />
          </div>
        </div>
        <div className={bInfo}>
          <div>{status}</div>
          <div>
            <button
              className={bButton}
              onClick={() => {
                setStepNumber(0);
              }}
            >
              {props.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
);
