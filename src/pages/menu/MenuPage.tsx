import React, {useEffect, useRef, useState} from 'react';
import {RectButton} from '../../components/buttons/RectButton';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideoContainer} from '../../components/containers/BackgroundVideoContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import {ReactComponent as ArrowLeft} from '../../res/icons/arrow_left.svg';
import backgroundImage from '../../res/imgs/menu_aargau.jpg';
import {ReactComponent as backgroundSvg} from '../../res/imgs/menu_aargau.svg';
import zoomVideo from '../../res/videos/zoomToAargau_final.mp4'
import {Constants} from '../../services/Constants';

export const MenuPage: React.FC = () => {
  const isInitialMount = useRef(true);
  const [videoIsVisible, setVideoIsVisible] = useState(true);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState();

  const videoFadeOutDuration = 2000;

  const HomeSlide = () => {
    return (
      <div className='HomeSlide'>
        <p className='transparent'>Ein interaktives Abenteuer</p>
        <h2>Finde deinen Aargau</h2>
        <h3 className='large'>Lerne über Unternehmen, Sehenswürdigkeiten und Freizeit</h3>
        <p>Erlebe den Aargau aus der Vogelperspektive und entdecke den Kanton, wie du ihn noch nie gesehen hast. Einfach
          entspannen und geniessen!</p>

        <div className='choose-container'>
          <h3 className='large'>Welche Region möchtest du dir anschauen?</h3>
          <div className={'selection-button-container horizontal-container'}>
            <RectButton onClick={() => setActiveSlide(slides.aarauSlide)} text={'Aarau'}/>
            <RectButton onClick={() => setActiveSlide(slides.badenSlide)} text={'Baden'}/>
          </div>
        </div>
      </div>
    )
  }

  const BackToMapButton = () => {
    return (
      <div className='BackToMapButton button horizontal-container'
           onClick={() => setActiveSlide(slides.menuSlide)}>
        <ArrowLeft/>
        <p>zurück zur Karte</p>
      </div>
    )
  }

  const AarauSlide = () => {
    return (
      <div className='AarauSlide'>
        <BackToMapButton/>
        <p className='transparent'>Ein interaktives Abenteuer</p>
        <h2>Aarau entdecken</h2>

        <div className='choose-container'>
          <h3 className='large'>Bist du bereit oder möchtest du Filter setzen?</h3>
          <div className='selection-button-container horizontal-container'>
            <RectButton onClick={() => console.log('losfliegen clicked')} text={'Losfliegen!'}/>
            <RectButton onClick={() => console.log('filter clicked')} text={'Filter setzen'} isActive={false}/>
          </div>
        </div>
      </div>
    )
  }

  const BadenSlide = () => {
    return (
      <div className='BadenSlide'>
        <BackToMapButton/>
        <p className='transparent'>Ein interaktives Abenteuer</p>
        <h2>Baden entdecken</h2>

        <div className='choose-container'>
          <h3 className='large'>Bist du bereit oder möchtest du Filter setzen?</h3>
          <div className='selection-button-container horizontal-container'>
            <RectButton onClick={() => console.log('losfliegen clicked')} text={'Losfliegen!'}/>
            <RectButton onClick={() => console.log('filter clicked')} text={'Filter setzen'} isActive={false}/>
          </div>
        </div>
      </div>
    )
  }

  const onVideoEnded = () => {
    setVideoIsVisible(false);
    window.setTimeout(() => setVideoIsPlaying(false), videoFadeOutDuration);
  };

  const slides = {
    menuSlide: <HomeSlide/>,
    aarauSlide: <AarauSlide/>,
    badenSlide: <BadenSlide/>
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setActiveSlide(slides.menuSlide);
    }
  }, [slides.menuSlide])

  return (
    <div className={`MenuPage full-screen`} style={{backgroundImage: `url(${backgroundImage})`}}>

      {videoIsPlaying ?
        <div className={`video-fade-container ${videoIsVisible ? 'show' : 'hide'}`}
             style={{transitionDuration: `${videoFadeOutDuration}ms`}}>
          <BackgroundVideoContainer source={zoomVideo} playVideo={videoIsPlaying} onVideoEnded={onVideoEnded}/>
        </div> : null}

      {!videoIsPlaying ?
        <div>
          <AnimatedSVG svgComponent={backgroundSvg} isActive={!videoIsPlaying}/>
          <SlideInContainer slideInDirection={Constants.SLIDE_FROM_LEFT}>
            {activeSlide}
          </SlideInContainer>
        </div> : null}
    </div>
  )
}
