import React from 'react';
import './HoverPoint.scss';

interface HoverPointProps {
  className: string,
  mouseOverFct: Function
}

export const HoverPoint: React.FC<HoverPointProps> = props => {
  const onMouseOver = () => {
    props.mouseOverFct();
  }

  const onClick = () => {
    console.log('clicked');
  }

  return (
    <div className={`HoverPoint ${props.className}`}
         onMouseOver={onMouseOver}
         onClick={onClick}>
      <div className='circle outer-circle'/>
      <div className='circle inner-circle'/>
    </div>
  )
}
