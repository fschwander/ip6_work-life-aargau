import * as d3 from 'd3';
import React, {useEffect, useState} from 'react';

interface GraphicChartProps {
  svgComponent: React.FC,
  data: Array<DataInterface>
}

interface DataInterface {
  name?: string,
  unit?: string,
  value: string
}

export const GraphicChart: React.FC<GraphicChartProps> = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  const SVGImage = props.svgComponent

  const updateMap = () => {

    d3.select(rootRef.current).select('#graphics')
      .selectAll('g')
      .classed('is-active', (d, i) => i === activeIndex)
      .on('click', (d, i) => setActiveIndex(i))
      .attr('stroke', 'white')
      .attr('opacity', (d, i) => `${activeIndex === i ? '1' : '0.4'}`)
  }

  useEffect(() => {
    updateMap();
  })

  return (
    <div className='GraphicChart horizontal-container'>
      <div className='chart-container' ref={rootRef}>
        <SVGImage/>
      </div>
      <ul className='label-container'>
        {props.data.map((d, i) => {
          return (
            <li key={d.value + i}
                className={`button ${activeIndex === i ? 'is-active' : 'is-inactive'}`}
                onClick={() => setActiveIndex(i)}>
              <div>
                <div className='value'>
                  <h2>{d.value}</h2>{d.unit !== undefined ? <h3>{"\u00a0" + d.unit}</h3> : null}
                </div>
                <p>{d.name}</p>
              </div>
            </li>)
        })}
      </ul>
    </div>
  )
}
