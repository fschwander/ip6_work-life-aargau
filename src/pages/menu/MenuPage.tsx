import React, {useState} from 'react';
import {BackgroundVideoContainer} from '../../components/containers/BackgroundVideoContainer';
import backgroundImage from '../../res/imgs/menu_aargau.jpg';
import zoomVideo from '../../res/videos/zoomToAargau_final.mp4'

export const MenuPage: React.FC = () => {
  const [videoIsVisible, setVideoIsVisible] = useState(true);
  const [playVideo, setPlayVideo] = useState(true);

  const videoFadeOutDuration = 2000;

  const onVideoEnded = () => {
    setVideoIsVisible(false);
    window.setTimeout(() => setPlayVideo(false), videoFadeOutDuration);
  };

  return (
    <div className={`MenuPage full-screen`}
         style={{backgroundImage: `url(${backgroundImage})`}}>

      {playVideo ?
        <div className={`video-fade-container ${videoIsVisible ? 'show' : 'hide'}`}
             style={{transitionDuration: `${videoFadeOutDuration}ms`}}>
          <BackgroundVideoContainer source={zoomVideo} playVideo={playVideo} onVideoEnded={onVideoEnded}/>
        </div> : null}

    </div>
  )
}
