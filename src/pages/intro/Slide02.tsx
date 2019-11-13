import bgImage from '../../res/imgs/galerie_picture_966.jpg'
import React, {Component} from 'react';

export class Slide02 extends Component {

  render() {
    const rootStyle = {backgroundImage: `url(${bgImage})`}

    return (
      <div className='Slide02 slide-element full-screen'
           style={rootStyle}>
      </div>
    )
  }
}
