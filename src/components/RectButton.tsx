import React from 'react';
import './RectButton.scss'

interface RectButtonProps {
  className?: string,
  onClick: Function,
  isActive: boolean,
  text: string,
  width?: string,
  height?: string
}

export const RectButton: React.FC<RectButtonProps> = props => {

  const handleClick = () => {
    if (!props.isActive) {
      return;
    }
    props.onClick()
  };

  return (
    <div className={`RectButton button ${props.isActive ? 'enabled' : 'disabled'}`}
         onClick={handleClick}>
      <p>{props.text}</p>
    </div>
  )
}
