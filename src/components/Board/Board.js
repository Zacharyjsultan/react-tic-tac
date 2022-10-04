import React from 'react';
import { useGameContext } from '../../context/GameContext';
import TicTacTos from '../TicTacTos/TicTacTos';

export default function Board() {
  const { ticTac } = useGameContext();
  return (
    <div className="board">
      {ticTac.map(({ box, mark }) => (
        <TicTacTos key={box} box={box} mark={mark} />
      ))}
    </div>
  );
}
