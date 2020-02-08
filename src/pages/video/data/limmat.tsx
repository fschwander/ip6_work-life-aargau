import React from 'react';
import {SlideInOverlayInterface} from './SlideInOverlayInterface';
import imageDetails from '../../../res/imgs/si-ol_limmat.jpg';
import svgDetails from '../../../res/imgs/map_limmat.svg';

export const limmat: SlideInOverlayInterface = {

  header: {
    title: "Limmat",
    subtitle: "Die grösste Zufluss des Zürichsees",
    text: "Die Linth entspringt im Glarner Tödimassiv. Sie gilt als Quellfluss der Limmat, denn sie ist der grösste Zufluss des Zürichsees. Noch 36 Kilometer bleiben schliesslich der Limmat von Zürich bis zur Mündung in die Aare bei Turgi."
  },

  image: imageDetails,

  facts: {
    items: [
      {
        title: "Länge: ",
        text: "36 km"
      }, {
        title: "Quellhöhe: ",
        text: "406 m ü. M."
      }, {
        title: "Mündung: ",
        text: "in die Aare"
      }
    ]
  },

  map: {
    svg_map: svgDetails,
    location_title: "Über die Limmat",
    location_text: "Spektakulär ist die Linthschlucht zuhinterst im Glarnerland: Schroffe Steilwände, nur wenige Meter voneinander entfernt, zeigen die Macht, mit welcher sich der junge Fluss seinen Lauf gesucht hat. Entlang ihres weiteren Laufs hatte die Linth einst als Energielieferantin viel beigetragen zu Industrialisierung und Aufschwung im Glarnerland. Aber sie hatte auch viel Schaden angerichtet, überflutete sie doch immer wieder die Linthebene. Seit der Linthkorrektion durch Hans Conrad Escher anfangs des 19. Jahrhunderts fliesst sie als Escherkanal in den Walensee, den sie bei Weesen als Linthkanal Richtung Zürichsee wieder verlässt."
  }
}
