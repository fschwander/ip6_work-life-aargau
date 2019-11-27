import React from 'react';
import {HoverPoint} from '../../components/HoverPoint';
import {VideoFullScreen} from '../../components/VideoFullScreen';
import weLoveAargau from '../../res/videos/weLoveAargau.mp4';
import './VideoPage.scss';

export const VideoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)

  const pauseVideo = () => {
    setIsPlaying(false)
  }

  const playVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div className='VideoPage full-screen'>
      <VideoFullScreen source={weLoveAargau} playVideo={isPlaying}/>
      <HoverPoint className={''}
                  mouseEnter={pauseVideo}
                  mouseLeave={playVideo}
                  mouseClicked={() => console.log('mouse clicked...')}/>
    </div>
  )
}
