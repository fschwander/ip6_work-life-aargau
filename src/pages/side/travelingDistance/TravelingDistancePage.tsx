import React, {useEffect, useRef} from 'react';
import {SelectionChip} from '../../../components/buttons/SelectionChip';
import {ReactComponent as MapSVG} from '../../../res/imgs/map.svg'

export const TravelingDistancePage: React.FC = () => {
  const isInitialMount = useRef(true)

  const initMap = () => {
    console.log('init');
  }

  const updateChart = () => {
    console.log('update');
  }


  useEffect(() => {
    if(isInitialMount.current) {
      isInitialMount.current = false;
      initMap();
    }
    updateChart()

  })


  return (
    <div className='TravelingDistancePage'>
      <div className='TravellingIntroduction'>
        <h2>Der Aargau is gut vernetzt</h2>
        <p><b>DER KANTON, der im Zentrum der Schweiz und Europas liegt.</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ipsum ac erat mattis, in imperdiet
          lectus sagittis. </p>
      </div>
      <h3>Karte Einstellungnen</h3>

      <SelectionChip
        text={'Zugnetz'}/>

      <MapSVG/>

    </div>
  )
}
