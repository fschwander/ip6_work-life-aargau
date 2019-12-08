import React from 'react';
import {RoundButton} from '../../components/buttons/RoundButton';
import closeIcon from '../../res/icons/close.svg';
import {ReactComponent as PlaceholderImg} from './placeholderContent.svg';


interface Props {
  onClose: Function
}

export const SlideHikingTrails: React.FC<Props> = props => {

  return (
    <div className='SlideHikingTrails slide full-screen'>
      <div className='content-container'>
        <PlaceholderImg/> {/*todo: remove*/}
        <RoundButton onClick={props.onClose} icon={closeIcon} isActive={true}/>
      </div>

    </div>
  )

}
