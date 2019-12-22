import React, {useEffect, useRef} from 'react';
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

      <div className={`anim-group-container`}>

        {props.hoverPoints.map((d, i) => {
          return <div className={`anim-group`}
                      key={d.className + i}
                      style={{
                        transition: '1.5s ease-in-out',
                        transitionDelay: 2 * i + 's',
                        opacity: animationStarted ? 1 : 0
                      }}>
            <AnimatedSVG svgComponent={d.svgComponent} isActive={animationStarted}/>

            <div className={`label-container ${d.className}`}>
              <HoverPoint onClick={() => openOverlay(<VideoOverlay data={d.overlayData}/>)}/>
              <EntryLabel text={d.title}
                          subtitle={d.subtitle}
                          lineWidth={d.lineLength}
                          lineRotationInDeg={d.lineRotation}
                          orientation={d.orientation}/>
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
