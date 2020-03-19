import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Timeline} from "../../components/widgets/TimeLine";
import {VideoSlide, VideoSlideItem} from './VideoSlide';

interface VideoPageProps {
  videoSlideData: Array<VideoSlideItem>
}

export const VideoPage: React.FC<VideoPageProps> = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeBackgroundImageIndex, setActiveBackgroundImageIndex] = useState(0)
  const [popupComponent, setPopupComponent] = useState();
  const [slideInComponent, setSlideInComponent] = useState();

  const {videoSlideData} = props;
  const history = useHistory();

  const switchToNextSlide = (): void => {
    let nextIndex = activeIndex + 1;
    if (nextIndex < videoSlideData.length) {
      setTimeout(() => setActiveIndex(nextIndex), 500)
      setActiveBackgroundImageIndex(nextIndex)

    } else {
      history.push('/menu');
    }
  };

  const switchIndex = (i: number): void => {
    setTimeout(() => setActiveIndex(i), 500)
     setActiveBackgroundImageIndex(i)
  }

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
      <div className={'background-image full-screen transparent-filter'}
           style={{backgroundImage: `url(${videoSlideData[activeBackgroundImageIndex].backgroundImg})`}}/>

      {slideComponents[activeIndex]}

      <div
        className={`timeline-container ${slideInComponent !== undefined || popupComponent !== undefined ? 'fade-out' : 'fade-in'}`}>
        <Timeline onClick={switchIndex}
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
