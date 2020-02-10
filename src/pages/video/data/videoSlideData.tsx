import React from 'react';
import castleIcon from "../../../res/icons/castle.svg"
import bridgeIcon from "../../../res/icons/bridge.svg"
import beerIcon from "../../../res/icons/beer.svg"
import waterIcon from "../../../res/icons/water.svg"
import churchIcon from "../../../res/icons/church.svg"
import connectednessIcon from "../../../res/icons/connectedness.svg"
import videoAarau1 from "../../../res/videos/aarau1.mp4";
import videoAarau2 from "../../../res/videos/aarau2.mp4";
import videoAarau3 from "../../../res/videos/aarau3.mp4";
import {ReactComponent as svgRoof} from "../../../res/videos/baden1-roof.svg";
import {ReactComponent as svgRuine} from "../../../res/videos/baden1-ruine.svg";
import {ReactComponent as svgTower} from "../../../res/videos/baden1-tower.svg";
import {ReactComponent as svgBridge} from "../../../res/videos/baden3-bridge.svg";
import {ReactComponent as svgBar} from "../../../res/videos/baden3-bar.svg";
import {ReactComponent as svgAare} from "../../../res/videos/aarau3-river.svg";
import {ReactComponent as svgConnectivity} from "../../../res/videos/baden3-connectivity.svg";
import {ReactComponent as svgConstruction} from "../../../res/videos/aarau1-construction.svg";
import {ReactComponent as svgABridge} from "../../../res/videos/aarau1-bridge.svg";
import {ReactComponent as svgChurch} from "../../../res/videos/aarau2-church.svg";
import {ReactComponent as svgInterior} from "../../../res/videos/aarau3-interiors.svg";
import videoBaden from "../../../res/videos/baden1.mp4";
import {ReactComponent as svgStairs} from "../../../res/videos/baden2-stairways.svg";
import videoBaden2 from "../../../res/videos/baden2.mp4";
import videoBaden3 from "../../../res/videos/baden3.mp4";
import {TravelingDistancePage} from '../../side/travelingDistance/TravelingDistancePage';
import {PopupOverlay} from '../PopupOverlay';
import {SlideInOverlay} from '../SlideInOverlay';
import {VideoSlideItem} from "../VideoSlide";
import {beerBar} from './poi-overlay-data/beerBar';
import {culture} from './info-overlay-data/culture';
import {hikingTrails} from "./info-overlay-data/hikingTrails";
import {lafargeHolcim} from './info-overlay-data/lafargeHolcim';
import {aarvia} from './info-overlay-data/aarvia';
import {aare} from './poi-overlay-data/aare';
import {mammut} from "./info-overlay-data/mammut";
import {realEstate} from "./info-overlay-data/realEstate";
import {ruineStein} from "./poi-overlay-data/ruineStein";
import {woodenBridge} from "./poi-overlay-data/woodenBridge";
import {churchAarau} from "./poi-overlay-data/churchAarau";
import {killer} from "./info-overlay-data/killer";

export const videoSlideData: Array<VideoSlideItem> = [

  // SEQUENCE 1
  {
    className: 'baden-slide1',
    title: 'Die Stadt Baden',
    videoSrc: videoBaden,
    isMainPoint: true,
    poiLabelItems: [
      {
        subtitle: 'Lokales Highlight',
        title: 'Ruine Stein',
        overlayComponent: <SlideInOverlay data={ruineStein}/>,
        svgComponent: svgRuine,
        iconSrc: castleIcon,
        posLeftInPct: 69,
        posTopInPct: 33,
        lineLength: 60,
        lineRotation: 40,
        orientation: 'right'
      }
    ],
    infoLabelItems: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Aargauer Vorteile',
        className: 'culture-and-history',
        overlayComponent: <PopupOverlay data={culture}/>,
        svgComponent: svgTower,
        posLeftInPct: 68,
        posTopInPct: 60,
        orientation: 'left',
      },
      {
        title: 'Gewerbeimmobilien & Areal',
        subtitle: 'Aargauer Vorteile',
        className: 'real-estate',
        overlayComponent: <PopupOverlay data={realEstate}/>,
        svgComponent: svgRoof,
        posLeftInPct: 21,
        posTopInPct: 61,
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
    poiLabelItems: [],
    infoLabelItems: [
      {
        title: 'Wanderwege',
        subtitle: 'Aargauer Vorteile',
        className: 'hiking-trails',
        overlayComponent: <PopupOverlay data={hikingTrails}/>,
        svgComponent: svgStairs,
        posLeftInPct: 38,
        posTopInPct: 60,
        orientation: 'right'
      },
      {
        title: 'Wanderausrüstung',
        subtitle: 'Aargauer Unternehmen',
        className: 'mammut',
        overlayComponent: <PopupOverlay data={mammut}/>,
        svgComponent: svgStairs,
        posLeftInPct: 57,
        posTopInPct: 66,
        orientation: 'left'
      }
    ]
  },

  // SEQUENCE 3
  {
    className: 'baden-slide3',
    title: 'Die Stadt Baden',
    videoSrc: videoBaden3,
    isMainPoint: false,
    poiLabelItems: [
      {
        title: 'Holzbrücke',
        subtitle: 'lokales Highlight',
        overlayComponent: <SlideInOverlay data={woodenBridge}/>,
        svgComponent: svgBridge,
        iconSrc: bridgeIcon,
        posLeftInPct: 60,
        posTopInPct: 58,
        lineLength: 100,
        lineRotation: 140,
        orientation: 'left',
      },
      {
        title: 'Triebguet Frischluftbar',
        subtitle: 'lokales Highlight',
        overlayComponent: <SlideInOverlay data={beerBar}/>,
        svgComponent: svgBar,
        iconSrc: beerIcon,
        posLeftInPct: 70,
        posTopInPct: 70,
        lineLength: 80,
        lineRotation: 45,
        orientation: 'right',
      },
      {
        title: 'Verbundenheit',
        subtitle: 'lokales Highlight',
        overlayComponent: <TravelingDistancePage/>,
        svgComponent: svgConnectivity,
        iconSrc: connectednessIcon,
        posLeftInPct: 39,
        posTopInPct: 66,
        lineLength: 80,
        lineRotation: 225,
        orientation: 'left',
      }
    ],
    infoLabelItems: []
  },

  // SEQUENCE 4
  {
    className: 'aarau-slide1',
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau1,
    isMainPoint: true,
    poiLabelItems: [],
    infoLabelItems: [
      {
        title: 'Baumaterialen',
        subtitle: 'Aargauer Unternehmen',
        className: 'lafarge-holcim',
        overlayComponent: <PopupOverlay data={lafargeHolcim}/>,
        svgComponent: svgConstruction,
        posLeftInPct: 45,
        posTopInPct: 45,
        orientation: 'left'
      },{
        title: 'Infrastruktur',
        subtitle: 'Aargauer Unternehmen',
        className: 'aarvia',
        overlayComponent: <PopupOverlay data={aarvia}/>,
        svgComponent: svgABridge,
        posLeftInPct: 48,
        posTopInPct: 71,
        orientation: 'left'
      }
    ]
  },

  // SEQUENCE 5
  {
    className: 'aarau-slide2',
    title: 'Die Stadt Aarau',
    isMainPoint: false,
    videoSrc: videoAarau2,
    poiLabelItems: [
      {
        title: 'Stadtkirche Aarau',
        subtitle: 'lokales Highlight',
        overlayComponent: <SlideInOverlay data={churchAarau}/>,
        svgComponent: svgChurch,
        iconSrc: churchIcon,
        posLeftInPct: 42,
        posTopInPct: 46,
        lineLength: 65,
        lineRotation: 45,
        orientation: 'right',
      }
    ],
    infoLabelItems: []
  },

  // SEQUENCE 6
  {
    className: 'aarau-slide3',
    title: 'Die Stadt Aarau',
    isMainPoint: false,
    videoSrc: videoAarau3,
    poiLabelItems: [
      {
        title: 'Aare',
        subtitle: 'lokales Highlight',
        overlayComponent: <SlideInOverlay data={aare}/>,
        svgComponent: svgAare,
        iconSrc: waterIcon,
        posLeftInPct: 37,
        posTopInPct: 65,
        lineLength: 135,
        lineRotation: 150,
        orientation: 'left',
      }
    ],
    infoLabelItems: [
      {
        title: 'Interiors',
        subtitle: 'Aargauer Unternehmen',
        className: 'killer',
        overlayComponent: <PopupOverlay data={killer}/>,
        svgComponent: svgInterior,
        posLeftInPct: 42,
        posTopInPct: 71,
        orientation: 'right'
      }
    ]
  },
];
