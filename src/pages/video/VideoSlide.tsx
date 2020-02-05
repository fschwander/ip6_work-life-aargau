import React, {CSSProperties, FunctionComponent, SVGProps, useState} from 'react';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {EntryLabel} from '../../components/labels/EntryLabel';
import {CurrentLocationDescription} from '../../components/containers/CurrentLocationDescription';
import {VideoOverlayInterface} from './data/VideoOverlayInterface';
import {HoverPoint} from "../../components/buttons/HoverPoint";
import {VideoOverlay} from "./VideoOverlay";
import {PoiLabelWithPointer, PoiLabelWithPointerProps} from "../../components/labels/PoiLabelWithPointer";

export interface VideoSlideProps {
  className: string,
  title: string,
  isMainPoint: boolean,
  videoSrc: string,
  locationPoints: Array<PoiLabelWithPointerProps>
  hoverPoints: Array<HoverPointItem>
}

interface HoverPointItem {
  title: string,
  subtitle: string,
  className: string,
  overlayData: VideoOverlayInterface,
  svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>,
  lineLength: number,
  lineRotation: number,
  orientation: string,
  posLeftInPct: number,
  posTopInPct: number,
  hoverPointPosLeft: number,
  hoverPointPosTop: number,
  display?: string
}

export const VideoSlide: React.FC<VideoSlideProps> = props => {
  const [animationStarted, setAnimationStarted] = useState(true); // todo: set to false
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
            return <div className='anim-group' key={i}>
              <PoiLabelWithPointer {...d}/>
            </div>
          })}

          {props.hoverPoints.map((d, i) => {
            const hoverPointTransitionStyles = getTransitionStyles(i, 0)

            return (
              <div className={`anim-group`} key={d.className + i}>

                <AnimatedSVG svgComponent={d.svgComponent}
                             isActive={animationStarted}
                             animationDelay={i * animationStaggerInSec}/>


                <div className={`label-container ${d.className}`}
                     style={{left: `${d.posLeftInPct}%`, top: `${d.posTopInPct}%`}}>

                  <HoverPoint onClick={() => openOverlay(<VideoOverlay data={d.overlayData}/>)}
                              style={{
                                ...hoverPointTransitionStyles,
                                left: `${d.hoverPointPosLeft}px`,
                                top: `${d.hoverPointPosTop}px`,
                                display: `${d.display}`
                              }}/>

                  <EntryLabel text={d.title}
                              subtitle={d.subtitle}
                              lineLength={d.lineLength}
                              lineRotation={d.lineRotation}
                              orientation={d.orientation}
                              style={getTransitionStyles(i, 2)}/>
                </div>

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
