import React from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';
import {MenuSlideInterface} from './MenuPage';

interface AarauSlideProps {
  slides: Array<MenuSlideInterface>
  setActiveSlide: Function
}

export const BadenSlide: React.FC<AarauSlideProps> = props => {
  const history = useHistory();

  return (
    <div className='BadenSlide'>
      <NavBackButton text={'zurück zur Karte'} onClick={() => props.setActiveSlide(props.slides[0])}/>
      <p className='transparent'>Ein interaktives Abenteuer</p>
      <h2>Baden entdecken</h2>
      <p>Sehe deine Flugroute und entscheide, was du auf deinem Weg sehen möchtest!</p>
      <div className='choose-container'>
        <h3 className='large'>Bist du bereit oder möchtest du Filter setzen?</h3>
        <div className='selection-button-container horizontal-container'>
          <RectButton onClick={() => history.push('/baden')} text={'Losfliegen!'}/>
          <RectButton onClick={() => props.setActiveSlide(props.slides[2])} text={'Filter setzen'}/>
        </div>
      </div>
    </div>
  )
}
