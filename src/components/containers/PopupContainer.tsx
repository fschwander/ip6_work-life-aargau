import React from 'react';
import closeIcon from '../../res/icons/close.svg';
import {RoundButton} from '../buttons/RoundButton';

interface Props {
  onCloseButtonClicked: Function
}

export const PopupContainer: React.FC<Props> = props => {

  return (
    <div className='PopupContainer full-screen'>
      <div className='content-container'>
        {props.children}
        <RoundButton onClick={props.onCloseButtonClicked} icon={closeIcon} isActive={true}/>
      </div>
    </div>
  )
}
