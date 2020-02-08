import React from 'react';

export interface SlideInOverlayInterface {
  header: {
    title: string,
    subtitle: string,
    text: string
  },

  image: string,

  facts: {
    fact1: string,
    fact2: string
  },

  map: {
    svg_map: string,
    location_title: string,
    location_text: string
  }

}
