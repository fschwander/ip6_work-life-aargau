import React from 'react';
import {SlideInOverlayInterface} from './SlideInOverlayInterface';

export interface SlideInOverlayProps {
  data: SlideInOverlayInterface
}

export const SlideInOverlay: React.FC<SlideInOverlayProps> = props => {
  const {data} = props;

  return (
    <div className='SlideInOverlay header-container'>
      <p>LOKALES HIGHLIGHT</p>
      <h2>{data.header.title}</h2>
      <p className='secondary-title'><b>{data.header.subtitle}</b></p>
      <p className='main-content'>{data.header.text}</p>
      <div className='image-container'>
        <img src={data.image} alt={data.header.title}/>
      </div>

      <div className='facts-container'>
        <h3><b>{data.header.title}</b></h3>
      {
        data.facts.items.map (d =>
          <p key={d.title}><b>{d.title}</b>{d.text}</p>
        )
      }
      </div>

      <div className='location-container'>
        <div className='map'>
          <img src={data.map.svg_map} alt={data.header.title}/>
        </div>

        <div className='description-container'>
          <h3><b>{data.map.location_title}</b></h3>
          <p>{data.map.location_text}</p>
        </div>
      </div>

    </div>
  )
}
