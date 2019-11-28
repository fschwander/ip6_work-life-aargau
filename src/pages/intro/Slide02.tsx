import React from 'react';
import {QuizBox} from '../../components/QuizBox';
import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_905.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_905.svg'

interface SlideProps {
  isActive: boolean
}

export const Slide02: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide02 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  return (
    <div className={rootClass}
         style={rootStyle}>
      <SVGStrokeAnimation svgComponent={SVGImage} isActive={props.isActive}/>
      <QuizBox/>
    </div>
  )
}

