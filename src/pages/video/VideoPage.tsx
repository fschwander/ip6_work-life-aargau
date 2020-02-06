import React, {useState} from 'react';
import {Timeline} from "../../components/widgets/TimeLine";
import {videoSlideData} from "./data/videoSlideData";
import {VideoSlide} from './VideoSlide';

export const VideoPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideComponents = videoSlideData.map((d, i) => {
    return <VideoSlide key={i} {...videoSlideData[i]}/>
  })

  return (
    <div className='VideoPage'>
      {slideComponents[activeIndex]}
      <Timeline onClick={setActiveIndex}
                nofIndexes={slideComponents.length}
                activeIndex={activeIndex}
                itemsArray={videoSlideData.map((d) => {
                  return {isMainPoint: d.isMainPoint ? d.isMainPoint : false}
                })}/>
    </div>
  )
}
