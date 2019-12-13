import React, {useEffect} from 'react';
import * as d3 from 'd3';

export const PieChart: React.FC = props => {
  const chartRef: React.RefObject<HTMLDivElement> = React.createRef();

  const initChart = () => {
    d3.select(chartRef.current).append('svg').attr('width', 140).attr('height', 80)
  }

  useEffect(() => {
    initChart()
  }, [])

  return (
    <div className='PieChart' >
      <div className='chart-container' ref={chartRef}/>

    </div>
  )
}
