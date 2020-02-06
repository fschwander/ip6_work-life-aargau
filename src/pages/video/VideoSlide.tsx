import React, {CSSProperties, useState} from 'react';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {CurrentLocationDescription} from '../../components/containers/CurrentLocationDescription';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import {InfoLabel, InfoLabelProps} from "../../components/labels/InfoLabel";
import {PoiLabel, PoiLabelProps} from "../../components/labels/PoiLabel";
import {VideoOverlayInterface} from './data/VideoOverlayInterface';
import {PopupOverlay} from './PopupOverlay';

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
  const [slideInComponent, setSlideInComponent] = useState();

  const animationStaggerInSec: number = 3;

  const onVideoEnded = () => {
    setAnimationStarted(true);
  }

  const openPopUpOverlay = (data: VideoOverlayInterface) => {
    if (slideInComponent !== undefined) {
      setSlideInComponent(undefined)
    }
    setPopupContainer(<PopupOverlay data={data}/>)
  }

  const openSlideInOverlay = () => {
    if (popupComponent !== undefined) {
      setPopupContainer(undefined)
    }
    setSlideInComponent(<div>yoyo</div>)
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
            const styles = getTransitionStyles(i, 2)
            return <div className='anim-group' key={i}>
              <AnimatedSVG svgComponent={d.svgComponent}
                           isActive={animationStarted}
                           animationDelay={i * animationStaggerInSec}/>
              <PoiLabel {...d} styles={styles}
                        onClick={() => openSlideInOverlay()}/>
            </div>
          })}

          {props.hoverPoints.map((d, i) => {
            const index = props.locationPoints.length + i;
            const styles = getTransitionStyles(index, 2)
            return (
              <div className={`anim-group`} key={d.className + i}>
                <AnimatedSVG svgComponent={d.svgComponent}
                             isActive={animationStarted}
                             animationDelay={index * animationStaggerInSec}/>
                <InfoLabel {...d} styles={styles}
                           onClick={() => openPopUpOverlay(d.overlayData)}/>
              </div>
            )
          })}
        </div>
      </BackgroundVideo>

      <CurrentLocationDescription title={props.title}/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={() => setPopupContainer(undefined)}>
          {popupComponent}
        </PopupContainer> : null}

      {slideInComponent !== undefined ?
        <SlideInContainer onCloseButtonClicked={() => setSlideInComponent(undefined)}>
          {slideInComponent}
        </SlideInContainer> : null}

    </div>
  )
}
