import React from 'react';
import {TravelingDistancePage} from '../../pagesSide/travelingDistance/TravelingDistancePage';
import backgroundImg from './../../res/imgs/galerie_picture_905.jpg'
import './IntroductionPage.scss';

export const IntroductionPage: React.FC = () => {

  return (
    <div className='IntroductionPage full-screen'
         style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover'}}>

      <TravelingDistancePage/>

    </div>
  )
}
