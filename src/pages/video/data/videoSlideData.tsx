import videoBaden from "../../../res/videos/baden1.mp4";
import videoBaden2 from "../../../res/videos/baden2.mp4";
import videoAarau1 from "../../../res/videos/aarau1.mp4";
import videoAarau2 from "../../../res/videos/aarau2.mp4";
import {hikingTrails} from "./hikingTrails";
import {mammut} from "./mammut";
import {ReactComponent as svgRuine} from "../../../res/videos/baden1-ruine.svg";
import {ReactComponent as svgStairs} from "../../../res/videos/baden2-stairways.svg";
import {ReactComponent as svgRoof} from "../../../res/videos/baden1-roof.svg";
import {ReactComponent as svgTower} from "../../../res/videos/baden1-tower.svg";
import {VideoSlideProps} from "../VideoSlide";
import {lafargeHolcim} from "./lafargeHolcim";

export const videoSlideData: Array<VideoSlideProps> = [

  // SEQUENCE 1
  {
    className: 'baden-slide1',
    title: 'Die Stadt Baden',
    videoSrc: videoBaden,
    isMainPoint: true,
    locationPoints: [
      {
        subtitle: 'Lokales Highlight',
        title: 'Ruine Stein',
        svgComponent: svgTower,
        iconSrc: '',
        posLeftInPct: 58,
        posTopInPct: 38,
        lineLength: 60,
        lineRotation: 300,
        orientation: 'left'

      }
    ],
    hoverPoints: [
      {
        title: 'Turm: Baumaterialien',
        subtitle: 'Zement, Beton...',
        className: 'cie-lafarge-holcim',
        overlayData: lafargeHolcim,
        svgComponent: svgTower,
        posLeftInPct: 63,
        posTopInPct: 65,
        hoverPointPosLeft: 40,
        hoverPointPosTop: -40,
        lineLength: 85,
        lineRotation: 70,
        orientation: 'right',
      },
      {
        title: 'Aargauer Vorteile',
        subtitle: 'Erschwingliche Mieten',
        className: 'hiking-trails',
        overlayData: hikingTrails,
        svgComponent: svgRoof,
        posLeftInPct: 31,
        posTopInPct: 52,
        hoverPointPosLeft: 40,
        hoverPointPosTop: 50,
        display: 'none',
        lineLength: 60,
        lineRotation: 300,
        orientation: 'right'
      }
    ]
  },

  // SEQUENCE 2
  {
    className: 'baden-slide2',
    title: 'Die Stadt Baden',
    isMainPoint: false,
    videoSrc: videoBaden2,
    locationPoints: [

    ],
    hoverPoints: [
      {
        title: 'Sport & Freizeit',
        subtitle: 'Wanderwege',
        className: 'hiking-trails',
        overlayData: hikingTrails,
        svgComponent: svgStairs,
        posLeftInPct: 28,
        posTopInPct: 44,
        hoverPointPosLeft: -30,
        hoverPointPosTop: -40,
        lineLength: 160,
        lineRotation: 310,
        orientation: 'right'
      },
      {
        title: 'Wanderausrüstung',
        subtitle: 'Rucksäcke, Taschen...',
        className: 'mammut',
        overlayData: mammut,
        svgComponent: svgStairs,
        posLeftInPct: 62,
        posTopInPct: 47,
        hoverPointPosLeft: 170,
        hoverPointPosTop: -20,
        lineLength: 170,
        lineRotation: 235,
        orientation: 'left'
      }
    ]
  },

  // SEQUENCE 3
  {
    className: 'aarau-slide1',
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau1,
    isMainPoint: true,
    locationPoints: [

    ],
    hoverPoints: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgRoof,
        posLeftInPct: 0,
        posTopInPct: 0,
        hoverPointPosLeft: 0,
        hoverPointPosTop: 0,
        lineLength: 60,
        lineRotation: 70,
        orientation: 'right'
      },
    ]
  },

  // SEQUENCE 4
  {
    className: 'aarau-slide2',
    title: 'Die Stadt Aarau',
    isMainPoint: false,
    videoSrc: videoAarau2,
    locationPoints: [

    ],
    hoverPoints: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgTower,
        posLeftInPct: 0,
        posTopInPct: 0,
        hoverPointPosLeft: 0,
        hoverPointPosTop: 0,
        lineLength: 60,
        lineRotation: 210,
        orientation: 'right'
      },
    ]
  },
]
