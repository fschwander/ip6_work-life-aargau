import React, {useState} from 'react';
import './HoverPoint.scss';

interface HoverPointProps {
  className: string,
  mouseEnter: Function,
  mouseLeave: Function,
  mouseClicked: Function
}

export const HoverPoint: React.FC<HoverPointProps> = props => {
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    props.mouseEnter();
    setIsActive(true)
  }

  const onMouseLeave = () => {
    props.mouseLeave();
    setIsActive(false)
  }

  const onClick = () => {
    props.mouseClicked();
  }

  return (
    <div className={`HoverPoint ${props.className} ${isActive ? 'is-active' : ''}`}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         onClick={onClick}>
      <div className='circle button outer-circle'/>
      <div className='circle button inner-circle'/>
    </div>
  )
}
