import React, {useState} from 'react';
import {Timeline} from "../../components/widgets/TimeLine";
import {VideoSlide} from './VideoSlide';
import {videoSlideData} from "./videoSlideData";

export const VideoPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [popupComponent, setPopupComponent] = useState();
  const [slideInComponent, setSlideInComponent] = useState();

  const switchToNextSlide = (activeIndex: number, maxIndex: number): void => {
    if (activeIndex + 1 < maxIndex) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const slideComponents = videoSlideData.map((d, i) => {
    return <VideoSlide key={i} {...videoSlideData[i]}
                       popupComponent={popupComponent}
                       setPopupComponent={setPopupComponent}
                       slideInComponent={slideInComponent}
                       setSlideInComponent={setSlideInComponent}
                       switchToNextSlide={() => switchToNextSlide(activeIndex, slideComponents.length)}/>
  })

  return (
    <div className='VideoPage'>

      {slideComponents[activeIndex]}

      <div
        className={`timeline-container ${slideInComponent !== undefined || popupComponent !== undefined ? 'fade-out' : 'fade-in'}`}>
        <Timeline onClick={setActiveIndex}
                  nofIndexes={slideComponents.length}
                  activeIndex={activeIndex}
                  itemsArray={videoSlideData.map((d) => {
                    return {
                      isMainPoint: d.isMainPoint ? d.isMainPoint : false,
                      animDurationInSec: d.animDurationInSec
                    }
                  })}/>
      </div>
    </div>
  )
}
