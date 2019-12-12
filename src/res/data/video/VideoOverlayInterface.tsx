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

interface ImageItem {
  icon: string,
  text: string
}

interface TextItem {
  text: string,
  value: string
}
