import React from 'react';
import iconCommunity from '../../../../res/icons/community.svg';
import iconResearch from '../../../../res/icons/research.svg';
import {Constants} from '../../../../services/Constants';
import iconEducation from '../../../../res/icons/education.svg'
import imgEducation from '../../../../res/imgs/ol_education.jpg'
import imgEducation2 from '../../../../res/imgs/ol_education2.jpg'
import imgEducation3 from '../../../../res/imgs/ol_education3.jpg'
import {PlaceholderChart, PopupOverlayInterface} from "../PopupOverlayInterface";

export const education: PopupOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Bildung & Forschung",
    text: "Der Aargau ist ein Bildungs- und Forschungskanton. Schon vor der Kantonsgründung wurde das erste weltliche Gymnasium der Schweiz in Aarau gegründet. Heute investiert der Kanton Aargau rund einen Drittel seiner Ausgaben in die Entwicklung und Weiterentwicklung seiner innovativen Bildungs- und Forschungslandschaft.",
    items: [
      {
        text: "Shulen & Berufsbildung",
        value: ""
      },
      {
        text: "Ingenieur- & Naturwissenschaften",
        value: ""
      },
      {
        text: "Industriewerkplatz",
        value: ""
      }
    ]
  },

  topics: [
    {
      icon: iconEducation,
      text: "Bildung"
    },
    {
      icon: iconResearch,
      text: "Forschung"
    },
    {
      icon: iconCommunity,
      text: "Gemeinschaft"
    }
  ],

  graph: {
    title: "",
    chartComponent: <PlaceholderChart/>
  },

  details: [
    {
      image: imgEducation,
      title: "Hightech Aargau",
      items: [
        {
          text: "Kernstück",
          value: "Massnahmen für den Wissens- & Technologietransfers, die den Aargauer Unternehmen einen optimalen Zugang zu den besten verfügbaren Technologien ermöglichen."
        }
      ]
    },
    {
      image: imgEducation2,
      title: "Campus Brugg-Windisch",
      items: [
        {
          text: "Studiengebiete",
          value: "Technik, Pädagogik und Wirtschaft"
        },
        {
          text: "Anzahl Studierende",
          value: "3'200"
        },
        {
          text: "Anzahl Mitarbeitende",
          value: "1'000"
        }
      ]
    },
    {
      image: imgEducation3,
      title: "Forschungsstandort",
      items: [
        {
          text: "Forschungsgebiete",
          value: "Materie und Material, Mensch und Gesundheit sowie Energie und Umwelt"
        },
        {
          text: "Anzahl Mitarbeitende",
          value: "1'500"
        },
        {
          text: "Ort",
          value: "zwischen Würenlingen und Villigen"
        }
      ]
    }
  ]
}
