import React from 'react';
import weLoveAargau from '../../res/videos/weLoveAargau.mp4';
import {FullScreenVideo} from './FullScreenVideo';
import './VideoPage.scss';

export const VideoPage: React.FC = () => {

  return (
    <div className='VideoPage full-screen'>
      <FullScreenVideo source={weLoveAargau}/>
    </div>
  )

}
