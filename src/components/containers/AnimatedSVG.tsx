import React, {useEffect} from 'react';

interface Props {
  svgComponent: React.FC,
  isActive: boolean
}

export const AnimatedSVG: React.FC<Props> = props => {
  const rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  const SVGImage = props.svgComponent;

  const initValuesForAnimation = () => {
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

  useEffect(() => {
    initValuesForAnimation();
  })

  return (
    <div className={`AnimatedSVG ${props.isActive ? 'is-active' : ''}`} ref={rootRef}>
      <SVGImage/>
    </div>
  )
}
