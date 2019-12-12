// icons
import iconClimbing from '../../res/icons/climbing.svg'
import iconHiking from '../../res/icons/hiking.svg'
// images
import imgHikingTrails from '../../res/imgs/ol_hikingtrails.jpg'

export interface VideoOverlayData {
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

interface Overlays {
  hikingTrails: VideoOverlayData
}

export const videoOverlays = {
  hikingTrails: {
    header: {
      title: "Wanderwege",
      text: "Wanderer sind auf den gut beschilderten Wegen unterwegs und staunen über die landschaftliche Vielfalt der Region.",
      items: [
        {
          text: "Anzahl Wanderwege",
          value: "218"
        },
        {
          text: "Länge",
          value: "6530 km"
        },
        {
          text: "Höchster Punkt",
          value: "1200 m ü. M."
        }
      ]
    },
    topics: [
      {
        icon: iconClimbing,
        text: "Sport"
      },
      {
        icon: iconHiking,
        text: "Freizeit"
      }
    ],
    graph: {
      title: "Schwierigkeitsgrade der Wege"
    },
    details: {
      image: imgHikingTrails,
      title: "Wein-Wanderung",
      items: [
        {
          text: "Länge",
          value: "32 km"
        },
        {
          text: "Schwierigkeit",
          value: "leicht"
        }
      ]
    }
  }
}
