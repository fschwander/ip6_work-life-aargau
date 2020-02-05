import React from 'react';


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

  return (
    <div className='LocationLabel'
         style={{left: `${props.posLeftInPct}%`, top: `${props.posTopInPct}%`}}>
      <p>{props.subtitle}</p>
      <h3>{props.title}</h3>
    </div>
  )
}
