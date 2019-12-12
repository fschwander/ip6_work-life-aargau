import React from 'react';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {HoverPointWithLabel} from '../../components/buttons/HoverPointWithLabel';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {ReactComponent as MammutPlaceholder} from './placeholderMammut.svg';
import videoBaden from '../../res/videos/baden.mp4';
import {VideoOverlay} from './VideoOverlay';
import {videoOverlays} from '../../res/data/videoOverlays'

export const VideoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [popupComponent, setPopupContainer] = React.useState();

  const pauseVideo = () => {
    setIsPlaying(false)
  }

  const playVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div className='VideoPage full-screen'>
      <BackgroundVideo source={videoBaden} playVideo={isPlaying}/>

      <HoverPointWithLabel className={`hiking-trails`}
                           text='Wanderwege'
                           onClick={() => setPopupContainer(<VideoOverlay data={videoOverlays.hikingTrails}/>)}
                           onMouseEnter={pauseVideo}
                           onMouseLeave={playVideo}/>
      <HoverPointWithLabel className={`cie-mammut`}
                           text='Mammut'
                           hOrientation='left'
                           type='company'
                           onMouseEnter={pauseVideo}
                           onMouseLeave={playVideo}
                           onClick={() => setPopupContainer(<MammutPlaceholder/>)}/>

      <LocationLabel/>

      {/*todo: remove*/}
      <PopupContainer onClose={setPopupContainer}>
        <VideoOverlay data={videoOverlays.hikingTrails}/>
      </PopupContainer>
      {/*{popupComponent !== undefined ?*/}
      {/*  <PopupContainer onClose={setPopupContainer}>*/}
      {/*    {popupComponent}*/}
      {/*  </PopupContainer> : null}*/}

    </div>
  )
}
