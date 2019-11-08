import React, {useState} from 'react';
import {Carousel, CarouselControl, CarouselItem} from 'reactstrap';
import './IntroductionPage.scss';
import {Slide01} from './Slide01';
import {Slide02} from './Slide02';
import {Slide03} from './Slide03';

const items = [<Slide01/>, <Slide02/>, <Slide03/>]

export const IntroductionPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) {
      return;
    }
    const nextIndex = activeIndex === items.length - 1 ? items.length - 1 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) {
      return;
    }
    const nextIndex = activeIndex === 0 ? 0 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}>
        {item}
      </CarouselItem>
    );
  });

  return (
    <div className='IntroductionPage'>
      <Carousel activeIndex={activeIndex}
                next={next}
                previous={previous}
                interval={false}>
        {slides}
        <CarouselControl className={activeIndex === 0 ? 'hide' : 'show'}
                         direction="prev"
                         directionText="Previous"
                         onClickHandler={previous}/>
        <CarouselControl className={activeIndex === slides.length - 1 ? 'hide' : 'show'}
                         direction="next"
                         directionText="Next"
                         onClickHandler={next}/>

      </Carousel>
    </div>
  )
}
