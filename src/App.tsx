import { GameBoard } from "./components/GameBoard";
import { SnakeCell } from "./components/SnakeCell";

function App() {
  return (
    <>
      <GameBoard>
        <SnakeCell position={{ x: 10, y: 10 }} />
        <SnakeCell position={{ x: 10, y: 20 }} />
        <SnakeCell position={{ x: 10, y: 30 }} />
      </GameBoard>
    </>
  );
}

export default App;
