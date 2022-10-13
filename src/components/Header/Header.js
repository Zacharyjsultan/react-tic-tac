import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Header.css';

export default function Header() {
  const { message, newGame } = useContext(GameContext);
  return (
    <>
      <h2 className="message">{message}</h2>
      <button onClick={newGame}> Tic Tac?</button>
    </>
  );
}
