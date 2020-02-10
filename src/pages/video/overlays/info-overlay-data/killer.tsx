import React from 'react';
import iconEngineering from '../../../../res/icons/engineering.svg';
import iconLink from '../../../../res/icons/link.svg';
import imgDetails from '../../../../res/imgs/ol_killer.jpg';
import {Constants} from '../../../../services/Constants';
import {PlaceholderChart, PopupOverlayInterface} from "../PopupOverlayInterface";

export const killer: PopupOverlayInterface = {
  type: Constants.TYPE_WORK,
  header: {
    title: "Killer",
    text: "Ladenbaupartner und Spezialist für Ladeneinrichtungen und individuellen Inneneinrichtungen.",
    items: [
      {
        text: "Angestellte",
        value: "60"
      }, {
        text: "Gründung",
        value: "1936"
      }, {
        text: "Offene Stellen",
        value: "3",
        linkIcon: {
          icon: iconLink,
          link: 'https://www.killer.ch/de/ueber-uns/jobs.html'
        }
      }
    ]
  },

  topics: [
    {
      icon: iconEngineering,
      text: "Bauwesen"
    }
  ],

  graph: {
    title: "",
    chartComponent: <PlaceholderChart/>
  },

  details: [
    {
      image: imgDetails,
      title: "Killer swiss interiors",
      items: [
        {
          text: "Standort",
          value: "Lupfig"
        },
        {
          text: "Entfernung nach Aarau",
          value: "20,5 km"
        }
      ]
    },
  ]
}
