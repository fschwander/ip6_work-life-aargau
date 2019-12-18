import React, {useState} from 'react';
import {VideoOverlay} from '../../pages/video/VideoOverlay';
import {VideoOverlayInterface} from '../../pages/video/data/VideoOverlayInterface';
import {HoverPoint} from './HoverPoint';

interface Props {
  className?: string,
  data: VideoOverlayInterface,
  onMouseEnter?: Function,
  onMouseLeave?: Function,
  onPointClicked: Function
}

export const OverlayHoverPoint: React.FC<Props> = props => {
  const {data} = props;
  const [isActive, setIsActive] = useState(false);

  const getRootClass = () => {
    let rootClass = `OverlayHoverPoint ${props.className} ${data.type}`;
    rootClass += isActive ? ' is-active' : '';
    return rootClass;
  }

  const onActivate = () => {
    if (props.onMouseEnter !== undefined) {
      props.onMouseEnter();
    }
    setIsActive(true);
  }

  const onDeactivate = () => {
    if (props.onMouseLeave) {
      props.onMouseLeave();
    }
    setIsActive(false);
  }

  const openOverlay = () => {
    props.onPointClicked(<VideoOverlay data={data}/>)
  }

  return (
    <div className={getRootClass()}
         onMouseLeave={onDeactivate}>
      <HoverPoint onMouseEnter={onActivate}
                  onClick={openOverlay}/>
    </div>
  )
}
