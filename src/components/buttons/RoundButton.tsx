import React from "react";

interface RoundButtonProps {
  onClick: Function,
  isActive?: boolean,
  icon?: string,
  text?: string,
  size?: string,
  optionalText?: string
}

export const RoundButton: React.FC<RoundButtonProps> = props => {

  const style = {
    width: props.size === undefined ? '3.5rem' : props.size,
    height: props.size === undefined ? '3.5rem' : props.size
  };

  const handleClick = () => {
    if (!props.isActive) {
      return;
    }
    props.onClick()
  };

  return (
    <div className={`RoundButton button ${props.isActive ? 'enabled' : 'disabled'}`}
         style={style}
         onClick={handleClick}>
      {props.icon ? <img src={props.icon} alt='icon'/> : null}
      {props.text? <p>{props.text}</p> : null}
      {props.optionalText ? <p><i>{props.optionalText}</i></p> : null}
    </div>
  )
}
