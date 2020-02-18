import React, {CSSProperties, FunctionComponent, ReactElement, SVGProps} from "react";
import {HoverPoint} from "../buttons/HoverPoint";

export interface InfoLabelItem {
  title: string,
  subtitle: string,
  type: string,
  className: string,
  overlayComponent: ReactElement,
  svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>,
  orientation: string,
  posLeftInPct: number,
  posTopInPct: number,
}

interface InfoLabelProps extends InfoLabelItem {
  onClick: Function,
  styles: CSSProperties
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
