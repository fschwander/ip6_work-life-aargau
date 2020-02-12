import React, {createRef, RefObject, useEffect} from 'react';
import {ReactComponent as IndicatorSVG} from '../../res/icons/progress-indicator.svg';

export const ProgressIndicator: React.FC = () => {
  const indicatorRef:RefObject<SVGSVGElement> = createRef();

  useEffect(() => {
    if(indicatorRef.current) {
      const path = indicatorRef.current.getElementsByTagName('path')[0];
      const pathLength = path.getTotalLength().toString();

      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
    }
  });

  return(
    <div className={`ProgressIndicator`}>
      <IndicatorSVG ref={indicatorRef}/>
    </div>
  )
};
