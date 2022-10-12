import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const initialState = new Array(9).fill().map((val, idx) => ({ space: idx, content: '' }));

  const [board, setBoard] = useState(initialState);
  const [activePlayer, setActivePlayer] = useState('O');
  const [message, setMessage] = useState(`Hurry up, ${activePlayer}...`);
  const [active, setActive] = useState(true);

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        activePlayer,
        setActivePlayer,
        message,
        setMessage,
        active,
        setActive,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
