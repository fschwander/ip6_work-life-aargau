import React from 'react';
import {VideoFullScreen} from '../../components/VideoFullScreen';
import weLoveAargau from '../../res/videos/weLoveAargau.mp4';
import './VideoPage.scss';

export const VideoPage: React.FC = () => {

  return (
    <div className='VideoPage full-screen'>
      <VideoFullScreen source={weLoveAargau}/>
    </div>
  )

}
