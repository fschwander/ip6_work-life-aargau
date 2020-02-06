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
  onClick?: Function,
  styles?: CSSProperties
}

export const InfoLabel: React.FC<InfoLabelProps> = props => {

  return (
    <div className={`InfoLabel ${props.className} ${props.orientation}`}
         style={{
           ...props.styles,
           left: `${props.posLeftInPct}%`, top: `${props.posTopInPct}%`
         }}>

      <HoverPoint style={props.styles} onClick={props.onClick}/>
      <p>{props.subtitle}</p>
      <h4>{props.title}</h4>
    </div>
  )
}
