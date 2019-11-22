import React from "react";
import './CircleButton.scss'

interface CircleButtonProps {
  size: string,
  onClick: Function,
  isActive?: boolean,
  icon?: string,
  text?: string,
  optionalText?: string
}

export const CircleButton: React.FC<CircleButtonProps> = props => {

  const handleClick = () => {
    if (!props.isActive) {
      return;
    }
    props.onClick()
  };

  return (
    <div className={`CircleButton button ${props.isActive ? 'enabled' : 'disabled'}`}
         style={{width: props.size, height: props.size}}
         onClick={handleClick}>
      <img src={props.icon} alt='icon'/>
      <p>{props.text}</p>
      <p><i>{props.optionalText}</i></p>
    </div>
  )
}
