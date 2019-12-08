import React, {useState} from 'react';
import {HoverPoint} from './HoverPoint';

interface Props {
  className?: string,
  text: string,
  type?: string,
  onActivate: Function,
  onDeactivate: Function
}

export const HoverPointWithLabel: React.FC<Props> = props => {
  const [isActive, setIsActive] = useState(false);

  const onActivate = () => {
    props.onActivate();
    setIsActive(true);
  }

  const onDeactivate = () => {
    props.onDeactivate();
    setIsActive(false);
  }

  return (
    <div className={`HoverPointWithLabel ${props.className} ${isActive ? 'is-active' : ''} ${props.type !== undefined ? props.type : ''}`}
         onMouseLeave={onDeactivate}>
      <HoverPoint onMouseEnter={onActivate}
                  onClick={() => console.log('clicked')}/>
      <h4 className='label'>{props.text}</h4>
    </div>
  )
}
