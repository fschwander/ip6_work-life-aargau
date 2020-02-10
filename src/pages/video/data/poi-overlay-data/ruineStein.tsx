import {SlideInOverlayInterface} from '../SlideInOverlayInterface';
import imageDetails from '../../../../res/imgs/si-ol_ruine-stein.jpg';
import svgDetails from '../../../../res/imgs/map_ruine-stein.svg';

export const ruineStein: SlideInOverlayInterface = {

  header: {
    title: "Ruine Stein",
    subtitle: "Die Alten Mauern Badens",
    text: "Hoch oben über der Stadt thront die Ruine Stein. Einst war das Wahrzeichen eine prunkvolle Burg, in der die Grafen von Habsburg wohnten. Heute ist die Ruine ein beliebtes Ausflugsziel. Kein Wunder, denn die Aussicht von oben ist atemberaubend."
  },

  image: imageDetails,

  facts: {
    items: [
      {
        title: "Entstehungszeit: ",
        text: "vor 1000, 1658–1670"
      }, {
        title: "Burgentyp: ",
        text: "Höhenburg, Festung"
      }
    ]
  },

  map: {
    svg_map: svgDetails,
    location_title: "Wegbeschreibung",
    location_text: "Vom Schlossbergplatz durch den Stadtturm getreten, führt auf der rechten Seite eine steile Treppe hoch zur Ruine Stein: \"Nach der Schlossruine\""
  }
}
