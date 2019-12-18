import React from 'react';
import {hikingTrails} from '../../res/data/video/hikingTrails';
import {mammut} from '../../res/data/video/mammut';
import videoBaden from '../../res/videos/baden.mp4';
import {VideoSlide, VideoSlideProps} from './VideoSlide';

export const VideoPage: React.FC = () => {

  const vSlideData: Array<VideoSlideProps> = [
    {
      title: 'Die Stadt Baden',
      videoSrc: videoBaden,
      hoverPoints: [
        {className: 'hiking-trails', data: hikingTrails},
        {className: 'cie-mammut', data: mammut}
      ]
    }
  ]

  const vSlides = [
    <VideoSlide {...vSlideData[0]} />
  ]

  return (
    <div className='VideoPage'>
      {vSlides[0]}
    </div>
  )
}
