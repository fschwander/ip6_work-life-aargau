import React, {useState} from 'react';
import {RectButton} from '../../components/buttons/RectButton';
import {BackgroundVideoContainer} from '../../components/containers/BackgroundVideoContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import backgroundImage from '../../res/imgs/menu_aargau.jpg';
import zoomVideo from '../../res/videos/zoomToAargau_final.mp4'
import {Constants} from '../../services/Constants';

export const MenuPage: React.FC = () => {
  const [videoIsVisible, setVideoIsVisible] = useState(true);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const videoFadeOutDuration = 2000;

  const onVideoEnded = () => {
    setVideoIsVisible(false);
    window.setTimeout(() => setVideoIsPlaying(false), videoFadeOutDuration);
  };

  const HomeSlide = () => {
    return (
      <div className='HomeSlide'>
        <p className='transparent'>Ein interaktives Abenteuer</p>
        <h2>Finde deinen Aargau</h2>
        <h3 className='large'>Lerne über Unternehmen, Sehenswürdigkeiten und Freizeit</h3>
        <p>Erlebe den Aargau aus der Vogelperspektive und entdecke den Kanton, wie du ihn noch nie gesehen hast.</p>
        <p>Einfach entspannen und geniessen!</p>

        <div className='choose-container'>
          <h3 className='large'>Welche Region möchtest du dir anschauen?</h3>
          <div className={'selection-button-container horizontal-container'}>
            <RectButton onClick={() => console.log('clicked')} text={'Aarau'}/>
            <RectButton onClick={() => console.log('clicked')} text={'Baden'}/>
          </div>
        </div>
      </div>
    )
  }

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
          <HomeSlide/>
        </SlideInContainer> : null}


    </div>
  )
}
