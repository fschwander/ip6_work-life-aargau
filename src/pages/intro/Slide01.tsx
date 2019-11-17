import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_905.jpg'
import React, {Component} from 'react';
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_905.svg'

export class Slide01 extends Component {

  render() {
    const rootStyle = {backgroundImage: `url(${bgImage})`}

    return (
      <div className='Slide01 slide-element full-screen'
           style={rootStyle}>
        <h3>Willkomen bei</h3>
        <h2>Work-Life Aargau</h2>
        <h1>Eine interaktive Platform über den Kanton Aargau</h1>
        <SVGStrokeAnimation svgComponent={SVGImage}/>
      </div>
    )
  }
}
