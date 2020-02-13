import React from 'react';
import churchIcon from "../../res/icons/church.svg"
import waterIcon from "../../res/icons/water.svg"
import {ReactComponent as svgABridge} from "../../res/videos/aarau1-bridge.svg";
import {ReactComponent as svgConstruction} from "../../res/videos/aarau1-construction.svg";
import videoAarau1 from "../../res/videos/aarau1.mp4";
import {ReactComponent as svgChurch} from "../../res/videos/aarau2-church.svg";
import videoAarau2 from "../../res/videos/aarau2.mp4";
import {ReactComponent as svgInterior} from "../../res/videos/aarau3-interiors.svg";
import {ReactComponent as svgAare} from "../../res/videos/aarau3-river.svg";
import videoAarau3 from "../../res/videos/aarau3.mp4";
import {aarvia} from './overlays/info-overlay-data/aarvia';
import {killer} from "./overlays/info-overlay-data/killer";
import {lafargeHolcim} from './overlays/info-overlay-data/lafargeHolcim';
import {aare} from './overlays/poi-overlay-data/aare';
import {churchAarau} from "./overlays/poi-overlay-data/churchAarau";
import {PopupOverlay} from './overlays/PopupOverlay';
import {SlideInOverlay} from './overlays/SlideInOverlay';
import {VideoSlideItem} from "./VideoSlide";

export const aarauSlideData: Array<VideoSlideItem> = [

  // SEQUENCE 1
  {
    className: 'aarau-slide1',
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau1,
    animDurationInSec: 14,
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
      }, {
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

  // SEQUENCE 2
  {
    className: 'aarau-slide2',
    title: 'Die Stadt Aarau',
    isMainPoint: false,
    videoSrc: videoAarau2,
    animDurationInSec: 10,
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

  // SEQUENCE 3
  {
    className: 'aarau-slide3',
    title: 'Die Stadt Aarau',
    isMainPoint: false,
    videoSrc: videoAarau3,
    animDurationInSec: 16,
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
