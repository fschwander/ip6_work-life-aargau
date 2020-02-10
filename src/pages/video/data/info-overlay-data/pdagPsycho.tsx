import React from 'react';
import iconLink from '../../../../res/icons/link.svg';
import iconHealthcare from '../../../../res/icons/healthcare.svg'
import iconCommunity from '../../../../res/icons/community.svg'
import imgDetails from '../../../../res/imgs/ol_pdag.jpg'
import imgDetails2 from '../../../../res/imgs/ol_pdag2.jpg'
import imgDetails3 from '../../../../res/imgs/ol_pdag3.jpg'
import {Constants} from '../../../../services/Constants';
import {PlaceholderChart, VideoOverlayInterface} from "../VideoOverlayInterface";

export const pdagPsycho: VideoOverlayInterface = {
  type: Constants.TYPE_WORK,
  header: {
    title: "PDAG",
    text: "Die Psychiatrischen Dienste Aargau AG untersuchen, behandeln und betreuen psychisch erkrankte Menschen aller Altersgruppen mit sämtlichen psychiatrischen Krankheitsbildern.",
    items: [
      {
        text: "Mitarbeiter‎",
        value: "1221"
      },
      {
        text: "Betten",
        value: "394"
      },{
        text: "Offene Stellen",
        value: "31",
        linkIcon: {
          icon: iconLink,
          link: 'https://www.pdag.ch/stellen-und-karriere/offene-stellen/'
        }
      }
    ]
  },

  topics: [
    {
      icon: iconHealthcare,
      text: "Gesundheit"
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
      image: imgDetails3,
      title: "Psychiatrische Dienste Aargau",
      items: [
        {
          text: "Standort",
          value: "Windisch"
        },
        {
          text: "Entfernung nach Baden",
          value: "10 km"
        }
      ]
    },
    {
      image: imgDetails,
      title: "Adhärenzorientierte Psychose-Behandlung",
      items: [
        {
          text: "Richtet sich an",
          value: " Erwachsene 18 – 64"
        },
        {
          text: "mit folgenden Krankheitsbildern:",
          value: "Schizophrenie und wahnhafte Störungen"
        }
      ]
    },
    {
      image: imgDetails2,
      title: "ADHS-Stressbewältigungstraining",
      items: [
        {
          text: "Richtet sich an",
          value: "Erwachsene 18 – 64"
        },
        {
          text: "mit folgenden Krankheitsbildern",
          value: "Aktivitäts- und Aufmerksamkeitsstörungen"
        }
      ]
    },

  ]
}
