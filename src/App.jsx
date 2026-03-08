import { useState } from 'react';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  const gameName = 'Tic-Tac Toe'

  return (


    <div style={{ display: 'flex', width: '100vw', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1>{gameName}</h1>
      <h1>{status}</h1>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '40px',
        marginTop: '20px', 
        marginBottom: '20px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' }}>
            {squares.map((sq, i) => (
              <button key={i} onClick={() => handleClick(i)} style={{ height: '100px', fontSize: '24px' }}>
                {sq}
              </button>
            ))}
          </div>  
          {
            winner && (
              <div 
              onClick={() => {
                setSquares(Array(9).fill(null));
                setXIsNext(true);}
                } 
                style={{ 
                  paddingRight: '20px',
                  paddingLeft: '20px',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '12px',
                  border: '2px solid black',
                  cursor: 'pointer',
                  userSelect: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <h2> Reset </h2>
              </div>
            )
          }
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
}
