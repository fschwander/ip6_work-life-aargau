import {Constants} from '../../../services/Constants';
import iconClimbing from '../../icons/climbing.svg'
import iconHiking from '../../icons/hiking.svg'
import imgMain from '../../imgs/ol_mammut.svg'
import {VideoOverlayInterface} from './VideoOverlayInterface'

export const mammutData: VideoOverlayInterface = {
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
    title: "Nettoumsatz der Mammut Sports Group"
  },

  details: {
    image: imgMain,
    title: "Mammut",
    items: [
      {
        text: "Mitarbeiter_innen",
        value: "882 (2018)"
      }, {
        text: "Gründung",
        value: "1862"
      }, {
        text: "Offene Stellen",
        value: "viele!"
      }
    ]
  }
}

