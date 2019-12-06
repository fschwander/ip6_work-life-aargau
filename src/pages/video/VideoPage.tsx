import React from 'react';
import {HoverPoint} from '../../components/buttons/HoverPoint';
import {VideoFullScreen} from '../../components/animations/VideoFullScreen';
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
      <HoverPoint onMouseEnter={pauseVideo}
                  onMouseLeave={playVideo}
                  onClick={() => console.log('mouse clicked...')}/>
    </div>
  )
}
