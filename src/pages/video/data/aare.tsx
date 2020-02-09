import React from 'react';
import {SlideInOverlayInterface} from './SlideInOverlayInterface';
import imageDetails from '../../../res/imgs/si-ol_aare.jpg';
import svgDetails from '../../../res/imgs/map_aare.svg';

export const aare: SlideInOverlayInterface = {

  header: {
    title: "Aare",
    subtitle: "Der längste gänzlich innerhalb der Schweiz verlaufende Fluss.",
    text: "Die Aare entspringt in den beiden Aargletschern in den östlichen Berner Alpen am Finsteraarhorn, westlich des Grimselpasses im zentralen Süden der Schweiz."
  },

  image: imageDetails,

  facts: {
    items: [
      {
        title: "Länge: ",
        text: "291,5 km"
      }, {
        title: "Quellhöhe: ",
        text: "1977 m ü. M."
      }, {
        title: "Mündung: ",
        text: "in den Rhein"
      }
    ]
  },

  map: {
    svg_map: svgDetails,
    location_title: "Über die Aare",
    location_text: "Zuerst passiert sie die in einen hohen Felsriegel eingeschnittene Aareschlucht und erreicht danach die Ebene zwischen Meiringen und dem glazialen Brienzersee. Kurz vor dem Eintritt in den Thunersee bei Interlaken ist sie kanalisiert und verlässt diesen nordwestlich in das breite Aaretal. Auf dem Gebiet von Bern umfliesst sie den mittelalterlichen Stadtkern und erreicht in westlicher Richtung den Wohlensee. Bei Aarberg wird sie über den Hagneckkanal in den Bielersee geleitet und folgt nach dem Austritt nordostwärts dem Verlauf des Juragebirges. Unterhalb von Brugg nimmt sie die Reuss und die Limmat auf, bevor sie bei Koblenz (CH) in den Rhein mündet."
  }
}
