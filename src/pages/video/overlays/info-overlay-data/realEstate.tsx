import React from 'react';
import iconLink from '../../../../res/icons/link.svg';
import iconRealEstate from '../../../../res/icons/realestate.svg'
import imgRealEstate from '../../../../res/imgs/ol_real-estate.png'
import imgRealEstate2 from '../../../../res/imgs/ol_real-estate2.png'
import imgRealEstate3 from '../../../../res/imgs/ol_real-estate3.png'
import {Constants} from '../../../../services/Constants';
import {PlaceholderChart, PopupOverlayInterface} from "../PopupOverlayInterface";

export const realEstate: PopupOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Gewerbeimmobilien & Areale",
    text: "Ein perfekter Standort für Unternehmen zu vergleichsweise günstigen Preisen. Suchst du Bauland, eine Liegenschaft, Büroräumlichkeiten oder ein sonstiges Miet- oder Kaufobjekt für gewerbliche Zwecke? Die Standortförderung kennt die interessanten Gewerbeflächen im Kanton Aargau.",
    items: [
      {
        text: "Bauland, Liegenschaft, Kaufobjekt",
        value: ""
      },
      {
        text: "Bezugsbereite Immobilien",
        value: ""
      },
      {
        text: "Zukunftsprojekte",
        value: ""
      },
    ]
  },

  topics: [
    {
      icon: iconRealEstate,
      text: "Immobilien"
    }
  ],

  graph: {
    title: "",
    chartComponent: <PlaceholderChart/>
  },

  details: [
    {
      image: imgRealEstate2,
      title: "Technopark Glattacher",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.ag.ch/media/de/kanton_aargau/dvi/dokumente_5/awa_2/aargau_services_1/immobilien_und_areale_technopark_glattacher.pdf'
      },
      items: [
        {
          text: "Zweck",
          value: "Büro-, Verkaufs- und Hallenflächen"
        },
        {
          text: "Ort",
          value: "Etzgen"
        }
      ]
    },
    {
      image: imgRealEstate,
      title: "Gewerbhaus Oberentfelden",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.ag.ch/media/kanton_aargau/dvi/dokumente_5/awa_2/aargau_services_1/Immobilien_Industriestrasse_23_5036_Oberentfelden.pdf'
      },
      items: [
        {
          text: "Total Gewerbeflächen",
          value: "ca. 2'488 m2"
        },
        {
          text: "Features",
          value: "Autobahn Ausfahrt, Inhouse-Bistro, kurze Gehdistanz zum Bahnhof..."
        }
      ]
    },
    {
      image: imgRealEstate3,
      title: "Wetter Immobilien",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.ag.ch/media/kanton_aargau/dvi/dokumente_5/awa_2/aargau_services_1/Immobilien_Kinziggraben_Gebenstorf-2.pdf'
      },
      items: [
        {
          text: "Zweck",
          value: "Büro-/Gewerbeflächen"
        },
        {
          text: "Ort",
          value: "Gebensdorf"
        }
      ]
    }
  ]
}
