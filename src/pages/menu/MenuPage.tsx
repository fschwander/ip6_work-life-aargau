import React, {useState} from 'react';
import {BackgroundVideoContainer} from '../../components/containers/BackgroundVideoContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import backgroundImage from '../../res/imgs/menu_aargau.jpg';
import zoomVideo from '../../res/videos/zoomToAargau_final.mp4'
import {Constants} from '../../services/Constants';

export const MenuPage: React.FC = () => {
  const [videoIsVisible, setVideoIsVisible] = useState(true);
  const [videoIsPlaying, setVideoIsPlaying] = useState(true);

  const videoFadeOutDuration = 2000;

  const onVideoEnded = () => {
    setVideoIsVisible(false);
    window.setTimeout(() => setVideoIsPlaying(false), videoFadeOutDuration);
  };

  return (
    <div className={`MenuPage full-screen`}
         style={{backgroundImage: `url(${backgroundImage})`}}>

      {videoIsPlaying ?
        <div className={`video-fade-container ${videoIsVisible ? 'show' : 'hide'}`}
             style={{transitionDuration: `${videoFadeOutDuration}ms`}}>
          <BackgroundVideoContainer source={zoomVideo} playVideo={videoIsPlaying} onVideoEnded={onVideoEnded}/>
        </div> : null}

      {!videoIsPlaying ?
        <SlideInContainer slideInDirection={Constants.SLIDE_FROM_LEFT}>
          sup?
        </SlideInContainer>:null}


    </div>
  )
}
