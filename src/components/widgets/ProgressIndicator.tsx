import React, {createRef, RefObject, useEffect} from 'react';
import {ReactComponent as IndicatorSVG} from '../../res/icons/progress-indicator.svg';

interface ProgressIndicatorProps {
  animDurationInSec: number,
  animationPaused: boolean,
  callbackAfterAnimation: Function
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = props => {
  const indicatorRef:RefObject<SVGSVGElement> = createRef();

  useEffect(() => {
    if(indicatorRef.current) {
      const path = indicatorRef.current.getElementsByTagName('path')[0];
      const pathLength = path.getTotalLength().toString();

      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
      path.style.animationDuration = props.animDurationInSec + 's';
      path.style.animationPlayState = props.animationPaused ? 'paused' : 'running';
    }

    setTimeout(props.callbackAfterAnimation, props.animDurationInSec * 1000)
  });

  return(
    <div className={`ProgressIndicator`}>
      <IndicatorSVG ref={indicatorRef}/>
    </div>
  )
};
