import React from 'react';
import {OverlayHoverPoint} from '../../components/buttons/OverlayHoverPoint';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {hikingTrailsData} from '../../res/data/video/hikingTrailsData'
import {mammutData} from '../../res/data/video/mammutData';
import videoBaden from '../../res/videos/baden.mp4';

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
                         data={hikingTrailsData}
                         onMouseEnter={pauseVideo}
                         onMouseLeave={playVideo}
                         setPopupContainer={setPopupContainer}/>
      <OverlayHoverPoint className={`cie-mammut`}
                         data={mammutData}
                         hOrientation='left'
                         onMouseEnter={pauseVideo}
                         onMouseLeave={playVideo}
                         setPopupContainer={setPopupContainer}/>

      <LocationLabel/>

      {/*todo: remove*/}
      {/*<PopupContainer onClose={setPopupContainer}>*/}
      {/*  <VideoOverlay data={mammutData}/>*/}
      {/*</PopupContainer>*/}
      {popupComponent !== undefined ?
        <PopupContainer onClose={setPopupContainer}>
          {popupComponent}
        </PopupContainer> : null}

    </div>
  )
}
