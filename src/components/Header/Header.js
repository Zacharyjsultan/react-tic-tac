import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Header() {
  const { start, active, message } = useContext(GameContext);
  return (
    <>
      <h2>{message}</h2>
      {!active && <button onClick={start}>Press Me</button>}
    </>
  );
}
