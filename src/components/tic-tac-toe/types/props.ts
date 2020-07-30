import { TicTacToeConfig } from './config';

/**
 * Properties for the Tic Tac Toe Component.
 */
export interface TicTacToeProps {
  /**
   * Display text for the Restart Game button.
   */
  buttonText: string;

  /**
   * Configuration options for the Restart Game button.
   */
  config?: TicTacToeConfig;
}
