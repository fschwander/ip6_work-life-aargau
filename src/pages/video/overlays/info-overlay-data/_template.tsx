import React from 'react';
import {GraphicChart} from '../../../../components/widgets/GraphicChart';
import {ReactComponent as SVGImage} from '../../../../res/graphics/real-estate.svg';
import {PopupOverlayInterface} from "../PopupOverlayInterface";

export const _template: PopupOverlayInterface = {
  type: "",
  header: {
    title: "",
    text: "",
    items_title: "",
    items: [
      {
        text: "",
        value: ""
      },
      {
        text: "",
        value: ""
      }
    ]
  },

  topics: [
    {
      icon: "",
      text: ""
    },
    {
      icon: "",
      text: ""
    }
  ],

  graph: {
    title: "",
    chartComponent: <GraphicChart svgComponent={SVGImage}
                                  data={[
                                    {value: "", unit: ''},
                                   ]}
    />
  },

  details: [
    {
      image: "",
      title: "",
      items: [
        {
          text: "",
          value: ""
        },
        {
          text: "",
          value: ""
        }
      ]
    },
  ]
}
