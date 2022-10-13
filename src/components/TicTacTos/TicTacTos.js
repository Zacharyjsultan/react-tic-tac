import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './TicTacTos.css';

export default function TicTacTos({ box, mark }) {
  const { moveMade } = useContext(GameContext);
  return (
    <div className="xo" onClick={() => moveMade(box)} id={box}>
      {mark}
    </div>
  );
}
