import React, {createRef, RefObject, useEffect, useRef, useState} from 'react';
import {ReactComponent as SkipSVG} from '../../res/icons/skip.svg';
import {ReactComponent as IndicatorSVG} from '../../res/icons/progress-indicator.svg';

interface ProgressIndicatorProps {
  animDurationInSec: number,
  animationPaused: boolean,
  callbackAfterAnimation?: Function,
  onElementClicked: Function
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = props => {
  const indicatorRef: RefObject<SVGSVGElement> = createRef();
  const isInitialMount = useRef(true);
  const [animationEnded, setAnimationEnded] = useState(false);

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
      path.addEventListener('animationend', () => setAnimationEnded(true))
    }
  });

  return (
    <div className={`ProgressIndicator button ${animationEnded ? 'glow':''}`} onClick={onClick}>
      <IndicatorSVG ref={indicatorRef} className={`${props.animationPaused ? 'hide' : 'show'}`}/>
      <SkipSVG className={`icon`}/>
    </div>
  )
};
