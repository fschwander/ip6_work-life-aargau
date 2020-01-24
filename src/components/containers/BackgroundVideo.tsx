import React from 'react';
import ReactPlayer from 'react-player';
import {Spinner} from 'reactstrap';

interface FullScreenVideoProps {
  source: string,
  playVideo: boolean,
  onVideoEnded: Function
}

export const BackgroundVideo: React.FC<FullScreenVideoProps> = props => {
  const [isBuffering, setIsBuffering] = React.useState(false);
  const videoRatio = 1920 / 1080;

  return (
    <div className='BackgroundVideo'>
      <ReactPlayer className='player transparent-filter'
                   url={props.source}
                   playing={props.playVideo}
                   muted={true}
                   playsinline={true}
                   width={window.innerHeight * videoRatio}
                   height={window.innerHeight}
                   onReady={() => setIsBuffering(false)}
                   onEnded={() => props.onVideoEnded()}/>

      <div className='loading-container' style={{opacity: isBuffering ? 1 : 0}}>
        <Spinner color='light'/>
        <p>Einen Moment, bitte...</p>
      </div>
    </div>
  )
}
