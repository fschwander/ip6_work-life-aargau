import React from 'react';
import {HoverPoint} from '../../components/HoverPoint';
import {VideoFullScreen} from '../../components/VideoFullScreen';
import weLoveAargau from '../../res/videos/weLoveAargau.mp4';
import './VideoPage.scss';

export const VideoPage: React.FC = () => {

  return (
    <div className='VideoPage full-screen'>
      <VideoFullScreen source={weLoveAargau}/>
      <HoverPoint className={''} mouseOverFct={() => console.log('mouse over')}/>
    </div>
  )

}
