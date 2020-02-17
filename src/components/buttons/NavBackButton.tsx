import React from 'react';
import {ReactComponent as ArrowLeft} from '../../res/icons/arrow_left.svg';

interface NavBackButtonProps {
  text: string,
  onClick: Function
}

export const NavBackButton: React.FC<NavBackButtonProps> = props => {
  return (
    <div className='NavBackButton button horizontal-container'
         onClick={() => props.onClick()}>
      <ArrowLeft/>
      <p>{props.text}</p>
    </div>
  )
}
