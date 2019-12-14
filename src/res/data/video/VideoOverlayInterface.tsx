import React from 'react';

export interface VideoOverlayInterface {
  type: string,
  header: {
    title: string,
    text: string,
    items: Array<TextItem>
  }
  topics: Array<ImageItem>,
  graph: {
    title: string,
    chartComponent: any
  },
  details: Array<DetailsItem>
}

export interface ImageItem {
  icon: string,
  text: string
}

export interface TextItem {
  text: string,
  value: string
}

interface DetailsItem {
  image: string,
  title: string,
  items: Array<TextItem>
}

const emptyObject: VideoOverlayInterface = {
  type: "",
  header: {
    title: "",
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
    chartComponent: React.Component
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
