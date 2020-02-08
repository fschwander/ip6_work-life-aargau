import React from 'react';
import {SlideInOverlayInterface} from './data/SlideInOverlayInterface';

export interface SlideInOverlayProps {
  data: SlideInOverlayInterface
}

export const SlideInOverlay: React.FC<SlideInOverlayProps> = props => {
  const {data} = props;

  return (
    <div className='header-container'>
      <p>LOKALES HIGHLIGHT</p>
      <h2>{data.title}</h2>
      <p className='secondary-title'><b>{data.subtitle}</b></p>
      <p className='main-content'>{data.text}</p>
      <div className='image-container'>
        <img src={data.image} alt={data.title}/>
      </div>
      <div className='facts-container'>
        <h3>{data.title}</h3>
        <p>{data.fact1}</p>
        <p>{data.fact2}</p>
      </div>
      <div className='location-container'>
        <div className='map'>
          <img src={data.map} alt={data.title}/>
        </div>
        <div className='description-container'>
          <h3>{data.location_title}</h3>
          <p>{data.location_text}</p>
        </div>
      </div>

    </div>
  )
}
