import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Header() {
  const { message } = useContext(GameContext);
  return (
    <>
      <h2 className="message">{message}</h2>
    </>
  );
}
