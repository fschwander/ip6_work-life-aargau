import React from 'react';
import {VideoSlide} from './VideoSlide';

export const VideoPage: React.FC = () => {
  const vSlides = [
    <VideoSlide/>
  ]

  return (
    <div className='VideoPage'>
      {vSlides[0]}
    </div>
  )
}
