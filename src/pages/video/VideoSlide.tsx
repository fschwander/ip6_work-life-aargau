import React, {CSSProperties, useState} from 'react';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {CurrentLocationDescription} from '../../components/containers/CurrentLocationDescription';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import {InfoLabel, InfoLabelItem} from "../../components/labels/InfoLabel";
import {PoiLabel, PoiLabelItem} from "../../components/labels/PoiLabel";
import {TravelingDistancePage} from '../side/travelingDistance/TravelingDistancePage';
import {SlideInOverlayInterface} from './data/SlideInOverlayInterface';
import {VideoOverlayInterface} from './data/VideoOverlayInterface';
import {PopupOverlay, PopupOverlayProps} from './PopupOverlay';
import {SlideInOverlay, SlideInOverlayProps} from './SlideInOverlay';


export interface VideoSlideItem {
  className: string,
  title: string,
  isMainPoint: boolean,
  videoSrc: string,
  poiLabelItems: Array<PoiLabelItem>
  infoLabelItems: Array<InfoLabelItem>
}

interface VideoSlideProps extends VideoSlideItem {
  popupComponent: PopupOverlayProps,
  setPopupComponent: Function,
  slideInComponent: SlideInOverlayProps,
  setSlideInComponent: Function
}

export const VideoSlide: React.FC<VideoSlideProps> = props => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const {popupComponent, setPopupComponent, slideInComponent, setSlideInComponent} = props;

  const animationStaggerInSec: number = 3;

  const onVideoEnded = () => {
    setAnimationStarted(true);
  }

  const openPopUpOverlay = (data: VideoOverlayInterface) => {
    if (slideInComponent !== undefined) {
      setSlideInComponent(undefined)
    }
    setPopupComponent(<PopupOverlay data={data}/>)
  }

  const openSlideInOverlay = (data: SlideInOverlayInterface) => {
    if (popupComponent !== undefined) {
      setPopupComponent(undefined)
    }
    setSlideInComponent(<SlideInOverlay data={data}/>)
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

          {props.poiLabelItems.map((d, i) => {
            const styles = getTransitionStyles(i, 2)
            return <div className='anim-group' key={i}>
              <AnimatedSVG svgComponent={d.svgComponent}
                           isActive={animationStarted}
                           animationDelay={i * animationStaggerInSec}/>
              <PoiLabel {...d} styles={styles}
                        onClick={() => openSlideInOverlay(d.overlayData)}/>
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
                <InfoLabel {...d} styles={styles}
                           onClick={() => openPopUpOverlay(d.overlayData)}/>
              </div>
            )
          })}
        </div>
      </BackgroundVideo>

      <CurrentLocationDescription title={props.title}/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={() => setPopupComponent(undefined)}>
          {popupComponent}
        </PopupContainer> : null}

      {slideInComponent !== undefined ?
        <SlideInContainer onCloseButtonClicked={() => setSlideInComponent(undefined)}>
          {slideInComponent}
          {/*<TravelingDistancePage/>*/}

        </SlideInContainer> : null}

    </div>
  )
}
