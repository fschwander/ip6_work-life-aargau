import React from 'react';

export interface SlideInOverlayInterface {
  header: {
    title: string,
    subtitle: string,
    text: string
  },

  image: string,

  facts: {
    items: Array<FactsItem>
  },

  map: {
    svg_map: string,
    location_title: string,
    location_text: string
  }

}

export interface FactsItem {
  title: string,
  text: string
}
