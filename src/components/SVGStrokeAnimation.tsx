import React, {Component} from 'react';
import './SVGStrokeAnimation.scss'

interface SVGStrokeAnimationProps {
  svgComponent: React.FC
}

export class SVGStrokeAnimation extends Component<SVGStrokeAnimationProps> {

  render() {
    const SVGImage = this.props.svgComponent;

    return (
      <div className='SVGStrokeAnimation'>
        <SVGImage/>
      </div>
    )
  }

  componentDidMount(): void {
    const pathElements = Array.prototype.slice.call(document.getElementsByTagName('path'))
    const lineElements = Array.prototype.slice.call(document.getElementsByTagName('line'))
    const polylineElements = Array.prototype.slice.call(document.getElementsByTagName('polyline'))
    const polygonElements = Array.prototype.slice.call(document.getElementsByTagName('polygon'))

    let allElements = pathElements
      .concat(lineElements)
      .concat(polylineElements)
      .concat(polygonElements)

    Array.from(allElements).forEach(el => {
      let totalLength = el.getTotalLength().toString();
      el.style.strokeDasharray = totalLength;
      el.style.strokeDashoffset = totalLength;
    })
  }
}
