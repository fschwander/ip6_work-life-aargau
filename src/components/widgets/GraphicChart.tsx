import * as d3 from 'd3';
import React, {useEffect, useRef, useState} from 'react';

interface GraphicChartProps {
  svgComponent: React.FC,
  data: Array<DataInterface>
}

interface DataInterface {
  name: string,
  value: string
}

export const GraphicChart: React.FC<GraphicChartProps> = props => {
  const [activeIndex, setActiveIndex] = useState(1);
  const rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  const SVGImage = props.svgComponent
  const isInitialMount = useRef(true);

  const updateMap = () => {

    d3.select(rootRef.current).select('#graphics')
      .selectAll('g')
      .classed('is-active', (d, i) => i === activeIndex)
      .on('click', (d, i) => setActiveIndex(i))
      .attr('stroke', 'white')
      .attr('opacity', (d, i) => `${activeIndex === i ? '1' : '0.4'}`)

  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
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
            <li key={d.name + i}
                className={`button ${activeIndex === i ? 'is-active' : 'is-inactive'}`}
                onClick={() => setActiveIndex(i)}>
              <div>
                <h2>{d.value}</h2>
                <p>{d.name}</p>
              </div>
            </li>)
        })}
      </ul>
    </div>
  )
}
