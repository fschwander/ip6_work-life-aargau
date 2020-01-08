import React from 'react';
import {TravelingDistancePage} from '../side/travelingDistance/TravelingDistancePage';
import backgroundImg from './../../res/imgs/AT_LAUFENBURG.jpg'
import './IntroductionPage.scss';

export const IntroductionPage: React.FC = () => {

  return (
    <div className='IntroductionPage full-screen'
         style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover'}}>

      <TravelingDistancePage/>

    </div>
  )
}
