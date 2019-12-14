import * as d3 from 'd3';
import React, {useEffect} from 'react';

interface DataInterface {
  name: string,
  value: number
}

interface PieChartProps {
  data: Array<DataInterface>
}

export const PieChart: React.FC<PieChartProps> = props => {
  const chartRef: React.RefObject<HTMLDivElement> = React.createRef();

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
      .outerRadius((size - strokeWidth) / 2);

    plotArea.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('stroke-width', 2)
      .attr('d', arc);
  }

  useEffect(() => {
    initChart()
  }, [])

  return (
    <div className='PieChart'>
      <div className='chart-container' ref={chartRef}/>

    </div>
  )
}
