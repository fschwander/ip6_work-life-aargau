import React, {useEffect} from 'react';

interface Props {
  svgComponent: React.FC,
  animationDelay?: number,
  isActive: boolean
}

export const AnimatedSVG: React.FC<Props> = props => {
  const rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  const SVGImage = props.svgComponent;

  const initValuesForAnimation = () => {
    if (rootRef.current !== null) {
      const pathElements = Array.prototype.slice.call(rootRef.current.getElementsByTagName('path'))
      const lineElements = Array.prototype.slice.call(rootRef.current.getElementsByTagName('line'))
      const polylineElements = Array.prototype.slice.call(rootRef.current.getElementsByTagName('polyline'))
      const polygonElements = Array.prototype.slice.call(rootRef.current.getElementsByTagName('polygon'))

      let allElements = pathElements
        .concat(lineElements)
        .concat(polylineElements)
        .concat(polygonElements)

      Array.from(allElements).forEach(el => {
        let totalLength = el.getTotalLength().toString();
        el.style.strokeDasharray = totalLength;
        el.style.strokeDashoffset = totalLength;
        el.style.animationDelay = (props.animationDelay ? props.animationDelay : 0) + 's';
      })
    }
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
