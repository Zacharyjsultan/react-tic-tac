import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import TicTacTos from '../TicTacTos/TicTacTos';

import './Board.css';

export default function Board() {
  const { board } = useContext(GameContext);
  return (
    <div className="board">
      {board.map(({ box, mark }) => (
        <TicTacTos key={box} box={box} mark={mark} />
      ))}
    </div>
  );
}
