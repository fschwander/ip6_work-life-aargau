import React from 'react';
import {Constants} from '../../../../services/Constants';
import {PlaceholderChart, PopupOverlayInterface} from "../PopupOverlayInterface";

export const education: PopupOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Bildung & Forschung",
    text: "",
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
    chartComponent: <PlaceholderChart/>
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
