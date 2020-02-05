import React, {CSSProperties, useState} from 'react';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {CurrentLocationDescription} from '../../components/containers/CurrentLocationDescription';
import {PoiLabel, PoiLabelProps} from "../../components/labels/PoiLabel";
import {InfoLabel, InfoLabelProps} from "../../components/labels/InfoLabel";

export interface VideoSlideProps {
  className: string,
  title: string,
  isMainPoint: boolean,
  videoSrc: string,
  locationPoints: Array<PoiLabelProps>
  hoverPoints: Array<InfoLabelProps>
}

export const VideoSlide: React.FC<VideoSlideProps> = props => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [popupComponent, setPopupContainer] = useState();

  const animationStaggerInSec: number = 3;

  const onVideoEnded = () => {
    setAnimationStarted(true);
  }

  const openOverlay = (overlay: any) => {
    setPopupContainer(overlay)
  }

  const closeOverlay = () => {
    setPopupContainer(undefined);
  }

  const getTransitionStyles = (i: number, delay: number): CSSProperties => {
    return {
      transition: 'opacity 1s ease-in-out',
      transitionDelay: i * animationStaggerInSec + delay + 's',
      opacity: animationStarted ? 1 : 0
    }
  }

  return (
    <div className={`VideoSlide ${props.className}`}>
      <BackgroundVideo source={props.videoSrc}
                       playVideo={true}
                       onVideoEnded={onVideoEnded}>

        <div className={`anim-group-container`}>

          {props.locationPoints.map((d, i) => {
            const hoverPointStyles = getTransitionStyles(i, 0)

            return <div className='anim-group' key={i}>
              <AnimatedSVG svgComponent={d.svgComponent}
                           isActive={animationStarted}
                           animationDelay={i * animationStaggerInSec}/>
              <PoiLabel {...d} hoverPointStyles={hoverPointStyles}/>
            </div>
          })}

          {props.hoverPoints.map((d, i) => {
            let prevIndex = props.locationPoints.length;
            const hoverPointStyles = getTransitionStyles(prevIndex + i, 0)

            return (
              <div className={`anim-group`} key={d.className + i}>
                <AnimatedSVG svgComponent={d.svgComponent}
                             isActive={animationStarted}
                             animationDelay={(prevIndex + i) * animationStaggerInSec}/>
                <InfoLabel {...d} hoverPointStyles={hoverPointStyles}/>
              </div>
            )
          })}
        </div>
      </BackgroundVideo>

      <CurrentLocationDescription title={props.title}/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={closeOverlay}>
          {popupComponent}
        </PopupContainer> : null}

    </div>
  )
}
