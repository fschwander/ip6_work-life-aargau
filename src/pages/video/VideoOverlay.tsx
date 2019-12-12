import React from 'react';
import {VideoOverlayInterface} from '../../res/data/video/VideoOverlayInterface';
import iconArrowLeft from '../../res/icons/arrow2_left.svg'
import iconArrowRight from '../../res/icons/arrow2_right.svg'

interface Props {
  data: VideoOverlayInterface
}

export const VideoOverlay: React.FC<Props> = props => {

  const {data} = props;

  return (
    <div className='VideoOverlay horizontal-container'>
      <div className='box-left vertical-container'>

        <div className='header-container'>
          <h4>Aargauer</h4>
          <h2>{data.header.title}</h2>
          <p>{data.header.text}</p>
        </div>

        <div className='topics-container'>
          <h3>Themen</h3>
          <div className='horizontal-container'>
            {
              data.topics.map(d => (
                  <div className='horizontal-container' key={d.text}>
                    <img src={d.icon} alt={d.text}/>
                    <p>{d.text}</p>
                  </div>
                )
              )
            }
          </div>
        </div>

        <div className='graph-container'>
          <h3>{data.graph.title}</h3>
          <p>//Graph placeholder//</p>
        </div>
      </div>

      <div className='box-right vertical-container'>
        <div className='details-container'>
          <img src={data.details.image} alt={data.details.title}/>
        </div>

        <div className='box-explanation'>
          <h3>{data.header.title}</h3>
          {
            data.header.items.map(d =>
              <h3 key={d.text}>{d.text} <span>{d.value}</span></h3>
            )
          }
        </div>

        <div className='box-footer'>
          <div className='nav-container horizontal-container'>
            <img src={iconArrowLeft} alt='arrow left'/>
            <img src={iconArrowRight} alt='arrow right'/>
          </div>
          <h3>{data.details.title}</h3>
          {
            data.details.items.map(d =>
              <p key={d.text}>{d.text} <span>{d.value}</span></p>
            )
          }
        </div>
      </div>

    </div>
  )
};
