import React, {CSSProperties, FunctionComponent, SVGProps} from "react";
import {VideoOverlayInterface} from "../../pages/video/data/VideoOverlayInterface";
import {HoverPoint} from "../buttons/HoverPoint";

export interface InfoLabelProps {
  title: string,
  subtitle: string,
  className: string,
  overlayData: VideoOverlayInterface,
  svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>,
  orientation: string,
  posLeftInPct: number,
  posTopInPct: number,
  hoverPointStyles?: CSSProperties
}

export const InfoLabel: React.FC<InfoLabelProps> = props => {

  return (
    <div className={`InfoLabel ${props.className} ${props.orientation}`}
         style={{...props.hoverPointStyles, left: `${props.posLeftInPct}%`, top: `${props.posTopInPct}%`}}>

      <HoverPoint style={props.hoverPointStyles} onClick={() => console.log('clicked')}/>

      <p>{props.subtitle}</p>
      <h4>{props.title}</h4>
    </div>
  )
}
