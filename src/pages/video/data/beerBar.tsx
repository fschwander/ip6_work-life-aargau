import React from 'react';
import {SlideInOverlayInterface} from './SlideInOverlayInterface';
import imageDetails from '../../../res/imgs/si-ol_beer-bar.jpg';
import svgDetails from '../../../res/imgs/map_ruine-stein.svg';

export const beerBar: SlideInOverlayInterface = {

  header: {
    title: "Triebguet Frischluftbar",
    subtitle: "Lauschige Sommerbar an der Limmat in Baden",
    text: " Wir verwöhnen dich mit allen Sinnen: Frische Luft für deine Lungen, Leckeres für den Gaumen, gute Musik für die Ohren, Sonnenstrahlen auf der Haut und einen herrlichen Ausblick für die Augen. Wir sind der perfekte Ort für dein verdientes Feierabendbier mit den Kollegen, den Rotwein mit deinem Herzblatt, den Aperitif mit deinen Freundinnen oder das Frühstück mit der ganzen Familie. Wir sind dein Sommer! "
  },

  image: imageDetails,

  facts: {
    items: [
      {
        title: "",
        text: "Essen & Trinken"
      }, {
        title: "",
        text: "Fondue"
      }, {
        title: "",
        text: "Frühstück & Brunch"
      }
    ]
  },

  map: {
    svg_map: svgDetails,
    location_title: "",
    location_text: ""
  }
}
