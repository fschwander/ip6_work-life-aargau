import React, {CSSProperties, ReactElement, useState} from 'react';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideoContainer} from '../../components/containers/BackgroundVideoContainer';
import {ProgressIndicator} from '../../components/widgets/ProgressIndicator';
import {LocationDescription} from './LocationDescription';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import {InfoLabel, InfoLabelItem} from "../../components/labels/InfoLabel";
import {PoiLabel, PoiLabelItem} from "../../components/labels/PoiLabel";
import {PopupOverlayProps} from './overlays/PopupOverlay';
import {SlideInOverlayProps} from './overlays/SlideInOverlay';

export interface VideoSlideItem {
  className: string,
  title: string,
  isMainPoint: boolean,
  videoSrc: string,
  animDurationInSec: number,
  poiLabelItems: Array<PoiLabelItem>
  infoLabelItems: Array<InfoLabelItem>
}

interface VideoSlideProps extends VideoSlideItem {
  popupComponent: PopupOverlayProps,
  setPopupComponent: Function,
  slideInComponent: SlideInOverlayProps,
  setSlideInComponent: Function,
  switchToNextSlide: Function
}

export const VideoSlide: React.FC<VideoSlideProps> = props => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const {popupComponent, setPopupComponent, slideInComponent, setSlideInComponent} = props;

  const animationStaggerInSec: number = 3;

  const onVideoEnded = () => {
    setAnimationStarted(true);
  }

  const openPopUpOverlay = (component: ReactElement) => {
    if (slideInComponent !== undefined) {
      setSlideInComponent(undefined)
    }
    setPopupComponent(component)
  }

  const openSlideInOverlay = (component: ReactElement) => {
    if (popupComponent !== undefined) {
      setPopupComponent(undefined)
    }
    setSlideInComponent(component)
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
      <BackgroundVideoContainer source={props.videoSrc}
                                playVideo={true}
                                onVideoEnded={onVideoEnded}>

        <div className={`anim-group-container`}>

          {props.poiLabelItems.map((d, i) => {
            const styles = getTransitionStyles(i, 2)
            return <div className='anim-group' key={i}>
              <AnimatedSVG svgComponent={d.svgComponent}
                           isActive={animationStarted}
                           animationDelay={i * animationStaggerInSec}/>
              <div
                className={`${slideInComponent !== undefined || popupComponent !== undefined ? 'fade-out' : 'fade-in'}`}>
                <PoiLabel {...d} styles={styles}
                          onClick={() => openSlideInOverlay(d.overlayComponent)}/>
              </div>
            </div>
          })}

          {props.infoLabelItems.map((d, i) => {
            const index = props.poiLabelItems.length + i;
            const styles = getTransitionStyles(index, 2)
            return (
              <div className={`anim-group`} key={d.className + i}>
                <AnimatedSVG svgComponent={d.svgComponent}
                             isActive={animationStarted}
                             animationDelay={index * animationStaggerInSec}/>
                <div
                  className={`${slideInComponent !== undefined || popupComponent !== undefined ? 'fade-out' : 'fade-in'}`}>
                  <InfoLabel {...d} styles={styles}
                             onClick={() => openPopUpOverlay(d.overlayComponent)}/>
                </div>
              </div>
            )
          })}
        </div>
      </BackgroundVideoContainer>

      <LocationDescription title={props.title}/>

      <ProgressIndicator animDurationInSec={20}
                         callbackAfterAnimation={props.switchToNextSlide}/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={setPopupComponent}>
          {popupComponent}
        </PopupContainer> : null}

      {slideInComponent !== undefined ?
        <SlideInContainer onCloseButtonClicked={setSlideInComponent}>
          {slideInComponent}
        </SlideInContainer> : null}

    </div>
  )
}
