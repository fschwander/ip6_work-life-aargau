import React, {createRef, RefObject, useEffect, useRef} from 'react';
import {ReactComponent as StopSVG} from '../../res/figures/square-full.svg';
import {ReactComponent as PlaySVG} from '../../res/figures/triangle-full.svg';
import {ReactComponent as IndicatorSVG} from '../../res/icons/progress-indicator.svg';

interface ProgressIndicatorProps {
  animDurationInSec: number,
  animationPaused: boolean,
  callbackAfterAnimation: Function,
  onElementClicked: Function
}

let timer: Timer;

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
      timer = new Timer(props.callbackAfterAnimation, props.animDurationInSec * 1000)
    }
    props.animationPaused ? timer.pause() : timer.resume()

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
      <PlaySVG className={`icon play ${props.animationPaused ? 'show' : 'hide'}`}/>
      <StopSVG className={`icon stop ${props.animationPaused ? 'hide' : 'show'}`}/>
    </div>
  )
};

class Timer {
  timerId: number;
  start: number;
  remaining: number;
  callback: Function;
  isPaused: boolean;

  constructor(callback: Function, delay: number) {
    this.timerId = window.setTimeout(() => this.callback(), delay);
    this.start = delay;
    this.remaining = delay;
    this.callback = callback;
    this.isPaused = false;
  }

  pause = function(this: Timer) {
    if (!this.isPaused) {
      this.isPaused = true;
      window.clearTimeout(this.timerId);
      this.remaining -= Date.now() - this.start;
    }
  };

  resume = function(this: Timer) {
    this.isPaused = false;
    this.start = Date.now();
    window.clearTimeout(this.timerId);
    this.timerId = window.setTimeout(() => this.callback(), this.remaining);
  };

  getIsPaused = function(this: Timer) {
    return this.isPaused;
  }
}
