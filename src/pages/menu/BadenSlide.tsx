import React from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';

interface AarauSlideProps {
  slides: Array<any>
  setActiveSlide: Function
}

export const BadenSlide:React.FC<AarauSlideProps> = props => {
  const history = useHistory();

  return (
    <div className='BadenSlide'>
      <NavBackButton text={'zurück zur Karte'} onClick={() => props.setActiveSlide(props.slides[0])}/>
      <p className='transparent'>Ein interaktives Abenteuer</p>
      <h2>Baden entdecken</h2>

      <div className='choose-container'>
        <h3 className='large'>Bist du bereit oder möchtest du Filter setzen?</h3>
        <div className='selection-button-container horizontal-container'>
          <RectButton onClick={() => history.push('/baden')} text={'Losfliegen!'}/>
          <RectButton onClick={() => console.log('filter clicked')} text={'Filter setzen'} isActive={false}/>
        </div>
      </div>
    </div>
  )
}
