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
  const chartRef: React.RefObject<HTMLDivElement> = React.createRef();

  const [activeIndex, setActiveIndex] = useState(0);

  const initChart = () => {
    const {data} = props;
    const size = 200;
    const strokeWidth = 2;
    const container = d3.select(chartRef.current);

    const chart = container.append('svg')
      .style('width', '100%')
      .attr('viewBox', `0 0 ${size} ${size}`);

    const plotArea = chart.append('g')
      .attr('transform', `translate(${size / 2}, ${size / 2})`);

    const pie = d3.pie<DataInterface>()
      .sort(null)
      .value(d => d.value);

    const arcs = pie(data);

    const arc = d3.arc<any>()
      .innerRadius(0)
      .outerRadius((d,i) => {
        const radiusSize = (size - strokeWidth) / 2;
        if (i === activeIndex) {
          return  radiusSize;
        } else {
          return radiusSize * 0.95;
        }
      });

    plotArea.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .classed('is-active', (d,i) => i === activeIndex)
      .attr('stroke-width', 2)
      .attr('d', arc)
      .on('click', (d,i) => {
        setActiveIndex(i)
      });
  }

  // executed on component did init
  useEffect(() => {
    initChart()
  },[])

  // executed on component did init and component did update
  useEffect(() => {

  })

  return (
    <div className='PieChart'>
      <div className='chart-container' ref={chartRef}/>

    </div>
  )
}
