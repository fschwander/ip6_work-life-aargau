import React, {createRef, CSSProperties, useEffect, useState} from 'react';
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

  const lineHeight = 1;
  const lineStyle = calcLineStyle(props.orientation, props.lineRotation, lineHeight, props.lineLength)
  const containerRef: React.RefObject<HTMLDivElement> = createRef()

  const calcContainerTransition = (): void => {
    if (containerRef.current !== null) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      let deltaX = 0;
      let deltaY = 0;

      if (props.orientation === 'right') {
        deltaX = -width;
        deltaY = -height;
      } else {
        deltaY = -height;
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
        <div className={`label-line ${props.orientation}`} style={lineStyle}/>
      </div>
    </div>
  )
}
