import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const initialState = new Array(9).fill().map((val, idx) => ({ space: idx, content: '' }));

  const [board, setBoard] = useState(initialState);
  const [message, setMessage] = useState('O');
  const [activePlayer, setActivePlayer] = useState();
  const [active, setActive] = useState('true');

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        message,
        setMessage,
        activePlayer,
        setActivePlayer,
        active,
        setActive,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const useGame = useContext(GameContext);
  if (useGame === undefined) {
    throw new Error('holy canoli keep the ravioli useGameContext within a provider');
  }
};

export { useGameContext, GameProvider, GameContext };
