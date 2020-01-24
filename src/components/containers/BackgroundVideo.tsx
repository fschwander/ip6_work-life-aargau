import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import {Spinner} from 'reactstrap';

interface FullScreenVideoProps {
  source: string,
  playVideo: boolean,
  onVideoEnded: Function
}

export const BackgroundVideo: React.FC<FullScreenVideoProps> = props => {
  const [isBuffering, setIsBuffering] = React.useState(false);
  const [size, setSize] = useState({videoWidth: 0, videoHeight: 0, translateX: 0});

  const updateSize = () => {
    const {innerWidth, innerHeight} = window;
    const videoRatio = 1920 / 1080;
    let width = innerHeight * videoRatio;

    console.log(innerWidth, innerHeight);

    if (innerWidth / innerHeight < videoRatio) {
      console.log('if', videoRatio, innerWidth / innerHeight);
      setSize({
        videoWidth: innerHeight * videoRatio,
        videoHeight: innerHeight,
        translateX: innerWidth < width ? (width - innerWidth) / 2 : 0
      });

    } else {
      console.log('else', videoRatio, innerWidth / innerHeight);
      setSize({
        videoWidth: innerWidth,
        videoHeight: innerWidth / videoRatio,
        translateX: innerWidth < width ? (width - innerWidth) / 2 : 0
      });
    }


  }

  useEffect(() => {
    updateSize()
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className='BackgroundVideo'>
      <ReactPlayer className='player transparent-filter'
                   url={props.source}
                   playing={props.playVideo}
                   muted={true}
                   playsinline={true}
                   width={size.videoWidth}
                   height={size.videoHeight}
                   onReady={() => setIsBuffering(false)}
                   onEnded={() => props.onVideoEnded()}/>

      <div className='loading-container' style={{opacity: isBuffering ? 1 : 0}}>
        <Spinner color='light'/>
        <p>Einen Moment, bitte...</p>
      </div>
    </div>
  )
}
