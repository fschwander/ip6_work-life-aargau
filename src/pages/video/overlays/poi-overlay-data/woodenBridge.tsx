import {SlideInOverlayInterface} from '../SlideInOverlayInterface';
import imageDetails from '../../../../res/imgs/si-ol_wooden-bridge.jpg';
import svgDetails from '../../../../res/imgs/map_ruine-stein.svg';

export const woodenBridge: SlideInOverlayInterface = {

  header: {
    title: "Holzbrücke",
    subtitle: "Schon im 13. Jahrhundert wurden die beiden Limmatufer auf Höhe des Landvogteischlosses erstmals mit einer Brücke verbunden.",
    text: "Der Entwurf für das 1809 gebaute Bauwerk stammt vom Laufenburger Baumeister Blasius Balteschwiler und ging als Sieger aus einem Wettbewerb hervor. Balteschwiler entwarf eine Balkenkonstruktion, welche den 37 Meter breiten Flusslauf ohne Pfeiler überspannt. Das Gerüst ist mit schindelbedeckten Brettern verschalt, welche die Brücke als geschlossenes, körperhaftes Korbbogenjoch erscheinen lassen. Das ursprünglich verschindelte Satteldach ist seit 1939 mit Ziegeln gedeckt. Die gesamte Beschindelung der Brücke musste mehrmals erneuert werden. 1968 schliesslich wurde die schon oft erneuerte hölzerne Fahrbahn durch einen Metallrost ersetzt und das gesamte Balkengerüst chemisch konserviert."
  },

  image: imageDetails,

  facts: {
    items: [
      {
        title: "Gesamtlänge: ",
        text: "39 m"
      }, {
        title: "Baubeginn: ",
        text: "1809"
      }
    ]
  },

  map: {
    svg_map: svgDetails,
    location_title: "Geschichte",
    location_text: "Zwar existierte bereits während der Herrschaft der Römer eine Brücke über die Limmat, doch lag diese fast einen Kilometer flussabwärts bei den Thermen der Siedlung Aquae Helveticae (im Bereich der heutigen Schiefen Brücke). Die erste Erwähnung einer Brücke in der Klus erfolgte im Jahr 1242. Dieses erste Bauwerk ersetzte eine wahrscheinlich seit dem 11. Jahrhundert bestehende Fähre und war zugleich Zollstation. Hier kreuzten sich die Strassen nach Basel, Schaffhausen, Zürich und Bern. Im Laufe der Jahrhunderte wurde die Brücke mindestens viermal durch Überschwemmungen, Eisgang oder kriegerische Ereignisse zerstört. Bis 1766, als Hans Ulrich Grubenmann beim Kloster Wettingen eine weitere Brücke errichtete, war die Badener Holzbrücke der einzige Übergang zwischen Zürich und der Limmatmündung bei Gebenstorf."
  }
}
