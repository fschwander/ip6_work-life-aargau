import React, {useState} from 'react';
import {HoverPoint} from './HoverPoint';

interface Props {
  className?: string,
  text: string,
  type?: string,
  hOrientation?: string,
  onMouseEnter: Function,
  onMouseLeave: Function,
  onClick?: Function
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
    props.onMouseEnter();
    setIsActive(true);
  }

  const onDeactivate = () => {
    props.onMouseLeave();
    setIsActive(false);
  }

  const onClick =() => {
    if(props.onClick !== undefined) {
      props.onClick();
    }
  }

  return (
    <div
      className={getRootClass()}
      onMouseLeave={onDeactivate}>
      <HoverPoint
        onMouseEnter={onActivate}
        onClick={onClick}/>
      <h4 className='label'>{props.text}</h4>
    </div>
  )
}
