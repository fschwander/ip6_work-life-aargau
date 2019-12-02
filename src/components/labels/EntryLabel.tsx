import React from 'react';

interface EntryLabelProps {
  text: string,
  lineWidth: number,
  lineRotationInDeg: number,
  orientation: string
}

export const EntryLabel: React.FC<EntryLabelProps> = props => {
  let lineHeight = 1;
  let deg = props.lineRotationInDeg;

  if (deg < 0 || deg > 360) {
    console.warn('Wrong values for line rotation: value should be between 0 an 360 but was ', props.lineRotationInDeg);
  }

  const getLineTransform = (): number => {
    switch (props.orientation) {
      case 'left':
        if (deg < 90) {
          return -lineHeight;
        } else if (deg >= 90 && deg < 180) {
          return 0
        } else if (deg >= 180 && deg < 270) {
          return -2 * lineHeight
        } else {
          return -lineHeight
        }
      case 'right':
        if (deg < 90) {
          return 0
        } else if (deg >= 90 && deg < 180) {
          return -lineHeight;
        } else if (deg >= 180 && deg < 270) {
          return -lineHeight;
        } else {
          return -2 * lineHeight;
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
          return 'left top'
        } else if (deg < 270) {
          return 'left bottom'
        } else {
          return 'left bottom'
        }
      case 'right':
        if (deg <= 90) {
          return 'right top'
        } else if (deg < 180) {
          return 'right top';
        } else if (deg < 270) {
          return 'right bottom'
        } else {
          return 'right bottom'
        }
      default:
        return 'left bottom';
    }
  }

  const getRealLineRotation = (): number => {
    return (props.orientation === 'left' ? props.lineRotationInDeg : props.lineRotationInDeg + 180) % 360;
  }

  let lineTranslate = getLineTransform()
  let lineTransformOrigin = getTransformOrigin()
  let realLineRotation = getRealLineRotation()

  const lineStyle = {
    width: `${props.lineWidth}px`,
    transform: `translateY(${lineTranslate}px) rotate(${realLineRotation * -1}deg)`,
    transformOrigin: lineTransformOrigin
  }

  return (
    <div className={`EntryLabel ${props.orientation}`}>
      <h3>{props.text}</h3>
      <div className='label-line' style={lineStyle}/>
    </div>
  )
}
