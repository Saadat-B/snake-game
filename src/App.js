import { useState } from "react";
import "./App.css";

function App() {
  let totalGridSize = 20;

  let initialSnakePosition = [
    { x: totalGridSize / 2, y: totalGridSize / 2 },
    { x: totalGridSize / 2 + 1, y: totalGridSize / 2 },
  ];

  const [food, setFood] = useState({ x: 5, y: 5 });
  const [snake, setSnake] = useState(initialSnakePosition);

  const renderBoard = () => {
    let cellArray = [];

    for (let row = 0; row < totalGridSize; row++) {
      for (let col = 0; col < totalGridSize; col++) {
        let className = "cell";

        let isFood = food.x === row && food.y === col;

        let isSnake = snake.some((ele) => ele.x === row && ele.y === col);

        let isSnakeHead = snake[0].x === row && snake[0].y === col;

        if (isSnakeHead) {
          className = className + " snakeHead";
        }

        if (isSnake) {
          className = className + " snake";
        }

        if (isFood) {
          className = className + " food";
        }

        let cell = <div className={className} key={`${row}-${col}`}></div>;
        cellArray.push(cell);
      }
    }

    return cellArray;
  };

  return (
    <div className="container">
      <div className="score">
        Score : <span>30</span>
      </div>
      <div className="board">{renderBoard()}</div>
    </div>
  );
}

export default App;
