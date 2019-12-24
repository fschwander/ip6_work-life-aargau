import videoBaden from "../../../res/videos/baden1.mp4";
import videoAarau1 from "../../../res/videos/aarau1.mp4";
import videoAarau2 from "../../../res/videos/aarau2.mp4";
import {hikingTrails} from "./hikingTrails";
import {mammut} from "./mammut";
import {ReactComponent as svgAarau1} from "../../../res/videos/aarau1.svg";
import {ReactComponent as svgRuine} from "../../../res/videos/baden1-ruine.svg";
import {ReactComponent as svgRoof} from "../../../res/videos/baden1-roof.svg";
import {ReactComponent as svgTower} from "../../../res/videos/baden1-tower.svg";
import {VideoSlideProps} from "../VideoSlide";

export const videoSlides: Array<VideoSlideProps> = [
  {
    className: 'aarau-slide1',
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau1,
    isMainPoint: true,
    hoverPoints: [{
      title: 'Kultur & Geschichte',
      subtitle: 'Historische Highlights',
      className: 'penis',
      overlayData: hikingTrails,
      svgComponent: svgAarau1,
      lineLength: 60,
      lineRotation: 70,
      orientation: 'right'
    },]
  },
  {
    className: 'aarau-slide2',
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau2,
    hoverPoints: [{
      title: 'Kultur & Geschichte',
      subtitle: 'Historische Highlights',
      className: 'culture-and-history',
      overlayData: hikingTrails,
      svgComponent: svgTower,
      lineLength: 60,
      lineRotation: 210,
      orientation: 'right'
    },]
  },
  {
    className: 'baden-slide1',
    title: 'Die Stadt Baden',
    isMainPoint: true,
    videoSrc: videoBaden,
    hoverPoints: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgRuine,
        lineLength: 60,
        lineRotation: 70,
        orientation: 'right'
      },
      {
        title: 'Deine Vorteile',
        subtitle: 'Erschwingliche Miete',
        className: 'hiking-trails',
        overlayData: hikingTrails,
        svgComponent: svgRoof,
        lineLength: 60,
        lineRotation: 300,
        orientation: 'right'
      },
      {
        title: 'Baumaterialien',
        subtitle: 'Zement, Beton...',
        className: 'cie-mammut',
        overlayData: mammut,
        svgComponent: svgTower,
        lineLength: 85,
        lineRotation: 70,
        orientation: 'right',
      }
    ]
  }
]
