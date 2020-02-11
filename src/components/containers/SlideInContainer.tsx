import React, {createRef, RefObject, useState} from 'react';
import closeIcon from '../../res/icons/arrow_right.svg';
import {RoundButton} from '../buttons/RoundButton';
import {ScrollIndicator} from '../widgets/ScrollIndicator';

interface SlideInContainerProps {
  onCloseButtonClicked: Function
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

  return (
    <div className='SlideInContainer'>
      <RoundButton onClick={props.onCloseButtonClicked} icon={closeIcon}/>
      <div className='scroll-container' onScroll={handleScroll} ref={scrollContainer}>
        {props.children}
        <ScrollIndicator show={showScrollIndicator}/>
      </div>
    </div>
  )
}
