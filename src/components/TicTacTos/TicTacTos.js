import React from 'react';
import { useGameContext } from '../../context/GameContext';

export default function TicTacTos({ box, mark }) {
  const { moveMade } = useGameContext;
  return (
    <div className="xo" onClick={() => moveMade(box)}>
      {mark}
    </div>
  );
}
