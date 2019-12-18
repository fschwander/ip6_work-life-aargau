import React from 'react';
import {OverlayHoverPoint} from '../../components/buttons/OverlayHoverPoint';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {EntryLabel} from '../../components/labels/EntryLabel';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {ReactComponent as SVGImage} from '../../res/videos/baden-short.svg';
import {VideoOverlayInterface} from './data/VideoOverlayInterface';

export interface VideoSlideProps {
  className: string,
  title: string,
  videoSrc: string,
  hoverPoints: Array<HoverPointItems>
}

interface HoverPointItems {
  title: string,
  subtitle: string,
  className: string,
  data: VideoOverlayInterface,
  lineLength: number,
  lineRotation: number,
  orientation: string
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

        {props.hoverPoints.map((d, i) => <div className={d.className} key={d.className + i}>
          <OverlayHoverPoint data={d.data}
                             onPointClicked={openOverlay}/>
          <EntryLabel text={d.title}
                      lineWidth={d.lineLength}
                      lineRotationInDeg={d.lineRotation}
                      orientation={d.orientation}/>
        </div>)}
      </div>


      <LocationLabel title={props.title}/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={closeOverlay}>
          {popupComponent}
        </PopupContainer> : null}

    </div>
  )
}
