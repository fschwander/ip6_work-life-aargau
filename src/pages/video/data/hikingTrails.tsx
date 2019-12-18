import React from 'react';
import {PieChart} from '../../../components/widgets/PieChart';
import {Constants} from '../../../services/Constants';
import iconClimbing from '../../../res/icons/climbing.svg'
import iconHiking from '../../../res/icons/hiking.svg'
import imgHikingTrails from '../../../res/imgs/ol_hikingtrails.jpg'
import {VideoOverlayInterface} from './VideoOverlayInterface'

export const hikingTrails: VideoOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Wanderwege",
    text: "Wanderinnen und Wanderer sind auf den gut beschilderten Wegen unterwegs und staunen über die landschaftliche Vielfalt der Region.",
    items: [
      {
        text: "Anzahl Wanderwege",
        value: "218"
      },
      {
        text: "Gesamtlänge",
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
    title: "Anspruchsniveaus der Wanderwege",
    chartComponent: <PieChart data={[
      {name: 'leicht', value: 42},
      {name: 'mittel bis schwer', value: 58}]}/>
  },
  details: [
    {
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
  ]
}
