import React from 'react';
import closeIcon from '../../res/icons/arrow_right.svg';
import {RoundButton} from '../buttons/RoundButton';

interface SlideInContainerProps {
  onCloseButtonClicked: Function
}

export const SlideInContainer: React.FC<SlideInContainerProps> = props => {

  return (
    <div className='SlideInContainer'>
      <RoundButton onClick={props.onCloseButtonClicked} icon={closeIcon}/>
      <div className='content-container'>
        {props.children}
      </div>
    </div>
  )
}
