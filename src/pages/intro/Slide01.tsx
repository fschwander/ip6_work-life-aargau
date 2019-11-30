import React from 'react';
import bgImage from '../../res/imgs/galerie_picture_966.jpg'

interface SlideProps {
  isActive: boolean
}

export const Slide01: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide01 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  return (
    <div className={rootClass}
         style={rootStyle}>
      <div>
        <h3>Willkomen bei</h3>
        <h2>Work-Life Aargau</h2>
        <h1>Eine interaktive <br/>
          Platform über den <br/>
          Kanton Aargau</h1>
      </div>
      <div className='intro-background-gradient'/>
      <p className='bottom-element'>Lerne den Kanton Aargau auf eine <b>neue Art</b> kennen.</p>
    </div>
  )
}
