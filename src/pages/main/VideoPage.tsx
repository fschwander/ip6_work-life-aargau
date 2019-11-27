import React from 'react';
import {HoverPoint} from '../../components/HoverPoint';
import {VideoFullScreen} from '../../components/VideoFullScreen';
import weLoveAargau from '../../res/videos/weLoveAargau.mp4';
import './VideoPage.scss';

export const VideoPage: React.FC = () => {
  const [playVideo, setPlayVideo] = React.useState(true)

  return (
    <div className='VideoPage full-screen'>
      <VideoFullScreen source={weLoveAargau} playVideo={playVideo}/>
      <HoverPoint className={''}
                  mouseEnter={() => setPlayVideo(false)}
                  mouseLeave={() => setPlayVideo(true)}
      />
    </div>
  )
}
