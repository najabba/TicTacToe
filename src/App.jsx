import { useState } from 'react';
import Button from './Button';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [count, setCount] = useState(0);
  const [lang, setLang] = useState('en');
  const text = [
    {'fr': 'MORPION', 'en': 'TIC-TAC TOE'},
    {'fr': 'VAINQUEUR', 'en': 'WINNER'},
    {'fr': 'MATCH NUL', 'en': 'DRAW'},
    {'fr': 'JOUEUR SUIVANT', 'en': 'NEXT PLAYER'},
    {'fr': 'RECOMMENCER', 'en': 'RESET'}
  ];

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setCount(count+1);
  }

  const winner = calculateWinner(squares);
  const status = winner ? `${text[1][lang]}: ${winner[0]}` :  ( count===9 ? `${text[2][lang]}` : `${text[3][lang]}: ${xIsNext ? 'X' : 'O'}`) ;
  const gameName = `${text[0][lang]}`

  return (
    <div style={{position: 'relative', display: 'flex', width: '100vw', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', backgroundImage: `url('/tictactoe.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Button
      buttonClick={()=> {setLang(lang==='fr'?'en':'fr')}}
      buttonStyle={{ 
        color: 'black',
        position: 'absolute',
        top: '20px',        
        right: '20px',
        paddingRight: '20px',
        paddingLeft: '20px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: '12px',
        border: '2px solid black',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.2s'
      }}
      buttonContent={lang==='fr'?'CHANGE TO EN':'PASSER EN FR'}
      />
      <h1 style={{color: 'black', cursor: 'default', backgroundColor: "white", padding: "10px", borderRadius: "12px", border: "2px solid black"}}>{gameName}</h1>
      <h3 style={{color: !winner ? 'black' : winner[0]==='X'?'hsl(0,100%,30%)':'hsl(240,50%,30%)', cursor: 'default', backgroundColor: "white", padding: "10px", borderRadius: "12px", border: "2px solid black"}} >{status}</h3>
      <div style={{ 
        color: 'black',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '30px',
        backgroundColor: 'rgba(255,255,255,0.8)',
        border: "2px solid black",
        borderRadius: '12px',
        padding: '10px'
        }}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' }}>
            {squares.map((sq, i) => (
              <button key={i} onClick={() => handleClick(i)} style={{ backgroundColor: (winner && (winner.includes(i)))? (winner[0]==='X'?'hsl(0,20%,30%)':'hsl(240,10%,30%)'):'gray'  , cursor: winner?'default':'pointer', height: '100px', fontSize: '24px', border: "2px solid black", color: sq==='X'?'hsl(0,100%,30%)':'hsl(240,50%,30%)' }}>
                {sq}
              </button>
            ))}
          </div>  
          <Button 
          buttonClick={() => {
                setSquares(Array(9).fill(null));
                setXIsNext(true);
                setCount(0)}}
          buttonStyle={{ 
            paddingRight: '20px',
            paddingLeft: '20px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: "white",
            borderRadius: '12px',
            border: '2px solid black',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '24px',
            userSelect: 'none',
            transition: 'all 0.2s'
          }}
          buttonContent={text[4][lang]} />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return [squares[a],a,b,c];
  }
  return null;
}
