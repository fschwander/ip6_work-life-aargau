import React, {useEffect, useRef, useState} from 'react';
import {SelectionChip} from '../../../components/buttons/SelectionChip';
import {ReactComponent as MapSVG} from '../../../res/imgs/map.svg';
import * as d3 from 'd3';

export const TravelingDistancePage: React.FC = () => {
  const isInitialMount = useRef(true)
  const svgRef: React.RefObject<SVGSVGElement> = React.createRef();

  const [lakesVisible, setLakesVisible] = useState(true);
  const [cantonsVisible, setCantonsVisible] = useState(true);
  const [citiesVisible, setCitiesVisible] = useState(true);
  const [trainsVisible, setTrainsVisible] = useState(true);
  // const [motorwaysVisible, setMotorwaysVisible] = useState(true);

  const initMap = () => {
    console.log('init');


  }

  const updateChart = () => {
    console.log('update');
    const mapSVG = d3.select(svgRef.current)
    // console.log(svgRef, svgRef.current, mapSVG);

    mapSVG.selectAll('#lakes')
      .attr('opacity',lakesVisible ? 1 : 0)

    mapSVG.selectAll('#trains')
      .attr('opacity',trainsVisible ? 1 : 0)



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

      <SelectionChip text={'Zug'}
                     onClick={() => setTrainsVisible(!trainsVisible)}/>
      <SelectionChip text={'Seen'}
                     onClick={() => setLakesVisible(!lakesVisible)}/>

      <MapSVG ref={svgRef}/>

    </div>
  )
}
