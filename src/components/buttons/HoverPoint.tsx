import React, {useState} from 'react';

interface HoverPointProps {
  mouseEnter?: Function,
  mouseLeave?: Function,
  mouseClicked: Function
}

export const HoverPoint: React.FC<HoverPointProps> = props => {
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    if (props.mouseEnter !== undefined) {
      props.mouseEnter();
    }
    setIsActive(true)
  }

  const onMouseLeave = () => {
    if (props.mouseLeave !== undefined) {
      props.mouseLeave();
    }
    setIsActive(false)
  }

  const onClick = () => {
    props.mouseClicked();
  }

  return (
    <div className={`HoverPoint ${isActive ? 'is-active' : ''}`}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         onClick={onClick}>
      <div className='circle button outer-circle'/>
      <div className='circle button inner-circle'/>
    </div>
  )
}
