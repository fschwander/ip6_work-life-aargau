import React from 'react';
import './SlideFullScreen.scss'

interface SlideFullScreenProps {
  activeIndex: number,
  children: Array<object>
}

export const SlideFullScreen: React.FC<SlideFullScreenProps> = props => {

  const getSlides = () => {
    return props.children.map((slide:object, index:number) => {
      let isActive = index === props.activeIndex;

      return <React.Fragment key={index}>
        <div className={'slide ' + (isActive ? 'isActive' : '')}>{slide}</div>
      </React.Fragment>
    })
  }

  return (
    <div className='slide-full-screen full-screen'>
      {getSlides()}
    </div>
  )
}
