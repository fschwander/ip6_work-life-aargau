import React from 'react';
import bgImage from '../../res/imgs/AT_LAUFENBURG.jpg'

interface SlideProps {
  isActive: boolean
}

export const SlideLanding: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'SlideLanding slide full-screen ' + (props.isActive ? 'isActive' : '')

  return (
    <div className={rootClass}
         style={rootStyle}>
      <span className='background-filter'/>

      <div className='page-headline'>
        <h3>Willkommen bei</h3>
        <h2>Work Life Aargau</h2>
        <h1>Eine interaktive <br/>
          Plattform über den <br/>
          Kanton Aargau</h1>
      </div>

      <p className='bottom-element'>Lerne den Kanton Aargau auf eine <b>neue Art</b> kennen.</p>
    </div>
  )
}
