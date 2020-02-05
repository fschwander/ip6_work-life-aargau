import React, {CSSProperties} from 'react';
import {calcLineStyle} from "../../services/lineRotationService";

interface EntryLabelProps {
  text: string,
  subtitle?: string,
  lineLength: number,
  lineRotation: number,
  orientation: string,
  style?: CSSProperties
}

export const EntryLabel: React.FC<EntryLabelProps> = props => {
  const lineHeight = 1;

  const lineStyle = calcLineStyle(props.orientation,
    props.lineRotation,
    lineHeight,
    props.lineLength)

  return (
    <div className={`EntryLabel ${props.orientation}`} style={props.style}>
      <h3>{props.text}</h3>
      <div className='label-line' style={lineStyle}/>
      {props.subtitle !== undefined ? <p>{props.subtitle}</p> : null}
    </div>
  )
}
