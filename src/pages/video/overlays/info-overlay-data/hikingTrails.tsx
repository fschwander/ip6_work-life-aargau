import React from 'react';
import iconLink from '../../../../res/icons/link.svg';
import {Constants} from '../../../../services/Constants';
import iconClimbing from '../../../../res/icons/climbing.svg'
import iconHiking from '../../../../res/icons/hiking.svg'
import imgHikingTrails from '../../../../res/imgs/ol_hikingtrails.jpg'
import imgHikingTrails2 from '../../../../res/imgs/ol_hikingtrails2.jpg'
import imgHikingTrails3 from '../../../../res/imgs/ol_hikingtrails3.jpg'
import {PopupOverlayInterface} from '../PopupOverlayInterface'
import {ReactComponent as SVGImage} from '../../../../res/graphics/hiking.svg';
import {GraphicChart} from '../../../../components/widgets/GraphicChart';

export const hikingTrails: PopupOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Im Aargau findest du",
    text: "Wanderinnen und Wanderer sind auf den gut beschilderten Wegen unterwegs und staunen über die landschaftliche Vielfalt der Region.",
    items: [
      {
        text: "37+ Wanderwege",
        value: ""
      },
      {
        text: "Gesamtlänge mehr als 1'656 km",
        value: ""
      },
      {
        text: "908 m ü. M. Höchster Punkt",
        value: ""
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
    title: "Oberflächenstruktur der Wanderwege im Aargau ",
    chartComponent: <GraphicChart svgComponent={SVGImage}
                                  data={[
                                    {name: 'Naturbelag', value: '69.6%'},
                                    {name: 'Hartbelag', value: '30.4%'}]}
    />
  },
  details: [
    {
      image: imgHikingTrails,
      title: "Wein-Wanderung",
      linkIcon: {
        icon: iconLink,
        link: 'https://aargautourismus.ch/erleben/wandern/wein-wanderweg'
      },
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
      linkIcon: {
        icon: iconLink,
        link: 'https://aargautourismus.ch/erleben/wandern/habsburger-weg-wildegg-brugg'
      },
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
      linkIcon: {
        icon: iconLink,
        link: 'https://aargautourismus.ch/erleben/wandern/natur-und-kulturweg-linn'
      },
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
