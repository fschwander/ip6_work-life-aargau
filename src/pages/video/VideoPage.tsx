import React from 'react';
import videoBaden from '../../res/videos/baden-short.mp4';
import {hikingTrails} from './data/hikingTrails';
import {mammut} from './data/mammut';
import {VideoSlide, VideoSlideProps} from './VideoSlide';
import {ReactComponent as svgRuine} from '../../res/videos/baden-short-ruine.svg';
import {ReactComponent as svgRoof} from '../../res/videos/baden-short-roof.svg';
import {ReactComponent as svgTower} from '../../res/videos/baden-short-tower.svg';

export const VideoPage: React.FC = () => {

  const slides: Array<VideoSlideProps> = [
    {
      className: 'baden-v-slide',
      title: 'Die Stadt Baden',
      videoSrc: videoBaden,
      hoverPoints: [
        {
          title: 'Kultur & Geschichte',
          subtitle: 'Historische Highlights',
          className: 'culture-and-history',
          overlayData: hikingTrails,
          svgComponent: svgRuine,
          lineLength: 60,
          lineRotation: 70,
          orientation: 'right'
        },
        {
          title: 'Deine Vorteile',
          subtitle: 'Erschwingliche Miete',
          className: 'hiking-trails',
          overlayData: hikingTrails,
          svgComponent: svgRoof,
          lineLength: 60,
          lineRotation: 300,
          orientation: 'right'
        },
        {
          title: 'Baumaterialien',
          subtitle: 'Zement, Beton...',
          className: 'cie-mammut',
          overlayData: mammut,
          svgComponent: svgTower,
          lineLength: 85,
          lineRotation: 70,
          orientation: 'right',
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
