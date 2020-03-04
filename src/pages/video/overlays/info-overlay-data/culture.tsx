import React from 'react';
import {GraphicChart} from '../../../../components/widgets/GraphicChart';
import {ReactComponent as SVGImage} from '../../../../res/graphics/culture.svg';
import iconHiking from '../../../../res/icons/hiking.svg';
import iconHistory from '../../../../res/icons/history.svg';
import iconLink from '../../../../res/icons/link.svg';
import {Constants} from '../../../../services/Constants';
import {PopupOverlayInterface} from "../PopupOverlayInterface";
import imgCulture from '../../../../res/imgs/ol_culture.png'
import imgCulture2 from '../../../../res/imgs/ol_culture2.jpg'
import imgCulture3 from '../../../../res/imgs/ol_culture3.png'
import imgCulture4 from '../../../../res/imgs/ol_culture4.jpg'
import imgCulture5 from '../../../../res/imgs/ol_culture5.jpg'
import imgCulture6 from '../../../../res/imgs/ol_culture6.jpg'
import imgCulture7 from '../../../../res/imgs/ol_culture7.jpg'
import imgCulture8 from '../../../../res/imgs/ol_culture8.jpg'

export const culture: PopupOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Im Aargau findest du",
    text: "Der Kanton Aargau verfügt über ein reiches historisches Erbe und ein vielfältiges, aktives und stark in den Regionen verankertes Kulturleben.",
    items: [
      {
        text: "UNESCO-Erbe",
        value: ""
      },
      {
        text: "Schlösser, Museen, Kunsthäuse",
        value: ""
      },
      {
        text: "Theater & Tanz",
        value: ""
      },
      {
        text: "Fantoche Festival",
        value: ""
      },
      {
        text: "Grosse Musikszene",
        value: ""
      },
      {
        text: "Aargau als Inspiration in Literatur",
        value: ""
      }
    ]
  },

  topics: [
    {
      icon: iconHiking,
      text: "Freizeit"
    },
    {
      icon: iconHistory,
      text: "Geschichte"
    }
  ],

  graph: {
    title: "Museen, Kinos, Bibliotheken und Bäder in Aargau (2015)",
    chartComponent: <GraphicChart svgComponent={SVGImage}
                                  data={[
                                    {name: 'Museen', value: '88'},
                                    {name: 'Kinos',value: '23'},
                                    {name: 'Bibliotheken',value: '92'},
                                    {name: 'Bäder',value: '81'}]}
    />
  },

  details: [
    {
      image: imgCulture,
      title: "Vindonissa Museum",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.museumaargau.ch/vindonissa-museum'
      },
      items: [
        {
          text: "Historische Einblicke",
          value: "Geschichte und Forschung des Legionslagers Vindonissa"
        },
        {
          text: "Ort",
          value: "Windisch"
        }
      ]
    },
    {
      image: imgCulture2,
      title: "Schloss Lenzburg",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.schloss-lenzburg.ch/'
      },
      items: [
        {
          text: "Entstehungszeit",
          value: "vor 1036"
        },
        {
          text: "Burgentyp",
          value: "Höhenburg"
        },
        {
          text: "Ort",
          value: "Lenzburg"
        }
      ]
    },
    {
      image: imgCulture3,
      title: "Schloss Hallwyl",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.museumaargau.ch/schloss-hallwyl'
      },
      items: [
        {
          text: "Entstehungszeit",
          value: "vor 1265"
        },
        {
          text: "Burgentyp",
          value: "Wasserburg"
        },
        {
          text: "Ort",
          value: "Seengen"
        }
      ]
    },
    {
      image: imgCulture4,
      title: "Schloss Habsburg",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.ag.ch/de/bks/kultur/museen_schloesser/schloss_habsburg/schloss_habsburg.jsp'
      },
      items: [
        {
          text: "Entstehungszeit",
          value: "Um 1020/30 bis etwa 1300"
        },
        {
          text: "Burgentyp",
          value: "Höhenburg, Gipfellage"
        },
        {
          text: "Ort",
          value: "Habsburg"
        }
      ]
    },
    {
      image: imgCulture5,
      title: "Flamencos en route",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.flamencos-enroute.com/'
      },
      items: [
        {
          text: "Neue Zürcher Zeitung",
          value: "Was die Gruppe Flamencos en route zeigt, ist Flamenco vom Besten..."
        }
      ]
    },
    {
      image: imgCulture6,
      title: "Fantoche Festival",
      linkIcon: {
        icon: iconLink,
        link: 'https://fantoche.ch/de'
      },
      items: [
        {
          text: "Zweck",
          value: "Festival für Animationsfilm"
        },
        {
          text: "Ort",
          value: "Baden"
        }
      ]
    },
    {
      image: imgCulture7,
      title: "Argovia philharmonic Orchester",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.argoviaphil.ch/'
      },
      items: [
        {
          text: "Gründung",
          value: "1963"
        },
        {
          text: "Ziel",
          value: "Klassische Musik in den ganzen Kanton zu bringen"
        }
      ]
    },
    {
      image: imgCulture8,
      title: "Literatur",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.aargauer-literaturhaus.ch/'
      },
      items: [
        {
          text: "Anzahl der öffentlichen Bibliotheken im Kanton Aargau",
          value: "Rund 90"
        }
      ]
    }
  ]
}
