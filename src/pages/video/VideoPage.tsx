import React from 'react';
import videoBaden from '../../res/videos/baden-short.mp4';
import {hikingTrails} from './data/hikingTrails';
import {mammut} from './data/mammut';
import {VideoSlide, VideoSlideProps} from './VideoSlide';

export const VideoPage: React.FC = () => {

  const slides: Array<VideoSlideProps> = [
    {
      className: 'baden-v-slide',
      title: 'Die Stadt Baden',
      videoSrc: videoBaden,
      hoverPoints: [
        {
          title: 'Baumaterialien',
          subtitle: 'Zement, Beton...',
          className: 'cie-mammut',
          data: mammut,
          lineLength: 85,
          lineRotation: 70,
          orientation: 'right'
        },
        {
          title: 'Kultur & Geschichte',
          subtitle: 'Historische Highlights',
          className: 'culture-and-history',
          data: hikingTrails,
          lineLength: 60,
          lineRotation: 70,
          orientation: 'right'
        },
        {
          title: 'Deine Vorteile',
          subtitle: 'Erschwingliche Miete',
          className: 'hiking-trails',
          data: hikingTrails,
          lineLength: 60,
          lineRotation: 300,
          orientation: 'right'
        }
      ]
    }
  ]

  const vSlides = [
    <VideoSlide {...slides[0]} />
  ]

  return (
    <div className='VideoPage'>
      {vSlides[0]}
    </div>
  )
}
