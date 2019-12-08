import React from 'react';
import {VideoFullScreen} from '../../components/animations/VideoFullScreen';
import {HoverPointWithLabel} from '../../components/buttons/HoverPointWithLabel';
import videoBaden from '../../res/videos/baden.mp4';

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
      <VideoFullScreen source={videoBaden} playVideo={isPlaying}/>
      <HoverPointWithLabel className={`hiking-trails`}
                           text='Wanderwege'
                           onActivate={pauseVideo}
                           onDeactivate={playVideo}/>
      <HoverPointWithLabel className={`cie-mammut`}
                           text='Mammut'
                           type='company'
                           onActivate={pauseVideo}
                           onDeactivate={playVideo}/>
    </div>
  )
}
