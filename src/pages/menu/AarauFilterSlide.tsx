import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';
import {SelectionChip} from '../../components/buttons/SelectionChip';
import {mapOptionFilters} from './BadenFilterSlide';
import {MenuSlideInterface} from './MenuPage';

interface AarauSlideProps {
  slides: Array<MenuSlideInterface>
  setActiveSlide: Function
}

export const AarauFilterSlide: React.FC<AarauSlideProps> = props => {
  const history = useHistory();

  const [enterpriseFilters, setEnterpriseFilters] = useState([
    {
      name: 'alle',
      isActive: true
    },
    {
      name: 'Bauwesen',
      isActive: true
    },
    {
      name: 'Gebäudeteile',
      isActive: true
    },
    {
      name: 'Infrastruktur',
      isActive: true
    }
  ]);

  return (
    <div className='AarauFilterSlide'>
      <NavBackButton text='zurück zur Karte' onClick={() => props.setActiveSlide(props.slides[3])}/>
      <p className='transparent'>Du bestimmst, was du sehen möchtest</p>
      <h2>Flugweg über Aarau anpassen</h2>

      <h3>Unternehmensprofile</h3>
      <p>Welche Fachgebiete interessieren dich?</p>
      <div className='selection-container horizontal-container'>
        {mapOptionFilters(enterpriseFilters, setEnterpriseFilters)}
      </div>

      <h3>Lokale Highlights</h3>
      <p>Möchtest du die lokalen Highlights sehen? Dies können z. B. Schlösser, kulturelles Erbe oder berühmte Gebäude sein.</p>
      <div className='selection-container horizontal-container'>
        <SelectionChip text={'klar! :)'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'nein, danke'} onClick={() => console.log('clicked')} isActive={false}/>
      </div>

      <h3>Bist du bereit?</h3>
      <div className='selection-button-container horizontal-container'>
        <RectButton onClick={() => history.push('/aarau')} text={'Losfliegen!'}/>
      </div>
    </div>
  )
}
