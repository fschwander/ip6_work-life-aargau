import React from 'react';
import ReactPlayer from 'react-player';
import weLoveAargau from '../../res/videos/weLoveAargau.mp4';
import './VideoPage.scss';

export const VideoPage: React.FC = () => {

  return (
    <div className='VideoPage full-screen'>
      <ReactPlayer className='player'
                   url={weLoveAargau}
                   playing loop playsinline/>
    </div>
  )

}
