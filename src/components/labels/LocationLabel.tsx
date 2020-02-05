import React, {createRef, useEffect, useState} from 'react';
import {calcLineStyle} from '../../services/lineRotationService';
import {RoundButton} from "../buttons/RoundButton";

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
  const [deltaValues, setDeltaValues] = useState({deltaX: 0, deltaY: 0})
  const containerRef: React.RefObject<HTMLDivElement> = createRef();

  const lineHeight = 1;
  const lineStyle = calcLineStyle(props.orientation, props.lineRotation, lineHeight, props.lineLength)

  const calcContainerTransition = (): void => {
    if (containerRef.current !== null) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      let deltaX, deltaY;

      const c = props.lineLength;
      const beta = props.lineRotation;

      const b = c * Math.cos(beta * Math.PI / 180);
      const a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));

      if (props.orientation === 'right') {
        deltaX = -width - a;
        deltaY = -height + b;
      } else {
        deltaX = -a;
        deltaY = -height + b;
      }
      setDeltaValues({deltaX: deltaX, deltaY: deltaY})
    }
  };

  useEffect(() => {
    calcContainerTransition()
  }, []);

  return (
    <div className='LocationLabel'
         style={{left: `${props.posLeftInPct}%`, top: `${props.posTopInPct}%`}}>

      <div className='transition-container' ref={containerRef}
           style={{left: deltaValues.deltaX, top: deltaValues.deltaY}}>

        <RoundButton size='2em'
                     borderWidth={1}
                     icon={props.iconSrc}
                     onClick={() => console.log('clicked')}/>

        <p>{props.subtitle}</p>
        <h4>{props.title}</h4>
        <div className={`label-line ${props.orientation}`}
             style={lineStyle}/>
      </div>
    </div>
  )
}
