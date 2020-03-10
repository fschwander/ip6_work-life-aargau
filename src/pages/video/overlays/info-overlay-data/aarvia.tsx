import React from 'react';
import iconEngineering from '../../../../res/icons/engineering.svg';
import iconInfrastructure from '../../../../res/icons/infrastructure.svg';
import {ReactComponent as SVGImage} from '../../../../res/graphics/aarvia.svg';
import iconLink from '../../../../res/icons/link.svg';
import imgDetails from '../../../../res/imgs/ol_aarvia.jpg';
import {Constants} from '../../../../services/Constants';
import {PopupOverlayInterface} from "../PopupOverlayInterface";
import {GraphicChart} from '../../../../components/widgets/GraphicChart';

export const aarvia: PopupOverlayInterface = {
  type: Constants.TYPE_WORK,
  header: {
    title: "Aarvia Gruppe",
    text: "Die Aarvia Gruppe ist mit rund 350 Mitarbeitenden eine der führenden Bauunternehmungen im Kanton Aargau. Aarvia bietet Ihnen ein Komplettangebot, das sämtliche Aufgaben und Technologien in den Bereichen Strassen- und Tiefbau, Unterhalts-, Belags- und Infrastrukturbau, Erd- und Spezialtiefbau, Baulogistik, Transport und Baustoffe abdeckt.\n",
    items_title: "Unternehmen Details",
    items: [
      {
        text: "Angestellte",
        value: "350"
      },
      {
        text: "Unternehmen der Aarvia Gruppe",
        value: "6"
      },
      {
        text: "Offene Stellen",
        value: "5",
        linkIcon: {
          icon: iconLink,
          link: 'https://www.aarvia.ch/'
        }
      }
    ]
  },

  topics: [
    {
      icon: iconEngineering,
      text: "Bauwesen"
    },
    {
      icon: iconInfrastructure,
      text: "Infrastruktur"
    }
  ],

  graph: {
    title: "Nationalstrassenlänge in 2018 (Kilometer)",
    chartComponent: <GraphicChart svgComponent={SVGImage}
                                  data={[
                                    {name: 'Gemischverkehr', value: "1'846"},
                                    {name: 'Autostrassen', value: "1'745"},
                                    {name: 'Autobahnen', value: "1'450"}]}
    />
  },

  details: [
    {
      image: imgDetails,
      title: "Aarvia Bau AG",
      items: [
        {
          text: "Standort",
          value: "Würenlingen"
        },
        {
          text: "Entfernung nach Aarau",
          value: "28,4 km"
        },
        {
          text: "Angestellte",
          value: "240"
        }
      ]
    }
  ]
}
