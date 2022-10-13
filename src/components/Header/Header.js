import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Header.css';

export default function Header() {
  const { message, newGame, active } = useContext(GameContext);
  return (
    <>
      <h2 className="message">{message}</h2>
      {!active && <button onClick={newGame}> Tic Tac?</button>}
    </>
  );
}
