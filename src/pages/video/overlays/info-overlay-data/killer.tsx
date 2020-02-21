import React from 'react';
import {GraphicChart} from '../../../../components/widgets/GraphicChart';
import {ReactComponent as SVGImage} from '../../../../res/graphics/killer.svg';
import iconEngineering from '../../../../res/icons/engineering.svg';
import iconLink from '../../../../res/icons/link.svg';
import imgDetails from '../../../../res/imgs/ol_killer.jpg';
import {Constants} from '../../../../services/Constants';
import {PopupOverlayInterface} from "../PopupOverlayInterface";

export const killer: PopupOverlayInterface = {
  type: Constants.TYPE_WORK,
  header: {
    title: "Killer",
    text: "Wir verstehen uns als Ladenbaupartner und Spezialist für hochwertige Inneneinrichtungen in den Segmenten:, Detailhandelsketten, Apotheken und Drogerien, Kosmetikmarken und Individueller Innenausbau",
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
    title: "Der Leistungsablauf",
    chartComponent: <GraphicChart svgComponent={SVGImage}
                                  data={[
                                    {value: 'Konzeption'},
                                    {value: 'Plannung'},
                                    {value: 'Produktion'},
                                    {value: 'Logistik'},
                                    {value: 'Montage'}]}
    />
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
