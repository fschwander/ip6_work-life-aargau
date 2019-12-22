import React, {useState} from 'react';
import {VideoSlide} from './VideoSlide';
import {videoSlides} from "./data/videoSlides";

export const VideoPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const vSlides = videoSlides.map((d, i) => {
    return <VideoSlide key={i} {...videoSlides[i]}/>
  })

  const TimeLine = () => {
    return <div className='TimeLine'>
      {videoSlides.map((d, i) => {
        return <div className={`button `} key={i}
                    onClick={() => setActiveIndex(i)}/>
      })}
    </div>
  }

  return (
    <div className='VideoPage'>
      {vSlides[activeIndex]}
      <TimeLine/>
    </div>
  )
}
