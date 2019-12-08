import React from 'react';
import {VideoFullScreen} from '../../components/animations/VideoFullScreen';
import {HoverPointWithLabel} from '../../components/buttons/HoverPointWithLabel';
import videoBaden from '../../res/videos/baden.mp4';
import {SlideHikingTrails} from './SlideHikingTrails';

export const VideoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [popupComponent, setPopupContainer] = React.useState();

  const pauseVideo = () => {
    setIsPlaying(false)
  }

  const playVideo = () => {
    setIsPlaying(true)
  }

  const getSlideHikingTrails = () => <SlideHikingTrails onClose={setPopupContainer}/>

  return (
    <div className='VideoPage full-screen'>
      <VideoFullScreen source={videoBaden} playVideo={isPlaying}/>

      <HoverPointWithLabel className={`hiking-trails`}
                           text='Wanderwege'
                           onClick={() => setPopupContainer(getSlideHikingTrails)}
                           onMouseEnter={pauseVideo}
                           onMouseLeave={playVideo}/>
      <HoverPointWithLabel className={`cie-mammut`}
                           text='Mammut'
                           hOrientation='left'
                           type='company'
                           onMouseEnter={pauseVideo}
                           onMouseLeave={playVideo}
                           onClick={() => setPopupContainer(getSlideHikingTrails)}/>

      <div className='popup-container'>
        {popupComponent}
      </div>

    </div>
  )
}
