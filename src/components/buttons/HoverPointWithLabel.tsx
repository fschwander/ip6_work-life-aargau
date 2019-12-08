import React, {useState} from 'react';
import {HoverPoint} from './HoverPoint';

interface Props {
  className?: string,
  text: string,
  type?: string,
  hOrientation?: string,
  onActivate: Function,
  onDeactivate: Function
}

export const HoverPointWithLabel: React.FC<Props> = props => {
  const [isActive, setIsActive] = useState(false);

  const getRootClass = () => {
    let rootClass = `HoverPointWithLabel ${props.className}`;
    rootClass += isActive ? ' is-active' : '';
    rootClass += props.type !== undefined ? ' ' + props.type : '';
    rootClass += props.hOrientation !== undefined ? ' ' + props.hOrientation : '';
    return rootClass;
  }

  const onActivate = () => {
    props.onActivate();
    setIsActive(true);
  }

  const onDeactivate = () => {
    props.onDeactivate();
    setIsActive(false);
  }

  return (
    <div
      className={getRootClass()}
      onMouseLeave={onDeactivate}>
      <HoverPoint
        onMouseEnter={onActivate}
        onClick={() => console.log('clicked')}/>
      <h4 className='label'>{props.text}</h4>
    </div>
  )
}
