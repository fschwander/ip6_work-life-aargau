import React, {useEffect, useRef, useState} from 'react';
import {SelectionChip} from '../../../components/buttons/SelectionChip';
import {TravelTimes} from '../../../components/widgets/TravelTimes';
import {ReactComponent as MapSVG} from '../../../res/imgs/map.svg';
import * as d3 from 'd3';
import citiesData from './citiesData.json'

export const TravelingDistancePage: React.FC = () => {
  const isInitialMount = useRef(true)
  const svgRef: React.RefObject<SVGSVGElement> = React.createRef();

  const [lakesVisible, setLakesVisible] = useState(true);
  const [cantonsVisible, setCantonsVisible] = useState(true);
  const [trainsVisible, setTrainsVisible] = useState(true);
  const [cityActive, setCityActive] = useState();
  // const [airportsVisible, setAirportsVisible] = useState(true);
  // const [motorwaysVisible, setMotorwaysVisible] = useState(true);

  const initMap = () => {
    setupCities()
  }

  const updateChart = () => {
    // console.log(svgRef, svgRef.current, mapSVG);
    const mapSVG = d3.select(svgRef.current)

    mapSVG.selectAll('#lakes')
      .attr('opacity', lakesVisible ? 1 : 0)

    mapSVG.selectAll('#trains')
      .attr('opacity', trainsVisible ? 1 : 0)

    mapSVG.selectAll('#cantons')
      .attr('opacity', cantonsVisible ? .5 : 0)

    mapSVG.selectAll('.city')
      .selectAll('circle')
      .classed('is-active', d => d === cityActive)
      .attr('fill', d => d === cityActive ? '#7EE2D1' : 'white')

  }

  const setupCities = () => {
    const cityGroup = d3.select(svgRef.current).select('#cities')
      .selectAll('g')
      .data(citiesData).enter().append('g').attr('class', d => {
        return `city ${d.city} `
      })

    cityGroup.attr('transform', d => {
      return `translate(${d.x},${d.y})`
    })

    cityGroup.append('circle')
      .attr('r', 5)
      .attr('cx', 13)
      .attr('cy', 13)
      .attr('fill', 'white')
      .attr('class','inner-circle')

    cityGroup.append('circle')
      .attr('r', 13)
      .attr('cx', 13)
      .attr('cy', 13)
      .attr('opacity', 0.2)
      .attr('fill', 'white')
      .attr('class', 'outer-circle button')
      .on('click', d => setCityActive(d))

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
        <TravelTimes/>
      </div>

    </div>
  )
}
