import React, {useState} from 'react';
import './HoverPoint.scss';

interface HoverPointProps {
  className: string,
  mouseOverFct: Function
}

export const HoverPoint: React.FC<HoverPointProps> = props => {
  const [isActive, setIsActive] = useState(false);

  const onMouseOver = () => {
    props.mouseOverFct();
    setIsActive(true)
  }

  const onMouseOut = () => {
    setIsActive(false)
  }

  const onClick = () => {
    console.log('clicked');
  }

  return (
    <div className={`HoverPoint ${props.className} ${isActive ? 'is-active' : ''}`}
         onMouseOver={onMouseOver}
         onMouseOut={onMouseOut}
         onClick={onClick}>
      <div className='circle outer-circle'/>
      <div className='circle inner-circle'/>
    </div>
  )
}
