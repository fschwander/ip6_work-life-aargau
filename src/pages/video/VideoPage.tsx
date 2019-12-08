import React from 'react';
import {VideoFullScreen} from '../../components/animations/VideoFullScreen';
import {HoverPointWithLabel} from '../../components/buttons/HoverPointWithLabel';
import placeholderVideo from '../../res/videos/testVideo.mp4';

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
      <VideoFullScreen source={placeholderVideo} playVideo={isPlaying}/>
      <HoverPointWithLabel className='hiking-trails'
                           onActivate={pauseVideo}
                           onDeactivate={playVideo}
                           text='Wanderwege'/>
    </div>
  )
}
