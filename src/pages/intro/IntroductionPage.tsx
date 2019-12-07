import React, {useState} from 'react';
import {PaginationList} from '../../components/buttons/PaginationList';
import {RoundButton} from '../../components/buttons/RoundButton';
import iconArrowLeft from '../../res/icons/arrow_left.svg'
import iconArrowRight from '../../res/icons/arrow_right.svg'
import {Slide01} from './Slide01';
import {Slide02} from './Slide02';
import {Slide03} from './Slide03';

export const IntroductionPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // TODO: add keys dynamically?
  const items = [
    <Slide01 key='0' isActive={activeIndex === 0}/>,
    <Slide02 key='1' isActive={activeIndex === 1}/>,
    <Slide03 key='2' isActive={activeIndex === 2}/>
  ]

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? items.length - 1 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    const nextIndex = activeIndex === 0 ? 0 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const setElementIndex = (index: number) => {
    setActiveIndex(index)
  }

  const getAllSlides = () => {
    return items.map((slide: object, i: number) => {
      return <React.Fragment key={i}>
        {slide}
      </React.Fragment>
    })
  }

  return (
    <div className='IntroductionPage full-screen'>

      <div className='slides-container'>
        {getAllSlides()}
      </div>

      <div className='slide-navigation'>
        <RoundButton onClick={previous}
                     isActive={activeIndex !== 0}
                     icon={iconArrowLeft}/>
        <PaginationList
          setElementIndex={setElementIndex}
          activeIndex={activeIndex}
          nofElements={items.length}/>
        <RoundButton onClick={next}
                     isActive={activeIndex < items.length - 1}
                     icon={iconArrowRight}/>
      </div>

    </div>
  )
}
