import React from 'react';

interface RectButtonProps {
  className?: string,
  onClick: Function,
  isActive?: boolean,
  text: string,
  width?: string,
  height?: string
}

export const RectButton: React.FC<RectButtonProps> = props => {

  const buttonIsActive = props.isActive === undefined ? true : props.isActive;

  const handleClick = () => {
    if (!buttonIsActive) {
      return;
    }
    props.onClick()
  };

  return (
    <div className={`RectButton ${props.className} button ${buttonIsActive ? 'enabled' : 'disabled'}`}
         onClick={handleClick}>
      <p>{props.text}</p>
    </div>
  )
}
