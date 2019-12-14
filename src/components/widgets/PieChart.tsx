import * as d3 from 'd3';
import React, {useEffect, useState} from 'react';

interface DataInterface {
  name: string,
  value: number
}

interface PieChartProps {
  data: Array<DataInterface>
}

export const PieChart: React.FC<PieChartProps> = props => {
  const [activeIndex, setActiveIndex] = useState(0);

  const chartRef: React.RefObject<HTMLDivElement> = React.createRef();
  const size = 200;
  const strokeWidth = 3;

  const initChart = () => {
    const container = d3.select(chartRef.current);

    const chart = container.append('svg')
      .style('width', '100%')
      .attr('viewBox', `0 0 ${size} ${size}`);

    const plotArea = chart.append('g')
      .attr('transform', `translate(${size / 2}, ${size / 2})`);

    const pie = d3.pie<DataInterface>()
      .sort(null)
      .value(d => d.value);

    const arcs = pie(props.data);

    plotArea.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('class', 'button')
  };

  const updateChart = () => {
    const arc = d3.arc<any>()
      .innerRadius(0)
      .outerRadius((d, i) => {
        const radiusSize = (size - strokeWidth) / 2;
        if (i === activeIndex) {
          return radiusSize;
        } else {
          return radiusSize * 0.95;
        }
      });

    d3.select(chartRef.current).selectAll('path')
      .classed('is-active', (d, i) => i === activeIndex)
      .attr('stroke-width', strokeWidth)
      .attr('d', arc)
      .on('click', (d, i) => {
        setActiveIndex(i)
      });
  };

  /**
   * executed on component did init
   */  useEffect(() => {
    initChart()
  }, []);

  /**
   * executed on component did init and component did update
   */
  useEffect(() => {
    updateChart();
  });

  return (
    <div className='PieChart horizontal-container'>
      <div className='chart-container' ref={chartRef}/>
      <ul className='label-container'>
        {props.data.map((d, i) => {
          return (
            <li key={d.name + i}
                className={`button ${activeIndex === i ? 'is-active' : 'is-inactive'}`}
                onClick={() => setActiveIndex(i)}>
              <div>
                <h2>{d.value}%</h2>
                <p>{d.name}</p>
              </div>
            </li>)
        })}
      </ul>

    </div>
  )
}
