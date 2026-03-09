import { useState } from "react";

export default function Button({buttonClick, buttonStyle, buttonContent}) {
  const [isHovered, setIsHovered] = useState(false);

  const combinedStyle ={
    ...buttonStyle,
    transform: isHovered?'scale(1.05)':'scale(1)'
  }

  return <div 
          onClick={buttonClick}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
            style={combinedStyle}
          >
            {buttonContent} 
        </div>;
}