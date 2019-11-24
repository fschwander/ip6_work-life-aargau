import React from 'react';
import {Quiz} from '../../components/Quiz';
import bgImage from '../../res/imgs/galerie_picture_966.jpg'

interface SlideProps {
  isActive: boolean
}

export const Slide02: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide02 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  const questions = [
    {
      title: "Promotion vom Aargau",
      subtitle: "Was macht den Aargau berühmt?",
      choices: [
        {text: "Wintersport", isCorrect: false, wasSelected: false},
        {text: "Land der Seen", isCorrect: false, wasSelected: false},
        {text: "Socken und Rüebli", isCorrect: true, wasSelected: false},
        {text: "Hohe Berge", isCorrect: false, wasSelected: false},
      ],
      answer: "Weisse Socken und Rüeblitorte machen den Kanton berühmt. Zu sehen gibt es aber noch einiges mehr."
    }
  ]

  return (
    <div className={rootClass}
         style={rootStyle}>
      <Quiz question={questions[0]}/>
    </div>
  )
}
