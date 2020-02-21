import React from 'react';
import {GraphicChart} from '../../../../components/widgets/GraphicChart';
import {ReactComponent as SVGImage} from '../../../../res/graphics/holcim.svg';
import iconConstruction from '../../../../res/icons/construction.svg'
import iconEngineering from '../../../../res/icons/engineering.svg'
import imgDetails from '../../../../res/imgs/ol_lafarge-holcim.jpg';
import imgDetails2 from '../../../../res/imgs/ol_lafarge-holcim2.jpg';
import {Constants} from "../../../../services/Constants";
import {PopupOverlayInterface} from "../PopupOverlayInterface";

export const lafargeHolcim: PopupOverlayInterface = {
  type: Constants.TYPE_WORK,
  header: {
    title: "LafargeHolcim",
    text: "Innovation, Nachhaltigkeit und Partnerschaft bilden Boden, Pfeiler und Dach von Holcim, die sich darauf konzentriert, in ihrer Branche und im direkten Umfeld Herausragendes zu leisten.",
    items: [
      {
        text: "Angestellte",
        value: "75'000"
      },
      {
        text: "Standorte",
        value: "in 80 Ländern"
      }
    ]
  },

  topics: [
    {
      icon: iconEngineering,
      text: "Bauwesen"
    },
    {
      icon: iconConstruction,
      text: "Gebäudeteile"
    }
  ],

  graph: {
    title: "Zementproduktionskapazität der LafargeHolcim Ltd. weltweit (Mill. Tonnen)",
    chartComponent: <GraphicChart svgComponent={SVGImage}
                                  data={[
                                    {value: '374', unit: 'Tonnen'},
                                    {value: '353,3', unit: 'Tonnen'},
                                    {value: '318,4', unit: 'Tonnen'},
                                    {value: '312,9', unit: 'Tonnen'}]}
    />
  },

  details: [
    {
      image: imgDetails,
      title: "Holcim Technology Ltd",
      items: [
        {
          text: "Standort",
          value: "Holderbank"
        },
        {
          text: "Entfernung nach Aarau",
          value: "13 Km"
        },
        {
          text: "Angestellte",
          value: "1200"
        }
      ]
    },
    {
      image: imgDetails2,
      title: "LafargeHolcim Foundation",
      items: [
        {
          text: "Gründung",
          value: "2013"
        },
        {
          text: "Zweck",
          value: "Aufmerksamkeit in Baubranche für nachhaltiges Bauen"
        }
      ]
    },
  ]
}
