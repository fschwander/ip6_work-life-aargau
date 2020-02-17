import React from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';
import {MenuSlideInterface} from './MenuPage';

interface AarauSlideProps {
  slides: Array<MenuSlideInterface>
  setActiveSlide: Function
}

export const AarauSlide: React.FC<AarauSlideProps> = props => {
  const history = useHistory();

  return (
    <div className='AarauSlide'>
      <NavBackButton text='zurück zur Karte' onClick={() => props.setActiveSlide(props.slides[0])}/>
      <p className='transparent'>Ein interaktives Abenteuer</p>
      <h2>Aarau entdecken</h2>

      <div className='choose-container'>
        <h3 className='large'>Bist du bereit oder möchtest du Filter setzen?</h3>
        <div className='selection-button-container horizontal-container'>
          <RectButton onClick={() => history.push('/aarau')} text={'Losfliegen!'}/>
          <RectButton onClick={() => props.setActiveSlide(props.slides[4])} text={'Filter setzen'} />
        </div>
      </div>
    </div>
  )
}
