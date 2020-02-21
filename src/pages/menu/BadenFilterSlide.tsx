import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';
import {Constants} from '../../services/Constants';
import {getDismissedFilters, hideDismissedLabels, mapExclusiveFilters, mapOptionFilters} from './MenuFilterPage';
import {MenuSlideInterface} from './MenuPage';

interface AarauSlideProps {
  slides: Array<MenuSlideInterface>
  setActiveSlide: Function
}

export const BadenFilterSlide: React.FC<AarauSlideProps> = props => {
  const history = useHistory();

  const [enterpriseFilters, setEnterpriseFilters] = useState([
    {
      name: 'Sport',
      isActive: true,
      type: Constants.FILTER_ENTERPRISE_SPORT
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
  const [highlightFilter, setHighlightFilter] = useState([
    {
      name: 'klar!',
      isActive: true,
      type: Constants.FILTER_HIGHLIGHTS_ALL
    },
    {
      name: 'nein, danke',
      isActive: false,
      type: Constants.FILTER_HIGHLIGHTS_NONE
    }]
  )

  const EnterpriseFiltersChips = () => (
    <div className='selection-container horizontal-container'>
      {mapOptionFilters(enterpriseFilters, setEnterpriseFilters)}
    </div>);
  const PoiFilterChips = () => (
    <div className='selection-container horizontal-container'>
      {mapOptionFilters(poiFilters, setPoiFilters)}
    </div>);
  const HighlightFilterChips = () => (
    <div className='selection-container horizontal-container'>
      {mapExclusiveFilters(highlightFilter, setHighlightFilter)}
    </div>
  )

  const goToBadenVideoSlide = () => {
    const dismissedFilters = getDismissedFilters([enterpriseFilters, poiFilters, highlightFilter]);
    history.push('/baden', dismissedFilters)
  }

  useEffect(() => {
    hideDismissedLabels([enterpriseFilters, poiFilters, highlightFilter])
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
      <HighlightFilterChips/>

      <h3>Bist du bereit?</h3>
      <div className='selection-button-container horizontal-container'>
        <RectButton
          onClick={goToBadenVideoSlide}
          text={'Losfliegen!'}/>
      </div>

    </div>
  )
}
