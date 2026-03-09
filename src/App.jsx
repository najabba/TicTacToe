import { useState } from 'react';
import Button from './components/Button';
import { langButtonStyle, gameContainerStyle, gameNameStyle, gameStatusStyle, gridContainerStyle, resetButtonStyle, gameNameContainerStyle } from './components/gameStyle';
import { text } from './components/wordTrad';
import Grid from './components/Grid';
import useGameLogic from './components/useGameLogic';

export default function App() {
  const { squares, xIsNext, count, winner, handleClick, resetGame } = useGameLogic();
  const [lang, setLang] = useState('en');

  const status = winner ? `${text['winner'][lang]}: ${winner[0]}` :  ( count===9 ? `${text['draw'][lang]}` : `${text['next'][lang]}: ${xIsNext ? 'X' : 'O'}`) ;
  const gameName = `${text['name'][lang]}`

  return (
    <div style={gameContainerStyle}>
      <Button
      buttonClick={()=> {setLang(lang==='fr'?'en':'fr')}}
      buttonStyle={langButtonStyle}
      buttonContent={lang==='fr'?'CHANGE LANGUAGE':'CHANGER LANGUE'}
      />
      <div style={gameNameContainerStyle}>
        <h1 style={gameNameStyle}>{gameName}</h1>
      </div>
      <h3 style={gameStatusStyle(winner)} >{status}</h3>
      <div style={gridContainerStyle}>
          <Grid squares={squares} click={handleClick} count={count} winner={winner} />
          <Button 
          buttonClick={()=>resetGame()}
          buttonStyle={resetButtonStyle}
          buttonContent={text['reset'][lang]} />
      </div>
    </div>
  );
}
