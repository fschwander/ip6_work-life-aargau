import React, {CSSProperties} from 'react';
import {LineRotationService} from "../../services/LineRotationService";

interface EntryLabelProps {
  text: string,
  subtitle?: string,
  lineWidth: number,
  lineRotationInDeg: number,
  orientation: string,
  style?: CSSProperties
}

export const EntryLabel: React.FC<EntryLabelProps> = props => {

  const deg = props.lineRotationInDeg;
  const orientation = props.orientation;
  const lineHeight = 1;

  const lineTranslate = LineRotationService.getLineTransform(orientation, deg, lineHeight);
  const lineTransformOrigin = LineRotationService.getTransformOrigin(orientation, deg);
  const realLineRotation = LineRotationService.getRealLineRotation(orientation, deg);

  const lineStyle = {
    width: `${props.lineWidth}px`,
    transform: `translateY(${lineTranslate}px) rotate(${realLineRotation}deg)`,
    transformOrigin: lineTransformOrigin
  }

  return (
    <div className={`EntryLabel ${props.orientation}`} style={props.style}>
      <h3>{props.text}</h3>
      <div className='label-line' style={lineStyle}/>
      {props.subtitle !== undefined ? <p>{props.subtitle}</p> : null}
    </div>
  )
}
