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
  const [size, setSize] = useState({videoWidth: 0, videoHeight: 0, translateX: 0, translateY: 0});

  const updateSize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    console.log(document.documentElement);

    const videoRatio = 1920 / 1080;

    if (windowWidth / windowHeight < videoRatio) {
      setSize({
        videoWidth: windowHeight * videoRatio,
        videoHeight: windowHeight,
        translateX: (windowHeight * videoRatio - windowWidth) / -2,
        translateY: 0
      });
    } else {
      setSize({
        videoWidth: windowWidth,
        videoHeight: windowWidth / videoRatio,
        translateX: 0,
        translateY: (windowWidth / videoRatio - windowHeight) / -2
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

      <div className='outer-container'
           style={{
             width: `${size.videoWidth}px`,
             minHeight: `${size.videoHeight}px`,
             transform: `translate(${size.translateX}px,${size.translateY}px)`
           }}>

        <div className='inner-container'>
          <ReactPlayer className='player transparent-filter'
                       url={props.source}
                       playing={props.playVideo}
                       muted={true}
                       playsinline={true}
                       width={size.videoWidth}
                       height={size.videoHeight}
                       onReady={() => setIsBuffering(false)}
                       onEnded={() => props.onVideoEnded()}/>

          {props.children}

        </div>
      </div>

      <div className='loading-indicator' style={{opacity: isBuffering ? 1 : 0}}>
        <Spinner color='light'/>
        <p>Einen Moment, bitte...</p>
      </div>
    </div>
  )
}
