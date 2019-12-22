import React, {CSSProperties, useState} from 'react';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {EntryLabel} from '../../components/labels/EntryLabel';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {VideoOverlayInterface} from './data/VideoOverlayInterface';
import {HoverPoint} from "../../components/buttons/HoverPoint";
import {VideoOverlay} from "./VideoOverlay";

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
  overlayData: VideoOverlayInterface,
  svgComponent: any,
  lineLength: number,
  lineRotation: number,
  orientation: string
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

  const getStyles = (i: number, delay: number): CSSProperties => {
    return {
      transition: 'opacity 1s ease-in-out',
      transitionDelay: i * animationStaggerInSec + delay + 's',
      opacity: animationStarted ? 1 : 0
    }
  }

  return (
    <div className={`VideoSlide ${props.className} full-screen`}>
      <BackgroundVideo source={props.videoSrc} playVideo={true} onVideoEnded={onVideoEnded}/>

      <div className={`anim-group-container`}>

        {props.hoverPoints.map((d, i) => {
          return <div className={`anim-group`}
                      key={d.className + i}>
            <AnimatedSVG svgComponent={d.svgComponent}
                         isActive={animationStarted}
                         animationDelay={i * animationStaggerInSec}/>

            <div className={`label-container ${d.className}`}>

              <div style={getStyles(i, 0)}>
                <HoverPoint onClick={() => openOverlay(<VideoOverlay data={d.overlayData}/>)}/>
              </div>

              <div style={getStyles(i, 2)}>
                <EntryLabel text={d.title}
                            subtitle={d.subtitle}
                            lineWidth={d.lineLength}
                            lineRotationInDeg={d.lineRotation}
                            orientation={d.orientation}/>
              </div>
            </div>

          </div>
        })}
      </div>

      <LocationLabel title={props.title}/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={closeOverlay}>
          {popupComponent}
        </PopupContainer> : null}

    </div>
  )
}
