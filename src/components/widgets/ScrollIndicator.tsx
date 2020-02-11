import React from 'react';
import {ReactComponent as MouseSVG} from '../../res/icons/mouse.svg';

interface ScrollIndicatorProps {
  show: boolean
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = props => {
  return (
    <div className={`ScrollIndicator ${props.show ? 'show' : 'hide'}`}>
      <MouseSVG/>
      <h4>Scroll</h4>
    </div>
  )
}
