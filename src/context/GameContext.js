import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const initialState = new Array(9).fill().map((val, idx) => ({ box: idx, mark: '' }));

  const [board, setBoard] = useState(initialState);
  const [activePlayer, setActivePlayer] = useState('O');
  const [message, setMessage] = useState(`Hurry up, ${activePlayer}...`);
  const [active, setActive] = useState(true);

  const moveMade = (num) => {
    if (!active) return;
    if (board[num].mark !== '') return;

    setBoard((prev) =>
      prev.map((space) => (space.box === num ? { box: num, mark: activePlayer } : space))
    );
    setActivePlayer(activePlayer === 'O' ? 'X' : 'O');
  };

  const newGame = () => {
    setBoard(initialState);
    setActive(true);
    setMessage(`Hurry up ${activePlayer}`);
  };
  return (
    <GameContext.Provider
      value={{
        newGame,
        moveMade,
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
