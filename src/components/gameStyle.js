export const gameContainerStyle = {
    position: 'relative', 
    display: 'flex', 
    width: '100vw', 
    minHeight: '100vh', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontFamily: 'sans-serif', 
    backgroundImage: `url('/tictactoe.png')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' 
}

export const gameNameContainerStyle = {
    backgroundColor: 'rgba(255,255,255,0.9)',
    cursor: 'default',
    padding: "10px",
    borderRadius: "12px"
}

export const gameNameStyle = {
    backgroundImage: 'linear-gradient(to right, hsl(0,100%,40%), hsl(240,50%,40%))',
    backgroundClip: 'text',
    color:'transparent',
    cursor: 'default',
    margin: 0,
    fontSize: '4em',
    fontWeight: 'bold'
}

export const gameStatusStyle = (winner) => ({
    color: !winner ? 'black' : winner[0]==='X'?'hsl(0,100%,30%)':'hsl(240,50%,30%)', 
    cursor: 'default', 
    backgroundColor: "rgba(255,255,255,0.9)", 
    padding: "10px", 
    borderRadius: "12px", 
    border: "2px solid black",
    fontSize: '1.5em'
})

export const gridContainerStyle = { 
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
}

export const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gap: '5px'
}

export const cellGridStyle = ({count,winner,sq,i})=>({
    backgroundColor: (winner && (winner.includes(i)))? (winner[0]==='X'?'hsl(0,30%,90%)':'hsl(240,50%,90%)'):'white',
    cursor: winner||count===9?'default':'pointer',
    height: '100px',
    fontSize: '24px',
    border: "2px solid black", 
    color: sq==='X'?'hsl(0,100%,30%)':'hsl(240,50%,30%)'
})

export const resetButtonStyle = { 
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
  }

export const langButtonStyle = { 
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
}