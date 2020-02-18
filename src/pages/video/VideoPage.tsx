import React, {useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Timeline} from "../../components/widgets/TimeLine";
import {VideoSlide, VideoSlideItem} from './VideoSlide';

interface VideoPageProps {
  videoSlideData: Array<VideoSlideItem>
}

export const VideoPage: React.FC<VideoPageProps> = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [popupComponent, setPopupComponent] = useState();
  const [slideInComponent, setSlideInComponent] = useState();

  const {videoSlideData} = props;
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const switchToNextSlide = (): void => {
    if (activeIndex + 1 < videoSlideData.length) {
      setActiveIndex(activeIndex + 1)
    } else {
      history.push('/menu');
    }
  };

  const slideComponents = videoSlideData.map((d, i) => {
    return <VideoSlide key={i} {...videoSlideData[i]}
                       popupComponent={popupComponent}
                       setPopupComponent={setPopupComponent}
                       slideInComponent={slideInComponent}
                       setSlideInComponent={setSlideInComponent}
                       switchToNextSlide={switchToNextSlide}/>
  });

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
                      animDurationInSec: d.animDurationInSec
                    }
                  })}/>
      </div>
    </div>
  )
}
