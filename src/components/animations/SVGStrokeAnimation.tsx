import React, {Component} from 'react';

interface SVGStrokeAnimationProps {
  svgComponent: React.FC,
  isActive: boolean
}

export class SVGStrokeAnimation extends Component<SVGStrokeAnimationProps> {
  rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: SVGStrokeAnimationProps) {
    super(props);

    this.rootRef = React.createRef();

  }

  render() {
    const SVGImage = this.props.svgComponent;

    return (
      <div className={`SVGStrokeAnimation ${this.props.isActive ? 'is-active' : ''}`} ref={this.rootRef}>
        <SVGImage/>
      </div>
    )
  }

  componentDidMount(): void {
    this.startDashOffsetAnimation()
  }

  startDashOffsetAnimation() {
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
