import React, {CSSProperties} from 'react';
import {calcLineStyle} from "../../services/lineRotationService";

interface EntryLabelProps {
  text: string,
  subtitle?: string,
  lineLength: number,
  lineRotation: number,
  orientation: string,
  onMouseEnter: Function,
  style?: CSSProperties
}

export const EntryLabel: React.FC<EntryLabelProps> = props => {
  const lineHeight = 1;
  const lineStyle = calcLineStyle(props.orientation, props.lineRotation, lineHeight, props.lineLength);

  const onMouseEnter = () => {
    if (props.onMouseEnter !== undefined) {
      props.onMouseEnter();
    }
  }

  return (
    <div className={`EntryLabel ${props.orientation}`}
         style={props.style}
         onMouseEnter={onMouseEnter}>
      <h3>{props.text}</h3>
      <div className='label-line' style={lineStyle}/>
      {props.subtitle !== undefined ? <p>{props.subtitle}</p> : null}
    </div>
  )
}
