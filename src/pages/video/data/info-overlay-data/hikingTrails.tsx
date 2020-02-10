import React from 'react';
import {PieChart} from '../../../../components/widgets/PieChart';
import {Constants} from '../../../../services/Constants';
import iconClimbing from '../../../../res/icons/climbing.svg'
import iconHiking from '../../../../res/icons/hiking.svg'
import imgHikingTrails from '../../../../res/imgs/ol_hikingtrails.jpg'
import imgHikingTrails2 from '../../../../res/imgs/ol_hikingtrails2.jpg'
import imgHikingTrails3 from '../../../../res/imgs/ol_hikingtrails3.jpg'
import {VideoOverlayInterface} from '../VideoOverlayInterface'

export const hikingTrails: VideoOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Wanderwege",
    text: "Wanderinnen und Wanderer sind auf den gut beschilderten Wegen unterwegs und staunen über die landschaftliche Vielfalt der Region.",
    items: [
      {
        text: "Anzahl Wanderwege",
        value: "37+"
      },
      {
        text: "Gesamtlänge",
        value: "1'656 km"
      },
      {
        text: "Höchster Punkt",
        value: "908 m ü. M."
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
    title: "Grafische Darstellung der Oberflächenstruktur",
    chartComponent: <PieChart data={[
      {name: 'Naturbelag', value: 30.4},
      {name: 'Hartbelag', value: 69.6}]}/>
  },
  details: [
    {
      image: imgHikingTrails,
      title: "Wein-Wanderung",
      items: [
        {
          text: "Strecke",
          value: "11 km"
        },
        {
          text: "Dauer",
          value: "2 Stunden 45 Minuten"
        }
      ]
    },
    {
      image: imgHikingTrails2,
      title: "Habsburger Weg: Wildegg - Brugg",
      items: [
        {
          text: "Strecke",
          value: "12 km"
        },
        {
          text: "Dauer",
          value: "3 Stunden 30 Minuten"
        }
      ]
    },
    {
      image: imgHikingTrails3,
      title: "Natur- und Kulturweg Linn",
      items: [
        {
          text: "Strecke",
          value: "4 km"
        },
        {
          text: "Dauer",
          value: "1 Stunde 15 Minuten"
        }
      ]
    }
  ]
}
