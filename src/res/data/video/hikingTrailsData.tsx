import {Constants} from '../../../services/Constants';
import {VideoOverlayInterface} from './VideoOverlayInterface'
import iconClimbing from '../../icons/climbing.svg'
import iconHiking from '../../icons/hiking.svg'
import imgHikingTrails from '../../imgs/ol_hikingtrails.jpg'

export const hikingTrailsData: VideoOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Wanderwege",
    text: "Wanderer sind auf den gut beschilderten Wegen unterwegs und staunen über die landschaftliche Vielfalt der Region.",
    items: [
      {
        text: "Anzahl Wanderwege",
        value: "218"
      },
      {
        text: "Länge",
        value: "6530 km"
      },
      {
        text: "Höchster Punkt",
        value: "1200 m ü. M."
      }
    ]
  },
  topics: [
    {
      icon: iconClimbing,
      text: "Sport"
    },
    {
      icon: iconHiking,
      text: "Freizeit"
    }
  ],
  graph: {
    title: "Schwierigkeitsgrade der Wege"
  },
  details: {
    image: imgHikingTrails,
    title: "Wein-Wanderung",
    items: [
      {
        text: "Länge",
        value: "32 km"
      },
      {
        text: "Schwierigkeit",
        value: "leicht"
      }
    ]
  }
}
