import React from 'react';
import './EntryLabel.scss'

interface EntryLabelProps {
  text: string,
  lineWidth: number,
  lineRotationInDeg: number
}

export const EntryLabel: React.FC<EntryLabelProps> = props => {
  let lineHeight = 2;
  let deg = props.lineRotationInDeg;

  const getLineTransform = (): number => {
    if (deg <= 90) {
      return -lineHeight;
    } else if (deg > 90 && deg <= 180) {
      return -2 * lineHeight;
    } else if (deg > 180 && deg <= 270) {
      return 0
    } else {
      return -lineHeight
    }
  }

  const getTransformOrigin = (): string => {
    if (deg > 180) {
      return 'left top'
    }
    return 'left bottom';
  }

  let lineTranslate = getLineTransform()
  let lineTransformOrigin = getTransformOrigin()

  const lineStyle = {
    width: `${props.lineWidth}px`,
    transform: `translateY(${lineTranslate}px) rotate(${props.lineRotationInDeg}deg)`,
    transformOrigin: lineTransformOrigin
  }

  return (
    <div className='EntryLabel'>
      <h3>{props.text}</h3>
      <div className='label-line' style={lineStyle}/>
    </div>
  )
}
