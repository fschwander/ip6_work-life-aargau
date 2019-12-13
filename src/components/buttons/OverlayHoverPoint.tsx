import React, {useState} from 'react';
import {VideoOverlay} from '../../pages/video/VideoOverlay';
import {VideoOverlayInterface} from '../../res/data/video/VideoOverlayInterface';
import {HoverPoint} from './HoverPoint';

interface Props {
  className?: string,
  data: VideoOverlayInterface,
  hOrientation?: string,
  onMouseEnter: Function,
  onMouseLeave: Function,
  setPopupContainer: Function
}

export const OverlayHoverPoint: React.FC<Props> = props => {
  const {data} = props;
  const [isActive, setIsActive] = useState(false);

  const getRootClass = () => {
    let rootClass = `OverlayHoverPoint ${props.className} ${data.type}`;
    rootClass += isActive ? ' is-active' : '';
    rootClass += props.hOrientation !== undefined ? ' ' + props.hOrientation : '';
    return rootClass;
  }

  const onActivate = () => {
    props.onMouseEnter();
    setIsActive(true);
  }

  const onDeactivate = () => {
    props.onMouseLeave();
    setIsActive(false);
  }

  return (
    <div className={getRootClass()}
         onMouseLeave={onDeactivate}>
      <HoverPoint onMouseEnter={onActivate}
                  onClick={() => props.setPopupContainer(<VideoOverlay data={data}/>)}/>
      <h4 className='label'>{data.header.title}</h4>
    </div>
  )
}
