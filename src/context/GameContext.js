import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const initialState = new Array(9).fill().map((val, idx) => ({ box: idx, mark: '' }));

  const [board, setBoard] = useState(initialState);
  const [activePlayer, setActivePlayer] = useState('O');
  const [message, setMessage] = useState(`Hurry up, ${activePlayer}...`);
  const [active, setActive] = useState(true);

  const moveMade = (check) => {
    if (!active) return;
    if (board[check].mark !== '') return;

    setBoard((prev) =>
      prev.map((space) => (space.box === check ? { box: check, mark: activePlayer } : space))
    );
    setActivePlayer(activePlayer === 'O' ? 'X' : 'O');
  };

  const newGame = () => {
    setBoard(initialState);
    setActive(true);
    setMessage(`Hurry up ${activePlayer}`);
  };

  const winner = () => {
    if (
      board[0].mark !== '' &&
      board[0].mark === board[1].mark &&
      board[1].mark === board[2].mark
    ) {
      return board[2].mark;
    } else if (
      board[3].mark !== '' &&
      board[3].mark === board[4].mark &&
      board[4].mark === board[5].mark
    ) {
      return board[5].mark;
    } else if (
      board[6].mark !== '' &&
      board[6].mark === board[7].mark &&
      board[7].mark === board[8].mark
    ) {
      return board[8].mark;
    } else if (
      board[0].mark !== '' &&
      board[0].mark === board[3].mark &&
      board[3].mark === board[6].mark
    ) {
      return board[6].mark;
    } else if (
      board[1].mark !== '' &&
      board[1].mark === board[4].mark &&
      board[4].mark === board[7].mark
    ) {
      return board[7].mark;
    } else if (
      board[2].mark !== '' &&
      board[2].mark === board[5].mark &&
      board[5].mark === board[8].mark
    ) {
      return board[8].mark;
    } else if (
      board[0].mark !== '' &&
      board[0].mark === board[4].mark &&
      board[4].mark === board[8].mark
    ) {
      return board[8].mark;
    } else if (
      board[2].mark !== '' &&
      board[2].mark === board[4].mark &&
      board[4].mark === board[6].mark
    ) {
      return board[6].mark;
    } else {
      return false;
    }
  };

  const stalemate = () => {
    return board.filter((box) => box.mark === '').length === 0;
  };

  const matchStatus = () => {
    if (!active) return;
    const win = winner();
    if (win) {
      setMessage(`I guess you won, ${win}!`);
      setActive(false);
    } else if (stalemate()) {
      setMessage('STALEMATE!');
      setActive(false);
    }
  };

  matchStatus();

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
