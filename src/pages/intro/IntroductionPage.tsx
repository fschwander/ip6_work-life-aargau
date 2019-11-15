import React, {useState} from 'react';
import {Carousel, CarouselItem} from 'reactstrap';
import {RoundButton} from '../../components/RoundButton';
import iconArrowLeft from '../../res/icons/arrow_left.svg'
import iconArrowRight from '../../res/icons/arrow_right.svg'
import './IntroductionPage.scss';
import {Slide01} from './Slide01';
import {Slide02} from './Slide02';
import {Slide03} from './Slide03';

const items = [<Slide03/>, <Slide01/>, <Slide02/>]

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
      </Carousel>

      <div className='navigation'>
        <RoundButton onClick={previous}
                     isActive={activeIndex !== 0}
                     icon={iconArrowLeft}
                     size='4rem'/>
        <RoundButton onClick={next}
                     isActive={activeIndex < slides.length - 1}
                     icon={iconArrowRight}
                     size='4rem'/>
      </div>
    </div>
  )
}
