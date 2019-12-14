import React from 'react';
import {Constants} from '../../../services/Constants';
import iconClimbing from '../../icons/climbing.svg'
import iconHiking from '../../icons/hiking.svg'
import imgDetails from '../../imgs/ol_mammut.svg'
import imgDetails2 from '../../imgs/ol_mammut2.jpg'
import {VideoOverlayInterface} from './VideoOverlayInterface'

export const mammut: VideoOverlayInterface = {
  type: Constants.TYPE_WORK,
  header: {
    title: "Mammut",
    text: "Bei Mammut erwarten dich Begeisterung und Leidenschaft für den Bergsport. Wir wissen aus eigener Erfahrung, welchen Anforderungen Outdoor-Produkte gerecht werden müssen.",
    items: [
      {
        text: "Standort",
        value: "Seon"
      }, {
        text: "Entfernung nach Baden",
        value: "30 km"
      }
    ]
  },

  topics: [
    {
      icon: iconClimbing,
      text: "Sport"
    }, {
      icon: iconHiking,
      text: "Freizeit"
    },
  ],

  graph: {
    title: "Nettoumsatz der Mammut Sports Group",
    chartComponent: React.Component
  },

  details: [
    {
      image: imgDetails,
      title: "Mammut",
      items: [
        {
          text: "Angestellte",
          value: "882 (2018)"
        }, {
          text: "Gründung",
          value: "1862"
        }, {
          text: "Offene Stellen",
          value: "viele!"
        }
      ]
    },
    {
      image: imgDetails2,
      title: "Waste no waste",
      items: [
        {
          text: "Kampagne",
          value: "Produkte aus Reststücken"
        }
      ]
    }
  ]
}

