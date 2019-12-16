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
  value: string,
  linkIcon?: LinkIcon
}

interface DetailsItem {
  image: string,
  title: string,
  linkIcon?: LinkIcon,
  items: Array<TextItem>
}

interface LinkIcon {
  icon: string,
  link: string
}

/**
 * Stencil for new object overlay data
 */
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

// todo: remove this component when placeholder is no longer needed
export const PlaceholderChart: React.FC = () => {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100%', color: '#7EE2D1', backgroundColor: '#7EE2D111'
    }}>
      <h4 style={{opacity: 0.6}}>Platzhalter</h4>
    </div>
  )
}
