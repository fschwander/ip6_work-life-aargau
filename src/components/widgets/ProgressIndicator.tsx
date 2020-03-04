import React, {createRef, RefObject, useEffect, useRef} from 'react';
import {ReactComponent as SkipSVG} from '../../res/icons/skip.svg';
import {ReactComponent as IndicatorSVG} from '../../res/icons/progress-indicator.svg';

interface ProgressIndicatorProps {
  animDurationInSec: number,
  animationPaused?: boolean,
  callbackAfterAnimation?: Function,
  onElementClicked: Function
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = props => {
  const indicatorRef: RefObject<SVGSVGElement> = createRef();
  const isInitialMount = useRef(true);

  const onClick = () => {
    if (props.onElementClicked) {
      props.onElementClicked()
    }
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }

    if (indicatorRef.current) {
      const path = indicatorRef.current.getElementsByTagName('path')[0];
      const pathLength = path.getTotalLength().toString();

      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
      path.style.animationDuration = props.animDurationInSec + 's';
      path.style.animationPlayState = props.animationPaused ? 'paused' : 'running';
    }
  });

  return (
    <div className={`ProgressIndicator button`} onClick={onClick}>
      <IndicatorSVG ref={indicatorRef}/>
      <SkipSVG className={`icon`}/>
    </div>
  )
};
