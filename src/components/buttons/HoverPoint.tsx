import React, {useState} from 'react';

interface HoverPointProps {
  onMouseEnter?: Function,
  onMouseLeave?: Function,
  onClick?: Function
}

export const HoverPoint: React.FC<HoverPointProps> = props => {
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    if (props.onMouseEnter !== undefined) {
      props.onMouseEnter();
    }
    setIsActive(true)
  }

  const onMouseLeave = () => {
    if (props.onMouseLeave !== undefined) {
      props.onMouseLeave();
    }
    setIsActive(false)
  }

  const onClick = () => {
    if (props.onClick !== undefined) {
      props.onClick();
    }
  }

  return (
    <div className={`HoverPoint ${isActive ? 'is-active' : ''} ${props.onClick !== undefined ? 'button' : ''}`}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         onClick={onClick}>
      <div className='circle outer-circle'/>
      <div className='circle inner-circle'/>
    </div>
  )
}
