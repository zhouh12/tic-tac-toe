import React from 'react';
import { TicTacToeComponent } from './tic-tac-toe';

export default {
  title: 'Components/TicTacToeComponent',
  component: TicTacToeComponent,
};

export const Example: React.FC = () => {
  return <TicTacToeComponent buttonText="Restart Game" />;
};
