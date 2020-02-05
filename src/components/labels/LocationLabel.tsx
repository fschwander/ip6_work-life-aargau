import React from 'react';
import {LineRotationService} from "../../services/LineRotationService";

export interface LocationLabelProps {
  subtitle: string,
  title: string,
  svgComponent: any,
  iconSrc: any,
  posLeftInPct: number,
  posTopInPct: number,
  lineLength: number,
  lineRotation: number,
  orientation: string
}

export const LocationLabel: React.FC<LocationLabelProps> = props => {

  const lineStyle = LineRotationService.calcLineStyle(props.orientation,props.lineRotation,1, props.lineLength);

  return (
    <div className='LocationLabel'
         style={{left: `${props.posLeftInPct}%`, top: `${props.posTopInPct}%`}}>
      <p>{props.subtitle}</p>
      <h3>{props.title}</h3>
      <div className='label-line' style={lineStyle}/>
    </div>
  )
}
