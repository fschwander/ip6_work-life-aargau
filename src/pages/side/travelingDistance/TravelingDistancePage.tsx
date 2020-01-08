import React, {useEffect, useRef, useState} from 'react';
import {SelectionChip} from '../../../components/buttons/SelectionChip';
import {ReactComponent as MapSVG} from '../../../res/imgs/map.svg';
import * as d3 from 'd3';
import citiesData from './citiesData.json'

export const TravelingDistancePage: React.FC = () => {
  const isInitialMount = useRef(true)
  const svgRef: React.RefObject<SVGSVGElement> = React.createRef();

  const [lakesVisible, setLakesVisible] = useState(true);
  const [cantonsVisible, setCantonsVisible] = useState(true);
  const [trainsVisible, setTrainsVisible] = useState(true);
  // const [airportsVisible, setAirportsVisible] = useState(true);
  // const [motorwaysVisible, setMotorwaysVisible] = useState(true);

  const initMap = () => {
    console.log('init');
    setupCities()
  }

  const updateChart = () => {
    console.log('update');
    // console.log(svgRef, svgRef.current, mapSVG);
    const mapSVG = d3.select(svgRef.current)

    mapSVG.selectAll('#lakes')
      .attr('opacity', lakesVisible ? 1 : 0)

    mapSVG.selectAll('#trains')
      .attr('opacity', trainsVisible ? 1 : 0)

    mapSVG.selectAll('#cantons')
      .attr('opacity', cantonsVisible ? .5 : 0)
  }

  const setupCities = () => {
    const cityGroup = d3.select(svgRef.current).select('#cities')
      .selectAll('g')
      .data(citiesData).enter().append('g')

    cityGroup.attr('transform', d => {
      console.log(d);
      return `translate(${d.x},${d.y})`
    })

    cityGroup.append('circle')
      .attr('r', 5)
      .attr('cx', 13)
      .attr('cy', 13)
      .attr('fill', 'white')

    cityGroup.append('circle')
      .attr('r', 13)
      .attr('cx', 13)
      .attr('cy', 13)
      .attr('opacity', 0.2)
      .attr('fill', 'white')
      .attr('class', 'button')
      .on('click', d => console.log('click', d)) // todo: set state of active city here

    console.log(citiesData);
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      initMap();
    }
    updateChart()

  })

  return (
    <div className='TravelingDistancePage'>
      <div className='ContentContainer'>
        <h2>Der Aargau is gut vernetzt</h2>
        <p><b>DER KANTON, der im Zentrum der Schweiz und Europas liegt.</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ipsum ac erat mattis, in imperdiet
          lectus sagittis. </p>
      <h3>Karte Einstellungnen</h3>

      <div className='chipWrapper'>
      <SelectionChip text={'Zug'}
                     onClick={() => setTrainsVisible(!trainsVisible)}/>
      <SelectionChip text={'Seen'}
                     onClick={() => setLakesVisible(!lakesVisible)}/>
      <SelectionChip text={'Kantonen'}
                     onClick={() => setCantonsVisible(!cantonsVisible)}/>

      </div>
      <MapSVG ref={svgRef}/>
      </div>

    </div>
  )
}
