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

    return (
      <div className='BackgroundVideo transparent-filter full-screen'>
        <div className='loading-container' style={{opacity: isBuffering ? 1 : 0}}>
          <Spinner color='light'/>
          <p>Einen Moment, bitte...</p>
        </div>

        <ReactPlayer className='player'
                     url={props.source}
                     playing={props.playVideo}
                     muted playsinline
                     onReady={() => setIsBuffering(false)}
                     onEnded={() => props.onVideoEnded()}
                     width='100%'
                     height='100%'/>
      </div>
    )
}
