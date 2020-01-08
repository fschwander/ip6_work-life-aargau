import React from 'react';
import {SelectionChip} from '../../../components/buttons/SelectionChip';

export const TravelingDistancePage: React.FC = () => {

  return (
    <div className='TravelingDistancePage'>
      <div className='TravellingIntroduction'>
      <h2>Der Aargau is gut vernetzt</h2>
      <p><b>DER KANTON, der im Zentrum der Schweiz und Europas liegt.</b></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ipsum ac erat mattis, in imperdiet lectus sagittis. </p>
      </div>
      <h3>Karte Einstellungnen</h3>

        <SelectionChip
              text={'Zugnetz'}/>

    </div>
  )
}
