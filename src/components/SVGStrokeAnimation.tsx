import React from 'react';
import './SVGStrokeAnimation.scss'

interface SVGStrokeAnimationProps {
  svgImage: React.FC
}

export const SVGStrokeAnimation: React.FC<SVGStrokeAnimationProps> = props => {
  const SVGImage = props.svgImage;

  return (
    <div className='SVGStrokeAnimation'>
      <SVGImage/>
    </div>
  )
}
