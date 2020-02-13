import React, {createRef, RefObject, useEffect, useRef, useState} from 'react';
import closeIcon from '../../res/icons/arrow_right.svg';
import {RoundButton} from '../buttons/RoundButton';
import {ScrollIndicator} from '../widgets/ScrollIndicator';

interface SlideInContainerProps {
  slideInDirection: string,
  onCloseButtonClicked?: Function
}

export const SlideInContainer: React.FC<SlideInContainerProps> = props => {
  const isInitialMount = useRef(true);

  const scrollContainer: RefObject<HTMLDivElement> = createRef();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  const handleScroll = () => {
    if (scrollContainer.current) {
      const scrollTop = scrollContainer.current.scrollTop;
      const wasScrolled = scrollTop > 100;

      if ((showScrollIndicator && wasScrolled)) {
        setTimeout(() => setShowScrollIndicator(false), 3000);
      }
    }
  };

  const initScroll = () => {
    if (scrollContainer.current) {
      const windowHeight = window.innerHeight;
      const scrollHeight = scrollContainer.current.scrollHeight;
      const canBeScrolled = scrollHeight - windowHeight > 100;

      if (!canBeScrolled) {
        setShowScrollIndicator(false)
      }
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      initScroll()
    }
  });

  return (
    <div className={`SlideInContainer ${props.slideInDirection}`}>
      <div className='scroll-container' onScroll={handleScroll} ref={scrollContainer}>
        {props.children}
        <ScrollIndicator show={showScrollIndicator}/>
      </div>

      {props.onCloseButtonClicked ?
        <RoundButton onClick={props.onCloseButtonClicked} icon={closeIcon}/> : null}
    </div>
  )
}
