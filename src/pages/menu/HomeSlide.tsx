import React from 'react';
import {RectButton} from '../../components/buttons/RectButton';

interface HomeSlideProps {
  goToAarauSlide: Function,
  setAarauVisible: Function,
  goToBadenSlide:Function,
  setBadenVisible: Function
}

export const HomeSlide:React.FC<HomeSlideProps> = props => {
  return (
    <div className='HomeSlide'>
      <p className='transparent'>Ein interaktives Abenteuer</p>
      <h2>Finde deinen Aargau</h2>
      <h3 className='large'>Lerne über Unternehmen, Sehenswürdigkeiten und Freizeit</h3>
      <p>Erlebe den Aargau aus der Vogelperspektive und entdecke den Kanton, wie du ihn noch nie gesehen hast. Einfach
        entspannen und geniessen!</p>

      <div className='choose-container'>
        <h3 className='large'>Welche Region möchtest du dir anschauen?</h3>
        <div className={'selection-button-container horizontal-container'}>
          <RectButton className='Aarau'
                      onClick={props.goToAarauSlide} text={'Aarau'}
                      onMouseOver={() => props.setAarauVisible(true)}
                      onMouseLeave={() => props.setAarauVisible(false)}/>
          <RectButton className='Baden'
                      onClick={props.goToBadenSlide} text={'Baden'}
                      onMouseOver={() => props.setBadenVisible(true)}
                      onMouseLeave={() => props.setBadenVisible(false)}/>
          <RectButton onClick={() => {}} text={'Brugg'} isActive={false}/>
        </div>
        <div className={'selection-button-container horizontal-container'}>
          <RectButton onClick={() => {}} text={'...'} isActive={false}/>
        </div>
      </div>
    </div>
  )
}
