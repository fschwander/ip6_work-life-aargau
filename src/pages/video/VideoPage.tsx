import React from 'react';
import weLoveAargau from '../../res/videos/weLoveAargau.mp4';
import {VideoFullScreen} from '../../components/VideoFullScreen';
import './VideoPage.scss';

export const VideoPage: React.FC = () => {

  return (
    <div className='VideoPage full-screen'>
      <VideoFullScreen source={weLoveAargau}/>
    </div>
  )

}
