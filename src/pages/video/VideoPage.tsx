import React from 'react';
import {OverlayHoverPoint} from '../../components/buttons/OverlayHoverPoint';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {hikingTrails} from '../../res/data/video/hikingTrails'
import {mammut} from '../../res/data/video/mammut';
import videoBaden from '../../res/videos/baden.mp4';
import {VideoOverlay} from './VideoOverlay';

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

      <OverlayHoverPoint className={`hiking-trails`}
                         data={hikingTrails}
                         onMouseEnter={pauseVideo}
                         onMouseLeave={playVideo}
                         setPopupContainer={setPopupContainer}/>
      <OverlayHoverPoint className={`cie-mammut`}
                         data={mammut}
                         hOrientation='left'
                         onMouseEnter={pauseVideo}
                         onMouseLeave={playVideo}
                         setPopupContainer={setPopupContainer}/>

      <LocationLabel/>

      {popupComponent !== undefined ?
        <PopupContainer onClose={setPopupContainer}>
          {popupComponent}
        </PopupContainer> : null}

    </div>
  )
}
