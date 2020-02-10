import {SlideInOverlayInterface} from './SlideInOverlayInterface';
import imageDetails from '../../../res/imgs/si-ol_church-aarau.jpg';
import svgDetails from '../../../res/imgs/map_aarau.svg';

export const churchAarau: SlideInOverlayInterface = {

  header: {
    title: "Stadtkirche Aarau",
    subtitle: "Kulturgut von nationaler Bedeutung",
    text: "Die Stadtkirche Aarau ist ein reformiertes Kirchengebäude in Aarau, dem Hauptort des Kantons Aargau in der Schweiz. Das spätgotische Gebäude in der Aarauer Altstadt präsentiert sich als dreischiffige Basilika und wurde in den Jahren 1471 bis 1478 nach den Vorgaben der Bettelordensarchitektur erbaut. Die Stadtkirche ist als Kulturgut von nationaler Bedeutung eingestuft. Sie gehört zur Reformierten Kirchgemeinde Aarau in der Reformierten Landeskirche Aargau, wird aber auch von der christkatholischen Kirchgemeinde genutzt."
  },

  image: imageDetails,

  facts: {
    items: [
      {
        title: "Errichtung: ",
        text: "1471 bis 1477"
      }, {
        title: "Architektur-Stil: ",
        text: "Gotisch"
      }
    ]
  },

  map: {
    svg_map: svgDetails,
    location_title: "Geschichte",
    location_text: "Ausgrabungen in den Jahren 1936 und 1959/60 deuten darauf hin, dass es bereits im 10. und 11. Jahrhundert eine Kirche auf Aarauer Stadtgebiet gab. Sie lag im heutigen Telliquartier an einer Furt über die Aare und scheint in der zweiten Hälfte des 13. Jahrhunderts sorgfältig abgetragen worden zu sein, nur das Fundament blieb erhalten. Ein päpstliches Zehntenverzeichnis von 1275 belegt, dass Aarau damals wieder über eine Kirche verfügte, diese jedoch der Pfarrei Suhr unterstellt war. Das Gebäude befand sich am selben Standort wie die heutige Kirche, war einschiffig und hatte einen nordostwärts gerichteten, dreiseitig geschlossenen Chor. 1426/27 kam der Kirchturm hinzu"
  }
}
