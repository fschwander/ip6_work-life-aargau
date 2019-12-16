import React from 'react';
import {OverlayHoverPoint} from '../../components/buttons/OverlayHoverPoint';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {hikingTrails} from '../../res/data/video/hikingTrails'
import {mammut} from '../../res/data/video/mammut';
import videoBaden from '../../res/videos/baden.mp4';

export const VideoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [popupComponent, setPopupContainer] = React.useState();

  const pauseVideo = () => {
    setIsPlaying(false)
  }

  const playVideo = () => {
    if (popupComponent === undefined) {
      setIsPlaying(true)
    }
  }

  const openOverlay = (overlay: any) => {
    setPopupContainer(overlay)
    setIsPlaying(false);
  }

  const closeOverlay = () => {
    setPopupContainer(undefined);
    setIsPlaying(true)
  }

  return (
    <div className='VideoPage full-screen'>
      <BackgroundVideo source={videoBaden} playVideo={isPlaying}/>

      <OverlayHoverPoint className={`hiking-trails`}
                         data={hikingTrails}
                         onMouseEnter={pauseVideo}
                         onMouseLeave={playVideo}
                         onPointClicked={openOverlay}/>
      <OverlayHoverPoint className={`cie-mammut`}
                         data={mammut}
                         hOrientation='left'
                         onMouseEnter={pauseVideo}
                         onMouseLeave={playVideo}
                         onPointClicked={openOverlay}/>

      <LocationLabel/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={closeOverlay}>
          {popupComponent}
        </PopupContainer> : null}

    </div>
  )
}
