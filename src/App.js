import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <h1>Shall we Tic-Tac?</h1>
      <Header />
      <Board />
    </div>
  );
}

export default App;
