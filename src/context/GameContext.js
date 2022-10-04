import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [board, setBoard] = useState();
  const [message, setMessage] = useState();
  const [activePlayer, setActivePlayer] = useState();



  return (
    <GameContext.Provider value={{ board, setBoard, message, setMessage, activePlayer, setActivePlayer }}
    > {children} </GameContext.Provider> 
  );
};

const useGameContext = () => {
  const useGame = useContext(GameContext);
  if (useGame === undefined) {
    throw new Error('');
  }
};

export { useGameContext, GameProvider, GameContext };