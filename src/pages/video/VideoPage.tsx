import React from 'react';
import {VideoFullScreen} from '../../components/animations/VideoFullScreen';
import {HoverPointWithLabel} from '../../components/buttons/HoverPointWithLabel';
import videoBaden from '../../res/videos/baden.mp4';

export const VideoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [popupComponent, setPopupContainer] = React.useState(() => <div/>);

  const pauseVideo = () => {
    setIsPlaying(false)
  }

  const playVideo = () => {
    setIsPlaying(true)
  }

  const SlideHiking = () => <div>Hiking</div>
  const SlideMammut = () => <div>Mammut</div>

  return (
    <div className='VideoPage full-screen'>
      <VideoFullScreen source={videoBaden} playVideo={isPlaying}/>

      <div className='popup-container'>
        {popupComponent}
      </div>

      <HoverPointWithLabel className={`hiking-trails`}
                           text='Wanderwege'
                           onClick={() => setPopupContainer(SlideHiking)}
                           onMouseEnter={pauseVideo}
                           onMouseLeave={playVideo}/>
      <HoverPointWithLabel className={`cie-mammut`}
                           text='Mammut'
                           hOrientation='left'
                           type='company'
                           onMouseEnter={pauseVideo}
                           onMouseLeave={playVideo}
                           onClick={() => setPopupContainer(SlideMammut)}/>
    </div>
  )
}
