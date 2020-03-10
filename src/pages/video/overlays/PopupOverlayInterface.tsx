import React, {ReactElement} from 'react';

export interface PopupOverlayInterface {
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

