const emptyObject: VideoOverlayInterface = {
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
    title: ""
  },

  details: {
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
  }
}

export interface VideoOverlayInterface {
  header: {
    title: string,
    text: string,
    items: Array<TextItem>
  }
  topics: Array<ImageItem>,
  graph: {
    title: string
  },
  details: {
    image: string,
    title: string,
    items: Array<TextItem>
  }
}

export interface ImageItem {
  icon: string,
  text: string
}

export interface TextItem {
  text: string,
  value: string
}
