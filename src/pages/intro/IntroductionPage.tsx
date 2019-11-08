import React, {Component} from 'react';
import './IntroductionPage.scss'
import {Slide01} from './Slide01';

export class IntroductionPage extends Component {

  render() {
    return(
      <div className='IntroductionPage'>
        <Slide01/>
      </div>
    )
  }
}
