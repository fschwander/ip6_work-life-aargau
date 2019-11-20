import React from 'react';
import './SlideFullScreen.scss'

export const SlideFullScreen: React.FC = props => {

  return (
    <div className='slide-full-screen full-screen'>
      {props.children}
    </div>
  )
}
