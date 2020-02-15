import * as d3 from 'd3';
import React, {FunctionComponent, ReactElement, SVGProps, useEffect, useRef, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {RectButton} from '../../components/buttons/RectButton';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideoContainer} from '../../components/containers/BackgroundVideoContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import {ReactComponent as ArrowLeft} from '../../res/icons/arrow_left.svg';
import aarauImage from '../../res/imgs/menu_aarau.jpg';
import {ReactComponent as aarauSvg} from '../../res/imgs/menu_aarau.svg';
import aargauImage from '../../res/imgs/menu_aargau.jpg';
import {ReactComponent as aargauSvg} from '../../res/imgs/menu_aargau.svg';
import badenImage from '../../res/imgs/menu_baden.jpg';
import {ReactComponent as badenSvg} from '../../res/imgs/menu_baden.svg';
import zoomVideo from '../../res/videos/zoomToAargau_final.mp4'
import {Constants} from '../../services/Constants';

export const MenuPage: React.FC = () => {
  const isInitialMount = useRef(true);
  const history = useHistory();
  const location = useLocation();

  const startPlayingIntro = location.state && location.state.playIntroVideo === true;

  const [videoIsPlaying, setVideoIsPlaying] = useState(startPlayingIntro);
  const [videoIsVisible, setVideoIsVisible] = useState(true);
  const [badenVisible, setBadenVisible] = useState(false);
  const [aarauVisible, setAarauVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState({
    component: <div/>,
    svgComponent: aarauSvg,
    backgroundImage: aargauImage
  });

  const videoFadeOutDuration = 1000;

  interface MenuSlideInterface {
    component: ReactElement,
    svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>,
    backgroundImage: string
  }

  const updateMap = () => {
    const mapSVG = d3.select('#maps')

    mapSVG.select('#Baden')
      .transition().duration(500)
      .attr('opacity', badenVisible ? 1 : 0)

    mapSVG.select('#Aarau')
      .transition().duration(500)
      .attr('opacity', aarauVisible ? 1 : 0)

  }

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
            <RectButton className='Aarau' onClick={() => setActiveSlide(slides[1])} text={'Aarau'}
                        onMouseOver={() => setAarauVisible(true)}
                        onMouseLeave={() => setAarauVisible(false)}/>
            <RectButton className='Baden' onClick={() => setActiveSlide(slides[2])} text={'Baden'}
                        onMouseOver={() => setBadenVisible(!badenVisible)}
                        onMouseLeave={() => setBadenVisible(false)}/>
          </div>
        </div>
      </div>
    )
  }

  const BackToMapButton = () => {
    return (
      <div className='BackToMapButton button horizontal-container'
           onClick={() => setActiveSlide(slides[0])}>
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
            <RectButton onClick={() => history.push('/aarau')} text={'Losfliegen!'}/>
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
            <RectButton onClick={() => history.push('/baden')} text={'Losfliegen!'}/>
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

  const slides: Array<MenuSlideInterface> = [
    {
      component: <HomeSlide/>,
      svgComponent: aargauSvg,
      backgroundImage: aargauImage
    },
    {
      component: <AarauSlide/>,
      svgComponent: aarauSvg,
      backgroundImage: aarauImage
    },
    {
      component: <BadenSlide/>,
      svgComponent: badenSvg,
      backgroundImage: badenImage
    }
  ]

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setActiveSlide(slides[0]);
    }
    updateMap()
  }, [slides])

  return (
    <div className={`MenuPage full-screen`} style={{backgroundImage: `url(${activeSlide.backgroundImage})`}}>

      {videoIsPlaying ?
        <div className={`video-fade-container ${videoIsVisible ? 'show' : 'hide'}`}
             style={{transitionDuration: `${videoFadeOutDuration}ms`}}>
          <BackgroundVideoContainer source={zoomVideo} playVideo={videoIsPlaying} onVideoEnded={onVideoEnded}/>
        </div> : null}

      {!videoIsPlaying ?
        <div>
          <AnimatedSVG svgComponent={activeSlide.svgComponent} isActive={!videoIsPlaying}/>
          <SlideInContainer slideInDirection={Constants.SLIDE_FROM_LEFT}>
            {activeSlide.component}
          </SlideInContainer>
        </div> : null}
    </div>
  )
}
