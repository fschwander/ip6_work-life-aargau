import React from 'react';
import './SlideFullScreen.scss'

interface SlideFullScreenProps {
  activeIndex: number,
  children: Array<object>
}

export const SlideFullScreen: React.FC<SlideFullScreenProps> = props => {

  const getSlides = () => {
    return props.children.map((slide, index) => {
      return <div className={'slide ' + (index === props.activeIndex ? 'isActive' : '')}
                  key={index}>{slide}</div>
    })
  }

  return (
    <div className='slide-full-screen full-screen'>
      {getSlides()}
    </div>
  )
}
