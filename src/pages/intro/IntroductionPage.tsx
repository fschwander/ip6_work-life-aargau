import React, {useState} from 'react';
import {PaginationList} from '../../components/PaginationList';
import {RoundButton} from '../../components/RoundButton';
import iconArrowLeft from '../../res/icons/arrow_left.svg'
import iconArrowRight from '../../res/icons/arrow_right.svg'
import './IntroductionPage.scss';
import {Slide01} from './Slide01';
import {Slide02} from './Slide02';
import {Slide03} from './Slide03';

export const IntroductionPage: React.FC = () => {
  const items = [<Slide01/>, <Slide02/>, <Slide03/>]

  const [activeIndex, setActiveIndex] = useState(0);
  const [activePage, setActivePage] = useState(items[activeIndex])

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? items.length - 1 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setActivePage(items[nextIndex])
  }

  const previous = () => {
    const nextIndex = activeIndex === 0 ? 0 : activeIndex - 1;
    setActiveIndex(nextIndex);
    setActivePage(items[nextIndex])
  }

  const setElementIndex = (index:number) => {
    console.log(index)
    setActiveIndex(index)
  }

  return (
    <div className='IntroductionPage'>

      {activePage}

      <div className='navigation'>
        <RoundButton onClick={previous}
                     isActive={activeIndex !== 0}
                     icon={iconArrowLeft}
                     size='3.5rem'/>
        <PaginationList
          setElementIndex={setElementIndex}
          activeIndex={activeIndex}
          nofElements={items.length}/>
        <RoundButton onClick={next}
                     isActive={activeIndex < items.length - 1}
                     icon={iconArrowRight}
                     size='3.5rem'/>


      </div>
    </div>
  )
}
