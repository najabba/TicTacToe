import { useState } from 'react';
import Button from './components/Button';
import { langButtonStyle, cellGridStyle, gameContainerStyle, gameNameStyle, gameStatusStyle, gridContainerStyle, gridStyle, resetButtonStyle } from './components/gameStyle';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [count, setCount] = useState(0);
  const [lang, setLang] = useState('en');
  const text = {
    'name' : {'fr': 'MORPION', 'en': 'TIC-TAC TOE'},
    'winner' : {'fr': 'VAINQUEUR', 'en': 'WINNER'},
    'draw' : {'fr': 'MATCH NUL', 'en': 'DRAW'},
    'next' : {'fr': 'JOUEUR SUIVANT', 'en': 'NEXT PLAYER'},
    'reset' : {'fr': 'RECOMMENCER', 'en': 'RESET'}
  };

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setCount(count+1);
  }

  const winner = calculateWinner(squares);
  const status = winner ? `${text['winner'][lang]}: ${winner[0]}` :  ( count===9 ? `${text['draw'][lang]}` : `${text['next'][lang]}: ${xIsNext ? 'X' : 'O'}`) ;
  const gameName = `${text['name'][lang]}`

  return (
    <div style={gameContainerStyle}>
      <Button
      buttonClick={()=> {setLang(lang==='fr'?'en':'fr')}}
      buttonStyle={langButtonStyle}
      buttonContent={lang==='fr'?'CHANGE TO EN':'PASSER EN FR'}
      />
      <h1 style={gameNameStyle}>{gameName}</h1>
      <h3 style={gameStatusStyle(winner)} >{status}</h3>
      <div style={gridContainerStyle}>
          <div style={gridStyle}>
            {squares.map((sq, i) => (
              <button key={i} onClick={() => handleClick(i)} style={cellGridStyle({winner,sq,i})}>
                {sq}
              </button>
            ))}
          </div>  
          <Button 
          buttonClick={() => {
                setSquares(Array(9).fill(null));
                setXIsNext(true);
                setCount(0)}}
          buttonStyle={resetButtonStyle}
          buttonContent={text['reset'][lang]} />
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
