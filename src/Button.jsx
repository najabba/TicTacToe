
export default function Button({buttonClick, buttonStyle, buttonContent}) {
    return <div 
            onClick={buttonClick}
              style={buttonStyle}
            >
             {buttonContent} 
          </div>;
}