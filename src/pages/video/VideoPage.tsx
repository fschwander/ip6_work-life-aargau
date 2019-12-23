import React, {useState} from 'react';
import {VideoSlide} from './VideoSlide';
import {videoSlides} from "./data/videoSlides";
import {Timeline} from "../../components/widgets/TimeLine";

export const VideoPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const vSlides = videoSlides.map((d, i) => {
    return <VideoSlide key={i} {...videoSlides[i]}/>
  })

  return (
    <div className='VideoPage'>
      {vSlides[activeIndex]}
      <Timeline nofItems={vSlides.length} onClick={setActiveIndex} />
    </div>
  )
}
