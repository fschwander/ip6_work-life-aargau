import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {PaginationList} from '../../components/buttons/PaginationList';
import {RoundButton} from '../../components/buttons/RoundButton';
import iconArrowLeft from '../../res/icons/arrow_left.svg'
import iconArrowRight from '../../res/icons/arrow_right.svg'
import {SlideLanding} from './SlideLanding';
import {SlideLife} from './SlideLife';
import {SlideWork} from './SlideWork';

export const IntroductionPage: React.FC = () => {
  const history = useHistory();

  const [activeIndex, setActiveIndex] = useState(0);

  // TODO: add keys dynamically?
  const items = [
    <SlideLanding key='0' isActive={activeIndex === 0}/>,
    <SlideLife key='1' isActive={activeIndex === 1}/>,
    <SlideWork key='2' isActive={activeIndex === 2}/>
  ];

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

  const AboutUsButton = () => {
    return <div className={'AboutUsButton button'} onClick={() => history.push('/about')}>
      <h3>Über uns<br/>& Credits</h3>
    </div>
  }

  return (
    <div className='IntroductionPage full-screen'>

      <div className='slides-container'>
        {getAllSlides()}
      </div>

      <AboutUsButton/>

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
