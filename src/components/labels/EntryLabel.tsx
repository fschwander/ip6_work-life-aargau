import React from 'react';
import './EntryLabel.scss'

interface EntryLabelProps {
  text: string,
  lineWidth: number,
  lineRotationInDeg: number,
  orientation: string
}

export const EntryLabel: React.FC<EntryLabelProps> = props => {
  let lineHeight = 2;
  let deg = (props.orientation === 'left' ? props.lineRotationInDeg + 90 : props.lineRotationInDeg + 270) % 360;

  const getLineTransform = (): number => {
    switch (props.orientation) {
      case 'left':
        if (deg < 90) {
          return -lineHeight;
        } else if (deg > 90 && deg < 180) {
          return -2 * lineHeight;
        } else if (deg >= 180 && deg < 270) {
          return 0
        } else {
          return -lineHeight
        }
      case 'right':
        if (deg < 90) {
          return -lineHeight;
        } else if (deg > 90 && deg < 180) {
          return 0;
        } else if (deg >= 180 && deg < 270) {
          return -2 * lineHeight
        } else {
          return -lineHeight
        }
      default:
        return 0;
    }
  }

  const getTransformOrigin = (): string => {
    switch (props.orientation) {
      case 'left':
        if (deg <= 90) {
          return 'left top'
        } else if (deg < 180) {
          return 'left bottom';
        } else if (deg < 270) {
          return 'left top'
        } else {
          return 'left bottom'
        }
      case 'right':
        if (deg <= 90) {
          return 'right bottom'
        } else if (deg < 180) {
          return 'right top';
        } else if (deg < 270) {
          return 'right bottom'
        } else {
          return 'right top'
        }
      default:
        return 'left bottom';
    }
  }

  let lineTranslate = getLineTransform()
  let lineTransformOrigin = getTransformOrigin()

  const lineStyle = {
    width: `${props.lineWidth}px`,
    transform: `translateY(${lineTranslate}px) rotate(${deg}deg)`,
    transformOrigin: lineTransformOrigin
  }

  return (
    <div className={`EntryLabel ${props.orientation}`}>
      <h3>{props.text}</h3>
      <div className='label-line' style={lineStyle}/>
    </div>
  )
}
