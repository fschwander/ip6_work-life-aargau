import * as d3 from 'd3';
import React, {FunctionComponent, ReactElement, SVGProps, useEffect, useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideoContainer} from '../../components/containers/BackgroundVideoContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import aarauImage from '../../res/imgs/menu_aarau.jpg';
import {ReactComponent as aarauSvg} from '../../res/imgs/menu_aarau.svg';
import aargauImage from '../../res/imgs/menu_aargau.jpg';
import {ReactComponent as aargauSvg} from '../../res/imgs/menu_aargau.svg';
import badenImage from '../../res/imgs/menu_baden.jpg';
import {ReactComponent as badenSvg} from '../../res/imgs/menu_baden.svg';
import zoomVideo from '../../res/videos/zoomToAargau_final.mp4'
import {Constants} from '../../services/Constants';
import {AarauFilterSlide} from './AarauFilterSlide';
import {AarauSlide} from './AarauSlide';
import {BadenFilterSlide} from './BadenFilterSlide';
import {BadenSlide} from './BadenSlide';
import {HomeSlide} from './HomeSlide';

export interface MenuSlideInterface {
  component: ReactElement,
  svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>,
  backgroundImage: string
}

export const MenuPage: React.FC = () => {
  const isInitialMount = useRef(true);
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

  const goToBadenSlide = () => {
    setActiveSlide(slides[1])
    setBadenVisible(false)
  }

  const goToAarauSlide = () => {
    setActiveSlide(slides[3]);
    setAarauVisible(false)
  }

  const onVideoEnded = () => {
    setVideoIsVisible(false);
    window.setTimeout(() => setVideoIsPlaying(false), videoFadeOutDuration);
  };

  const slides: Array<MenuSlideInterface> = [];
  slides.push(
    {
      component: <HomeSlide goToAarauSlide={goToAarauSlide} setAarauVisible={setAarauVisible}
                            goToBadenSlide={goToBadenSlide} setBadenVisible={setBadenVisible}/>,
      svgComponent: aargauSvg,
      backgroundImage: aargauImage
    },
    {
      component: <BadenSlide slides={slides} setActiveSlide={setActiveSlide}/>,
      svgComponent: badenSvg,
      backgroundImage: badenImage
    },
    {
      component: <BadenFilterSlide slides={slides} setActiveSlide={setActiveSlide}/>,
      svgComponent: badenSvg,
      backgroundImage: badenImage
    },
    {
      component: <AarauSlide slides={slides} setActiveSlide={setActiveSlide}/>,
      svgComponent: aarauSvg,
      backgroundImage: aarauImage
    },
    {
      component: <AarauFilterSlide slides={slides} setActiveSlide={setActiveSlide}/>,
      svgComponent: aarauSvg,
      backgroundImage: aarauImage
    }
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setActiveSlide(slides[0]);
    }

    const updateMap = () => {
      const mapSVG = d3.select('#maps')

      mapSVG.select('#Baden')
        .transition().duration(500)
        .attr('opacity', badenVisible ? 1 : 0)

      mapSVG.select('#Aarau')
        .transition().duration(500)
        .attr('opacity', aarauVisible ? 1 : 0)

    };
    updateMap()
  }, [slides, aarauVisible, badenVisible])

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
