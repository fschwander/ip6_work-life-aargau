import React from 'react';
import {SlideInOverlayInterface} from './data/SlideInOverlayInterface';

interface Props {
  data: SlideInOverlayInterface
}

export const SlideInOverlay: React.FC<Props> = props => {
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

    </div>
  )
}
