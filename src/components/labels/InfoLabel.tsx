import React, {FunctionComponent, SVGProps} from "react";
import {VideoOverlayInterface} from "../../pages/video/data/VideoOverlayInterface";

export interface InfoLabelProps {
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

export const InfoLabel: React.FC<InfoLabelProps> = props => {

  return(
    <div className='InfoLabel'>

    </div>
  )
}
