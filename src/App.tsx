import React from 'react';
import './App.css';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe';

const App: React.FC = () => {
  return <TicTacToeComponent buttonText="Restart Game"></TicTacToeComponent>;
};

export default App;
