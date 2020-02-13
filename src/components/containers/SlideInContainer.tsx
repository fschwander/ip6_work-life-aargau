import React, {createRef, RefObject, useEffect, useState} from 'react';
import closeIcon from '../../res/icons/arrow_right.svg';
import {RoundButton} from '../buttons/RoundButton';
import {ScrollIndicator} from '../widgets/ScrollIndicator';

interface SlideInContainerProps {
  slideInDirection: string,
  onCloseButtonClicked?: Function
}

export const SlideInContainer: React.FC<SlideInContainerProps> = props => {
  const scrollContainer: RefObject<HTMLDivElement> = createRef();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  const handleScroll = () => {
    if (scrollContainer.current) {
      const windowHeight = window.innerHeight;
      const scrollHeight = scrollContainer.current.scrollHeight;
      const scrollTop = scrollContainer.current.scrollTop;
      const canBeScrolled = scrollHeight - windowHeight > 100;
      const wasScrolled = scrollTop > 100;

      if ((showScrollIndicator && wasScrolled) || !canBeScrolled) {
        setTimeout(() => setShowScrollIndicator(false), 3000);
      }
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <div className={`SlideInContainer ${props.slideInDirection}`}>
      {props.onCloseButtonClicked ?
        <RoundButton onClick={props.onCloseButtonClicked} icon={closeIcon}/> : null}

      <div className='scroll-container' onScroll={handleScroll} ref={scrollContainer}>
        {props.children}
        <ScrollIndicator show={showScrollIndicator}/>
      </div>
    </div>
  )
}
