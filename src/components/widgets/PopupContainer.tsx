import React from 'react';
import closeIcon from '../../res/icons/close.svg';
import {RoundButton} from '../buttons/RoundButton';

interface Props {
  onClose: Function
}

export const PopupContainer: React.FC<Props> = props => {f

  return (
    <div className='PopupContainer full-screen'>
      <div className='content-container'>
        {props.children}
        <RoundButton onClick={props.onClose} icon={closeIcon} isActive={true}/>
      </div>
    </div>
  )
}
