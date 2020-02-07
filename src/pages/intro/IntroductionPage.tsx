import React from 'react';
import {ReactComponent as SVGImage} from '../../res/imgs/AT_PSI_VILLIGEN.svg';
import {TravelingDistancePage} from '../side/travelingDistance/TravelingDistancePage';
import backgroundImg from './../../res/imgs/AT_BADEN.jpg'
import './IntroductionPage.scss';

export const IntroductionPage: React.FC = () => {

  return (
    <div className='IntroductionPage full-screen'
         style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover'}}>

      <TravelingDistancePage svgComponent={SVGImage}/>

    </div>
  )
}
