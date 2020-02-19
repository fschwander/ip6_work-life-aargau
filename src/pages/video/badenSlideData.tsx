import React from 'react';
import beerIcon from "../../res/icons/beer.svg"
import bridgeIcon from "../../res/icons/bridge.svg"
import castleIcon from "../../res/icons/castle.svg"
import connectednessIcon from "../../res/icons/connectedness.svg"
import {ReactComponent as svgRoof} from "../../res/videos/baden1-roof.svg";
import {ReactComponent as svgRuine} from "../../res/videos/baden1-ruine.svg";
import {ReactComponent as svgTower} from "../../res/videos/baden1-tower.svg";
import videoBaden from "../../res/videos/baden1.mp4";
import {ReactComponent as svgStairs} from "../../res/videos/baden2-stairways.svg";
import videoBaden2 from "../../res/videos/baden2.mp4";
import {ReactComponent as svgBar} from "../../res/videos/baden3-bar.svg";
import {ReactComponent as svgBridge} from "../../res/videos/baden3-bridge.svg";
import {ReactComponent as svgConnectivity} from "../../res/videos/baden3-connectivity.svg";
import videoBaden3 from "../../res/videos/baden3.mp4";
import {Constants} from '../../services/Constants';
import {culture} from './overlays/info-overlay-data/culture';
import {hikingTrails} from "./overlays/info-overlay-data/hikingTrails";
import {mammut} from "./overlays/info-overlay-data/mammut";
import {realEstate} from "./overlays/info-overlay-data/realEstate";
import {beerBar} from './overlays/poi-overlay-data/beerBar';
import {ruineStein} from "./overlays/poi-overlay-data/ruineStein";
import {woodenBridge} from "./overlays/poi-overlay-data/woodenBridge";
import {PopupOverlay} from './overlays/PopupOverlay';
import {SlideInOverlay} from './overlays/SlideInOverlay';
import {TravelingDistancePage} from './overlays/special-overlay-data/TravelingDistancePage';
import {VideoSlideItem} from "./VideoSlide";

export const badenSlideData: Array<VideoSlideItem> = [

  // SEQUENCE 1
  {
    title: 'Die Stadt Baden',
    videoSrc: videoBaden,
    animDurationInSec: 3,
    poiLabelItems: [
      {
        subtitle: 'Lokales Highlight',
        title: 'Ruine Stein',
        type: Constants.FILTER_HIGHLIGHTS_ALL,
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
        type: Constants.FILTER_POI_HISTORY,
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
        type: Constants.FILTER_POI_REAL_ESTATE,
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
    title: 'Die Stadt Baden',
    videoSrc: videoBaden2,
    animDurationInSec: 10,
    poiLabelItems: [],
    infoLabelItems: [
      {
        title: 'Wanderwege',
        subtitle: 'Aargauer Vorteile',
        type: Constants.FILTER_POI_LEISURE,
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
        type: Constants.FILTER_ENTERPRISE_LEISURE,
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
    title: 'Die Stadt Baden',
    videoSrc: videoBaden3,
    animDurationInSec: 6,
    poiLabelItems: [
      {
        title: 'Verbundenheit',
        subtitle: 'lokales Highlight',
        type: Constants.FILTER_HIGHLIGHTS_ALL,
        overlayComponent: <TravelingDistancePage/>,
        svgComponent: svgConnectivity,
        iconSrc: connectednessIcon,
        posLeftInPct: 29,
        posTopInPct: 51,
        lineLength: 75,
        lineRotation: 290,
        orientation: 'left',
      },
      {
        title: 'Holzbrücke',
        subtitle: 'lokales Highlight',
        type: Constants.FILTER_HIGHLIGHTS_ALL,
        overlayComponent: <SlideInOverlay data={woodenBridge}/>,
        svgComponent: svgBridge,
        iconSrc: bridgeIcon,
        posLeftInPct: 61,
        posTopInPct: 58,
        lineLength: 90,
        lineRotation: 120,
        orientation: 'left',
      },
      {
        title: 'Triebguet Frischluftbar',
        subtitle: 'lokales Highlight',
        type: Constants.FILTER_HIGHLIGHTS_ALL,
        overlayComponent: <SlideInOverlay data={beerBar}/>,
        svgComponent: svgBar,
        iconSrc: beerIcon,
        posLeftInPct: 70,
        posTopInPct: 70,
        lineLength: 80,
        lineRotation: 45,
        orientation: 'right',
      }
    ],
    infoLabelItems: []
  }
];
