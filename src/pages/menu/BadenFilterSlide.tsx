import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';
import {SelectionChip} from '../../components/buttons/SelectionChip';
import {Constants} from '../../services/Constants';
import {mapOptionFilters} from './MenuFilterPage';
import {MenuSlideInterface} from './MenuPage';

interface AarauSlideProps {
  slides: Array<MenuSlideInterface>
  setActiveSlide: Function
}

export const BadenFilterSlide: React.FC<AarauSlideProps> = props => {
  const isInitialMount = useRef(true);
  const history = useHistory();

  const [enterpriseFilters, setEnterpriseFilters] = useState([
    {
      name: 'alle',
      isActive: true,
      type: Constants.FILTER_MAJOR
    },
    {
      name: 'Sport',
      isActive: true,
      type: Constants.FILTER_ENTERPRISE_SPORT
    },
    {
      name: 'Freizeit',
      isActive: true,
      type: Constants.FILTER_ENTERPRISE_LEISURE
    }
  ]);
  const [poiFilters, setPoiFilters] = useState([
    {
      name: 'alle',
      isActive: true,
      type: Constants.FILTER_MAJOR
    },
    {
      name: "Freizeit",
      isActive: true,
      type: Constants.FILTER_POI_LEISURE
    },
    {
      name: "Sport",
      isActive: true,
      type: Constants.FILTER_POI_SPORT
    },
    {
      name: "Geschichte",
      isActive: true,
      type: Constants.FILTER_POI_HISTORY
    },
    {
      name: "Immobilien",
      isActive: true,
      type: Constants.FILTER_POI_REAL_ESTATE
    }
  ]);

  const EnterpriseFiltersChips = () => (
    <div className='selection-container horizontal-container'>
      {mapOptionFilters(enterpriseFilters, setEnterpriseFilters)}
    </div>)
  const PoiFilterChips = () => (
    <div className='selection-container horizontal-container'>
      {mapOptionFilters(poiFilters, setPoiFilters)}
    </div>
  )

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  })

  return (
    <div className='BadenSlide'>
      <NavBackButton text={'zurück zur Karte'} onClick={() => props.setActiveSlide(props.slides[1])}/>
      <p className='transparent'>Du bestimmst, was du sehen möchtest</p>
      <h2>Flugweg über Baden anpassen</h2>

      <h3>Unternehmensprofile</h3>
      <p>Welche Fachgebiete interessieren dich?</p>
      <EnterpriseFiltersChips/>

      <h3>Sehenswürdigkeiten und Fakten</h3>
      <p>Erfahre mehr über den Kanton. Was sind deine Interessen?</p>
      <PoiFilterChips/>

      <h3>Lokale Highlights</h3>
      <p>Möchtest du die lokalen Highlights sehen? Dies können z. B. Schlösser, kulturelles Erbe oder berühmte Gebäude
        sein.</p>
      <div className='selection-container horizontal-container'>
        <SelectionChip text={'klar! :)'} onClick={() => console.log('clicked')}/>
        <SelectionChip text={'nein, danke'} onClick={() => console.log('clicked')} isActive={false}/>
      </div>

      <h3>Bist du bereit?</h3>
      <div className='selection-button-container horizontal-container'>
        <RectButton onClick={() => history.push('/baden')} text={'Losfliegen!'}/>
      </div>

    </div>
  )
}
