import React from 'react';
import {ReactComponent as MouseSVG} from '../../res/icons/mouse.svg';

export const ScrollIndicator: React.FC = props => {
  return (
    <div className='ScrollIndicator'>
      <MouseSVG/>
      <h4>Scroll</h4>
    </div>
  )
}
