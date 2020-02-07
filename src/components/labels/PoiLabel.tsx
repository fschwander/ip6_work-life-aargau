import React, {createRef, CSSProperties, FunctionComponent, SVGProps, useEffect, useRef, useState} from 'react';
import {SlideInOverlayInterface} from '../../pages/video/data/SlideInOverlayInterface';
import {calcLineStyle} from '../../services/lineRotationService';
import {RoundButton} from "../buttons/RoundButton";

export interface PoiLabelItem {
  subtitle: string,
  title: string,
  svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>,
  overlayData: SlideInOverlayInterface,
  iconSrc: string,
  posLeftInPct: number,
  posTopInPct: number,
  lineLength: number,
  lineRotation: number,
  orientation: string,
}

interface PoiLabelProps extends PoiLabelItem{
  onClick: Function,
  styles: CSSProperties
}

export const PoiLabel: React.FC<PoiLabelProps> = props => {
  const [deltaValues, setDeltaValues] = useState({deltaX: 0, deltaY: 0})
  const containerRef: React.RefObject<HTMLDivElement> = createRef();
  const isInitialMount = useRef(true);

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
    if (isInitialMount.current) {
      isInitialMount.current = false;
      calcContainerTransition();
    }
  });

  return (
    <div className='PoiLabel'
         ref={containerRef}
         style={{
           ...props.styles,
           left: `calc(${props.posLeftInPct}% + ${deltaValues.deltaX}px)`,
           top: `calc(${props.posTopInPct}% + ${deltaValues.deltaY}px`
         }}>

      <RoundButton size='2.5em'
                   borderWidth={1}
                   icon={props.iconSrc}
                   onClick={props.onClick}/>

      <p>{props.subtitle}</p>
      <h4>{props.title}</h4>
      <div className={`label-line ${props.orientation}`}
           style={lineStyle}/>
    </div>
  )
}
