import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import {Spinner} from 'reactstrap';

interface FullScreenVideoProps {
  source: string,
  playVideo: boolean,
  onVideoEnded: Function
}

export const BackgroundVideo: React.FC<FullScreenVideoProps> = props => {
  const [isBuffering, setIsBuffering] = useState(false);
  const [size, setSize] = useState({videoWidth: 0, videoHeight: 0});

  const updateSize = () => {
    const windowWidth = window.screen.width;
    const windowHeight = window.screen.height;

    const videoRatio = 1920 / 1080;

    if (windowWidth / windowHeight < videoRatio) {
      setSize({
        videoWidth: windowHeight * videoRatio,
        videoHeight: windowHeight
      });
    } else {
      setSize({
        videoWidth: windowWidth,
        videoHeight: windowWidth / videoRatio
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize()
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className='BackgroundVideo full-screen'>
      <div className='video-container'
           style={{
             width: `${size.videoWidth}px`,
             minHeight: `${size.videoHeight}px`
           }}>
        <ReactPlayer className='player transparent-filter'
                     url={props.source}
                     playing={props.playVideo}
                     muted={true}
                     playsinline={true}
                     width='100%'
                     height='100%'
                     onReady={() => setIsBuffering(false)}
                     onEnded={() => props.onVideoEnded()}/>

        <div className='loading-container' style={{opacity: isBuffering ? 1 : 0}}>
          <Spinner color='light'/>
          <p>Einen Moment, bitte...</p>
        </div>
      </div>
    </div>
  )
}
