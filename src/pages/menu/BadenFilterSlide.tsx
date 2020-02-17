import React from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';
import {SelectionChip} from '../../components/buttons/SelectionChip';
import {MenuSlideInterface} from './MenuPage';

interface AarauSlideProps {
  slides: Array<MenuSlideInterface>
  setActiveSlide: Function
}

export const BadenFilterSlide: React.FC<AarauSlideProps> = props => {
  const history = useHistory();

  return (
    <div className='BadenSlide'>
      <NavBackButton text={'zurück zur Karte'} onClick={() => props.setActiveSlide(props.slides[1])}/>
      <p className='transparent'>>Du bestimmst, was du sehen möchtest</p>
      <h2>Deinen Flugweg über Baden anpassen</h2>

      <h3>Unternehmensprofile</h3>
      <p>Welche Fachgebiete interessieren dich?</p>
      <div className='horizontal-container'>
        <SelectionChip text={'Alle'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'Sport'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'Freizeit'} onClick={() => console.log('clicked')}/>
      </div>

      <h3>Sehenswürdigkeiten und Fakten</h3>
      <p>Erfahre mehr über den Kanton. Was sind deine Interessen?</p>
      <div className='horizontal-container'>
        <SelectionChip text={'Alle'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'Freizeit'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'Sport'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'Geschichte'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'Immobilien'} onClick={() => console.log('clicked')}/>
      </div>

      <h3>Lokale Highlights</h3>
      <p>Möchtest du die lokalen Highlights sehen? Dies können z. B. Schlösser, kulturelles Erbe oder berühmte Gebäude sein.</p>
      <div className='horizontal-container'>
        <SelectionChip text={'klar! :)'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'nein, danke'} onClick={() => console.log('clicked')}/>
      </div>

      <h3>Bist du bereit?</h3>
      <RectButton onClick={() => history.push('/baden')} text={'Losfliegen!'}/>

    </div>
  )
}
