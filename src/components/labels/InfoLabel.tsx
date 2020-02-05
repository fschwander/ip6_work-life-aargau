import React, {FunctionComponent, SVGProps} from "react";
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
}

export const InfoLabel: React.FC<InfoLabelProps> = props => {

  return (
    <div className={`InfoLabel label-container ${props.className} ${props.orientation}`}
         style={{left: `${props.posLeftInPct}%`, top: `${props.posTopInPct}%`}}>

      <HoverPoint onClick={() => console.log('clicked')}/>

      <p>{props.subtitle}</p>
      <h4>{props.title}</h4>
    </div>
  )
}
