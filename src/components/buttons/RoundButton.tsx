import React from "react";

interface RoundButtonProps {
  onClick: Function,
  isActive?: boolean,
  icon?: string,
  text?: string,
  size?: string,
  optionalText?: string,
  borderWidth?: number
}

export const RoundButton: React.FC<RoundButtonProps> = props => {

  const rootStyle = {
    width: props.size === undefined ? '3.5rem' : props.size,
    height: props.size === undefined ? '3.5rem' : props.size,
    borderWidth: props.borderWidth === undefined ? '2px' : props.borderWidth + 'px'
  };

  const handleClick = () => {
    if (props.isActive || props.isActive === undefined) {
      props.onClick()
    }
  };

  return (
    <div
      className={`RoundButton button border-button ${props.isActive || props.isActive === undefined ? 'enabled' : 'disabled'}`}
      style={rootStyle}
      onClick={handleClick}>
      {props.icon ? <img src={props.icon} alt='icon'/> : null}
      {props.text ? <p>{props.text}</p> : null}
      {props.optionalText ? <p><i>{props.optionalText}</i></p> : null}
    </div>
  )
}
