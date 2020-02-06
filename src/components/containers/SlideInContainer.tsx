import React from 'react';
import closeIcon from '../../res/icons/arrow_right.svg';
import {RoundButton} from '../buttons/RoundButton';

export const SlideInContainer: React.FC = props => {

  return(
    <div className='SlideInContainer'>
      <RoundButton onClick={()=>console.log('will close')} icon={closeIcon}/>
      <div className='content-container'>
        {props.children}
      </div>
    </div>
  )
}
