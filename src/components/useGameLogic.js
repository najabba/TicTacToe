import { useState } from "react";

export default function useGameLogic() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [count, setCount] = useState(0);

  function calculateWinner(squares) {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return [squares[a],a,b,c];
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setCount(count+1);
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setCount(0);
  };

  const winner = calculateWinner(squares);

  return { squares, xIsNext, count, winner, handleClick, resetGame };

}