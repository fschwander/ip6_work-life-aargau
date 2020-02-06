import React, {createRef, CSSProperties, FunctionComponent, SVGProps, useEffect, useState} from 'react';
import {calcLineStyle} from '../../services/lineRotationService';
import {RoundButton} from "../buttons/RoundButton";

export interface PoiLabelProps {
  subtitle: string,
  title: string,
  svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>,
  iconSrc: string,
  posLeftInPct: number,
  posTopInPct: number,
  lineLength: number,
  lineRotation: number,
  orientation: string,
  hoverPointStyles?: CSSProperties
}

export const PoiLabel: React.FC<PoiLabelProps> = props => {
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
    <div className='PoiLabel'
         ref={containerRef}
         style={{
           ...props.hoverPointStyles,
           left: `calc(${props.posLeftInPct}% + ${deltaValues.deltaX}px)`,
           top: `calc(${props.posTopInPct}% + ${deltaValues.deltaY}px`
         }}>

      <RoundButton size='2.5em'
                   borderWidth={1}
                   icon={props.iconSrc}
                   onClick={() => console.log('clicked')}/>

      <p>{props.subtitle}</p>
      <h4>{props.title}</h4>
      <div className={`label-line ${props.orientation}`}
           style={lineStyle}/>
    </div>
  )
}
