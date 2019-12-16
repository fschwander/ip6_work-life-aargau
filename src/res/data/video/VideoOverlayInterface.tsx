import React, {ReactElement} from 'react';

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
    chartComponent: ReactElement
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
  linkIcon?: LinkItem
}

interface DetailsItem {
  image: string,
  title: string,
  linkIcon?: LinkItem,
  items: Array<TextItem>
}

interface LinkItem {
  icon: string,
  link: string
}

/**
 * Placeholder chart for time during implementation
 * todo: remove this component when implementation of overlays is finished
 */
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
