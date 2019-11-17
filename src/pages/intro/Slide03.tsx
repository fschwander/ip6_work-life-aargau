import React, {Component} from 'react';
import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_974.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_974.svg'

export class Slide03 extends Component {

  render() {
    const rootStyle = {backgroundImage: `url(${bgImage})`}

    return (
      <div className='Slide03 slide-element full-screen'
           style={rootStyle}>

        <SVGStrokeAnimation svgComponent={SVGImage}/>
      </div>
    )
  }
}
