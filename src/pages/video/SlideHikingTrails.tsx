import React from 'react';
import {RoundButton} from '../../components/buttons/RoundButton';
import closeIcon from '../../res/icons/close.svg';

interface Props {
  onClose: Function
}

export const SlideHikingTrails: React.FC<Props> = props => {

  return (
    <div className='SlideHikingTrails slide full-screen'>
      <div className='content-container'>
        <RoundButton onClick={props.onClose} icon={closeIcon} isActive={true}/>
        Hiking
      </div>

    </div>
  )

}
