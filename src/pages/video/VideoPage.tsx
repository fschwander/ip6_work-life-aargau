import React, {useState} from 'react';
import {VideoSlide} from './VideoSlide';
import {videoSlides} from "./data/videoSlides";
import {Timeline} from "../../components/widgets/TimeLine";

export const VideoPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideComponents = videoSlides.map((d, i) => {
    return <VideoSlide key={i} {...videoSlides[i]}/>
  })

  return (
    <div className='VideoPage'>
      {slideComponents[activeIndex]}
      <Timeline nofItems={slideComponents.length} onClick={setActiveIndex}
                itemsArray={videoSlides.map((d) => {
                  return {isMainPoint: d.isMainPoint}
                })}/>
    </div>
  )
}
