import React, {createRef, RefObject, useEffect} from 'react';
import {ReactComponent as IndicatorSVG} from '../../res/icons/progress-indicator.svg';

interface ProgressIndicatorProps {
  animationDuration: number
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = props => {
  const indicatorRef:RefObject<SVGSVGElement> = createRef();

  useEffect(() => {
    if(indicatorRef.current) {
      const path = indicatorRef.current.getElementsByTagName('path')[0];
      const pathLength = path.getTotalLength().toString();

      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
      path.style.animationDuration = props.animationDuration + 's';
    }
  });

  return(
    <div className={`ProgressIndicator`}>
      <IndicatorSVG ref={indicatorRef}/>
    </div>
  )
};
