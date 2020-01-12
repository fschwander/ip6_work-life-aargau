import React, {useEffect, useRef, useState} from 'react';
import {SelectionChip} from './SelectionChip';
import {ReactComponent as MapSVG} from '../../../res/imgs/map.svg';
import * as d3 from 'd3';
import iconTrain from '../../../res/icons/train.svg';
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
      .attr('class', 'inner-circle')

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

  const getTravelTimesBars = () => {

    let citiesArray = cityActive.traveltimes
    let array = [{foo: 1}, {foo: 2}, {foo: 3}]

    // return (
    //   // console.log(cityActive.city)
    //   citiesArray.map(el => {
    //     return (
    //       Object.values(el.traveltimes).map(bel => {
    //         // return(
    //         //   console.log(Object.values(bel))
    //         // )
    //       })
    //
    //     )
    //   })
    // )

    return (
      Object.values(citiesArray).map((el, i) => {
        return (
          <div className='travel-distances' >
            <div className='icon-container' style={{width: '3.5rem'}}>
              <img src={iconTrain} alt='icon'/>
            </div>
            <div className='content-container'>
              <h4>{cityActive.city}</h4>
              {/*here I need el.startingPoint instead of cityActive.city*/}
              {
                console.log(el)
              }
              <div className='background-bar' style={{backgroundColor: "#5C6587"}}>
                <div className='active-bar'/>
              </div>
            </div>
          </div>
        )
      }))

    // return (
    //   citiesArray.map((el,i) => {
    //     return (
    //       <div className='travel-distances' key={el.city + i}>
    //         <div className='icon-container' style={{width: '3.5rem'}}>
    //           <img src={iconTrain} alt='icon'/>
    //         </div>
    //         <div className='content-container'>
    //           <h4>{Object.values(el.city)}</h4>
    //           {
    //             el.traveltimes.map(subitem => {
    //               return (
    //                console.log((<div>{Object.values(subitem)}</div>))
    //               )
    //             })
    //           }
    //           {/*<h4>{cityActive.traveltimes[0].Aarau}</h4>*/}
    //           {/*<h4>{el.traveltimes[1].Aarau !== undefined ? el.traveltimes[1].Aarau : null}</h4>*/}
    //           <div className='background-bar' style={{backgroundColor: "#5C6587"}}>
    //             <div className='active-bar'/>
    //           </div>
    //         </div>
    //       </div>
    //     )
    //   }))

  }

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

        {cityActive !== undefined ? getTravelTimesBars() : null}
        {/*{getTravelTimesBars()}*/}
      </div>

    </div>
  )
}
