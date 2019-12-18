import React from 'react';
import {OverlayHoverPoint} from '../../components/buttons/OverlayHoverPoint';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {VideoOverlayInterface} from './data/VideoOverlayInterface';
import {ReactComponent as SVGImage} from '../../res/videos/baden-short.svg';

export interface VideoSlideProps {
  className: string,
  title: string,
  videoSrc: string,
  hoverPoints: Array<{
    className: string,
    data: VideoOverlayInterface
  }>
}

export const VideoSlide: React.FC<VideoSlideProps> = props => {
  const [animationStarted, setAnimationStarted] = React.useState(false);
  const [popupComponent, setPopupContainer] = React.useState();

  const onVideoEnded = () => {
    setAnimationStarted(true);
  }

  const openOverlay = (overlay: any) => {
    setPopupContainer(overlay)
  }

  const closeOverlay = () => {
    setPopupContainer(undefined);
  }

  return (
    <div className={`VideoSlide ${props.className} full-screen`}>
      <BackgroundVideo source={props.videoSrc} playVideo={true} onVideoEnded={onVideoEnded}/>
      <AnimatedSVG svgComponent={SVGImage} isActive={animationStarted}/>

      <div className={`overlay-hover-point-container ${animationStarted ? 'show' : 'hide'}`}>

        {props.hoverPoints.map((d, i) => <OverlayHoverPoint className={d.className}
                                                            key={d.className + i}
                                                            data={d.data}
                                                            onPointClicked={openOverlay}/>)}
      </div>

      <LocationLabel title={props.title}/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={closeOverlay}>
          {popupComponent}
        </PopupContainer> : null}

    </div>
  )
}
