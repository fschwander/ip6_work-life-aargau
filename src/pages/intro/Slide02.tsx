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
        {text: "Wintersport", isCorrect: false},
        {text: "Land der Seen", isCorrect: false},
        {text: "Socken und Rüebli", isCorrect: true},
        {text: "Hohe Berge", isCorrect: false},
      ],
      answer: "Weisse Socken und Rüeblitorte machen den Kanton zwar berühmt, zu sehen gibt es aber einiges mehr."
    }
  ]

  return (
    <div className={rootClass}
         style={rootStyle}>
      <Quiz question={questions[0]}/>
    </div>
  )
}
