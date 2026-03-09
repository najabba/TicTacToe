import { useState } from "react";
import { cellGridStyle, gridStyle } from "./gameStyle"

export default function Grid({squares,click,count,winner}) {
    const [isHovered, setIsHovered] = useState(null);

    return  <div style={gridStyle}> 
                    {squares.map((sq, i) => (
                    <button 
                    key={i} 
                    onClick={() => click(i)} 
                    onMouseEnter={()=>{setIsHovered(i)}}
                    onMouseLeave={()=>{setIsHovered(null)}}
                    style={{
                        ...cellGridStyle({count,winner,sq,i}),
                        transform: !winner && (isHovered === i) && (count<9) ?'scale(1.05)':'scale(1)',
                        filter: !winner && (isHovered === i) && (count<9) ? 'brightness(0.85)' : 'brightness(1)',
                        transition: 'filter 0.2s ease'
                    }}>
                        {sq}
                    </button>
                    ))}
                </div>  
}