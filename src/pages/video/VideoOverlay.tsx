import React from 'react';
import iconArrowLeft from '../../res/icons/arrow2_left.svg'
import iconArrowRight from '../../res/icons/arrow2_right.svg'
import iconClimbing from '../../res/icons/climbing.svg'
import iconHiking from '../../res/icons/hiking.svg'
import mainImage from '../../res/imgs/ol_hikingtrails.jpg'

interface Props {

}

export const VideoOverlay: React.FC<Props> = props => {

  return (
    <div className='VideoOverlay horizontal-container'>
      <div className='box-left vertical-container'>

        <div className='header-container'>
          <h4>Aargauer</h4>
          <h2>Wanderwege</h2>
          <p>Wanderer sind auf den gut beschilderten Wegen unterwegs und staunen über die landschaftliche Vielfalt der
            Region.</p>
        </div>

        <div className='topics-container'>
          <h3>Themen</h3>
          <div className='horizontal-container'>
            <div className='horizontal-container'>
              <img src={iconClimbing} alt='climbing'/>
              <p>Sport</p>
            </div>
            <div className='horizontal-container'>
              <img src={iconHiking} alt='hiking'/>
              <p>Freizeit</p>
            </div>
          </div>
        </div>

        <div className='graph-container'>
          <h3>Verteilung der Schwierigkeit</h3>
          <p>//Graph placeholder//</p>
        </div>
      </div>

      <div className='box-right vertical-container'>
        <div className='image-container'>
          <img src={mainImage} alt='wein-wanderung'/>
        </div>

        <div className='box-explanation'>
          <h3>Wanderwege</h3>
          <h3>Anzahl Wanderwege <span>218</span></h3>
          <h3>Länge <span>6530 km</span></h3>
          <h3>Höchster Punkt <span>1200 m ü. M.</span></h3>
        </div>

        <div className='box-footer'>
          <div className='nav-container horizontal-container'>
            <img src={iconArrowLeft} alt='arrow left'/>
            <img src={iconArrowRight} alt='arrow right'/>
          </div>
          <h3>Wein-Wanderung</h3>
          <p>Länge <span>32 km</span></p>
          <p>Schwierigkeit <span>leicht</span></p>
        </div>
      </div>

    </div>
  )
}
