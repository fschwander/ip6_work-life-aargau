import React from 'react';
import iconLink from '../../../res/icons/link.svg';
import imgHikingTrails from '../../../res/imgs/ol_hikingtrails.jpg';
import imgDetails2 from '../../../res/imgs/ol_mammut2.jpg';
import {Constants} from '../../../services/Constants';
import {PlaceholderChart, VideoOverlayInterface} from "./VideoOverlayInterface";
import imgRealEstate from '../../../res/imgs/ol_real-estate.jpg'
import iconRealEstate from '../../../res/imgs/ol_real-estate.svg'

export const realEstate: VideoOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Gewerbeimmobilien & Areale",
    text: "Der Aargau ist ein perfekter Standort für Ihr Unternehmen zu vergleichsweise günstigen Preisen.",
    items: [
      {
        text: "Bezugsbereite Immobilien",
        value: "in mehr als 9 Städten"
      }
    ]
  },

  topics: [
    {
      icon: iconRealEstate,
      text: "Immobilien"
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
      image: imgRealEstate,
      title: "Gewerbhaus Oberentfelden",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.ag.ch/media/kanton_aargau/dvi/dokumente_5/awa_2/aargau_services_1/Immobilien_Industriestrasse_23_5036_Oberentfelden.pdf'
      },
      items: [
        {
          text: "Total Gewerbeflächen",
          value: "ca. 2'488 m2"
        },
        {
          text: "Features",
          value: "Autobahn Ausfahrt, Inhouse-Bistro, kurze Gehdistanz zum Bahnhof..."
        }
      ]
    },
    {
      image: imgDetails2,
      title: "Waste no waste",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.mammut.com/ch/de/stories/mammut-praesentiert-t-shirts-aus-leftover-stoffen/'
      },
      items: [
        {
          text: "Kampagne",
          value: "Produkte aus Reststücken"
        }
      ]
    }
  ]
}
