import React from 'react';
import {GraphicChart} from '../../../../components/widgets/GraphicChart';
import {ReactComponent as SVGImage} from '../../../../res/graphics/mammut.svg';
import iconClimbing from '../../../../res/icons/climbing.svg'
import iconHiking from '../../../../res/icons/hiking.svg'
import iconLink from '../../../../res/icons/link.svg'
import imgDetails from '../../../../res/imgs/ol_mammut.svg'
import imgDetails2 from '../../../../res/imgs/ol_mammut2.jpg'
import {Constants} from '../../../../services/Constants';
import {PopupOverlayInterface} from '../PopupOverlayInterface'

export const mammut: PopupOverlayInterface = {
  type: Constants.TYPE_WORK,
  header: {
    title: "Mammut",
    text: "Bei Mammut erwarten dich Begeisterung und Leidenschaft für den Bergsport. Wir wissen aus eigener Erfahrung, welchen Anforderungen Outdoor-Produkte gerecht werden müssen.",
    items_title: "Unternehmen Details",
    items: [
      {
        text: "Angestellte",
        value: "882 (2018)"
      }, {
        text: "Gründung",
        value: "1862"
      }, {
        text: "Offene Stellen",
        value: "6",
        linkIcon: {
          icon: iconLink,
          link: 'https://www.mammut.com/ch/de/company/jobs/'
        }
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
    title: "Nettoumsatz der Mammut Sports Group ",
    chartComponent: <GraphicChart svgComponent={SVGImage}
                                  data={[
                                    {name: 'Millionen CHF', value: "232,9"},
                                    {name: 'Millionen CHF', value: "228,6"},
                                    {name: 'Millionen CHF', value: "253,4"}]}
    />
  },

  details: [
    {
      image: imgDetails,
      title: "Mammut",
      items: [
        {
          text: "Standort",
          value: "Seon"
        },
        {
          text: "Entfernung nach Baden",
          value: "30 km"
        }
      ]
    },
    {
      image: imgDetails2,
      title: "Waste no waste",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.mammut.com/ch/de/stories/mammut-praesentiert-t-shirts-aus-leftover-stoffen/'
      },
      items: [
        {
          text: "Kampagne",
          value: "Produkte aus Reststücken"
        }
      ]
    }
  ]
}

