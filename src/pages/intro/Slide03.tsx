import bgImage from '../../res/imgs/galerie_picture_974.jpg'
import React, {Component} from 'react';

export class Slide03 extends Component {

  render() {
    const rootStyle = {backgroundImage: `url(${bgImage})`}

    return (
      <div className='Slide03 slide'
           style={rootStyle}>
      </div>
    )
  }
}
