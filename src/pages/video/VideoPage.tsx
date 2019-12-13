import React from 'react';
import {HoverPointWithLabel} from '../../components/buttons/HoverPointWithLabel';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {hikingTrailsData} from '../../res/data/video/hikingTrailsData'
import {mammutData} from '../../res/data/video/mammutData';
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

      <HoverPointWithLabel className={`hiking-trails`}
                           text={hikingTrailsData.header.title}
                           onClick={() => setPopupContainer(<VideoOverlay data={hikingTrailsData}/>)}
                           onMouseEnter={pauseVideo}
                           onMouseLeave={playVideo}/>
      <HoverPointWithLabel className={`cie-mammut`}
                           text={mammutData.header.title}
                           type={mammutData.type}
                           hOrientation='left'
                           onMouseEnter={pauseVideo}
                           onMouseLeave={playVideo}
                           onClick={() => setPopupContainer(<VideoOverlay data={mammutData}/>)}/>

      <LocationLabel/>

      {/*todo: remove*/}
      <PopupContainer onClose={setPopupContainer}>
        <VideoOverlay data={mammutData}/>
      </PopupContainer>
      {/*{popupComponent !== undefined ?*/}
      {/*  <PopupContainer onClose={setPopupContainer}>*/}
      {/*    {popupComponent}*/}
      {/*  </PopupContainer> : null}*/}

    </div>
  )
}
