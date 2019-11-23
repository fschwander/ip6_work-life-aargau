import React from 'react';
import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_905.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_905.svg'

interface SlideProps {
  isActive: boolean
}

export const Slide01: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide01 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  return (
    <div className={rootClass}
         style={rootStyle}>
      <h3>Willkomen bei</h3>
      <h2>Work-Life Aargau</h2>
      <h1>Eine interaktive Platform über den Kanton Aargau</h1>
      <SVGStrokeAnimation svgComponent={SVGImage} isActive={props.isActive}/>
    </div>
  )
}
